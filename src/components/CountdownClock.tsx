// CountdownClock.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

/** Shape of the remaining‑time state */
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/** Props accepted by the outer component */
interface CountdownClockProps {
  /** Target moment we’re counting down to */
  target: Date;
}

/** Props for each flipping tile */
interface FlipCardProps {
  value: number;
  label: string;
  isFlipping: boolean;
}

/**
 * One flip tile (e.g. “04”, caption “DAYS”).
 * Flips whenever `isFlipping` toggles to true.
 */
const FlipCard: React.FC<FlipCardProps> = ({ value, label, isFlipping }) => {
  const formatted = value.toString().padStart(2, '0');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 1 }}>
      <Card
        elevation={4}
        sx={{
          bgcolor: 'primary.main',
          borderRadius: 1,
          width: 64,
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          /* 3‑D flip */
          transform: isFlipping ? 'rotateX(180deg)' : 'rotateX(0deg)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          perspective: 1000,
        }}
      >
        <Typography variant="h4" sx={{ color: 'common.white', fontWeight: 'bold', userSelect: 'none' }}>
          {formatted}
        </Typography>
      </Card>

      <Typography
        variant="caption"
        sx={{ color: 'text.secondary', fontWeight: 600, mt: 0.5, userSelect: 'none', letterSpacing: 1 }}
      >
        {label}
      </Typography>
    </Box>
  );
};

/**
 * Main countdown component.
 *
 * @example
 * <CountdownClock target={new Date('2025-06-06T00:00:00-05:00')} />
 */
const CountdownClock: React.FC<CountdownClockProps> = ({ target }) => {
  /** Remaining time */
  const [{ days, hours, minutes, seconds }, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /** Which tiles are currently flipping */
  const [flipping, setFlipping] = useState<Record<keyof TimeLeft, boolean>>({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  /** Previous snapshot, so we know what changed */
  const prev = useRef<TimeLeft | null>(null);

  /** Convert a millisecond diff → {d,h,m,s}. Always returns non‑negative. */
  const diffToTimeLeft = (ms: number): TimeLeft => {
    const clamped = Math.max(ms, 0);
    return {
      days: Math.floor(clamped / 86_400_000),
      hours: Math.floor((clamped / 3_600_000) % 24),
      minutes: Math.floor((clamped / 60_000) % 60),
      seconds: Math.floor((clamped / 1_000) % 60),
    };
  };

  useEffect(() => {
    // Initial render
    const first = diffToTimeLeft(target.getTime() - Date.now());
    setTimeLeft(first);
    prev.current = first;

    const id = setInterval(() => {
      setTimeLeft(() => {
        const next = diffToTimeLeft(target.getTime() - Date.now());

        // Flag units that changed → triggers flip
        setFlipping({
          days: prev.current?.days !== next.days,
          hours: prev.current?.hours !== next.hours,
          minutes: prev.current?.minutes !== next.minutes,
          seconds: prev.current?.seconds !== next.seconds,
        });

        prev.current = next;
        return next;
      });
    }, 1_000);

    return () => clearInterval(id);
  }, [target]);

  return (
    <Card
      sx={{
        display: 'inline-flex',
        bgcolor: 'background.paper',
        px: 3,
        py: 2,
        borderRadius: 3,
        boxShadow: 4,
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', '&:last-child': { pb: 2 } }}>
        <FlipCard value={days} label="DAYS" isFlipping={flipping.days} />
        <Typography variant="h5" sx={{ mx: 0.5, fontWeight: 'bold' }}>
          :
        </Typography>
        <FlipCard value={hours} label="HRS" isFlipping={flipping.hours} />
        <Typography variant="h5" sx={{ mx: 0.5, fontWeight: 'bold' }}>
          :
        </Typography>
        <FlipCard value={minutes} label="MIN" isFlipping={flipping.minutes} />
        <Typography variant="h5" sx={{ mx: 0.5, fontWeight: 'bold' }}>
          :
        </Typography>
        <FlipCard value={seconds} label="SEC" isFlipping={flipping.seconds} />
      </CardContent>
    </Card>
  );
};

export default CountdownClock;
