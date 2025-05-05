"use client";

import { Box, Typography, Paper, useTheme, alpha } from "@mui/material";
import { motion } from "framer-motion";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

interface GlassCardProps {
    children: React.ReactNode;
    delay?: number;
    [key: string]: unknown;
    id: string;
    isMobile: boolean
}

interface InfoSectionProps {
  isMobile: boolean;
}

export default function InfoSection({isMobile}: InfoSectionProps) {
  const theme = useTheme();
  // Styled card component
  const GlassCard = ({ children, delay = 0, id, isMobile, ...props }: GlassCardProps) => (    <Paper
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8, 
            ease: "easeOut",
            delay
          }
        }
      }}
      id={id}
      elevation={0}
      sx={{
        background: 'rgba(10, 30, 50, 0.6)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        mb: 4,
        p: 3,
        overflow: 'hidden',
        fontSize: isMobile ? '.9rem' : '1.05rem'
      }}
      {...props}
    >
      {children}
    </Paper>
  );

  // Section title component
  const SectionTitle = ({ children, isMobile }: { children: React.ReactNode, isMobile: boolean }) => (
    <Typography 
      variant="h4" 
      sx={{ 
        fontFamily: theme.typography.h4.fontFamily,
        mb: 3,
        fontSize: isMobile ? '1.5rem' : undefined,
        color: 'white',
        position: 'relative',
        paddingBottom: '10px',
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '60px',
          height: '3px',
          background: 'linear-gradient(90deg, #A71930 0%, rgba(167, 25, 48, 0.3) 100%)',
          borderRadius: '2px'
        }
      }}
    >
      {children}
    </Typography>
  );

  return (
    <>
      {/* Mission Statement Section */}
      <GlassCard delay={0.1} id='mission' isMobile={isMobile}>
        <SectionTitle isMobile={isMobile}>Mission Statement</SectionTitle>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8, fontSize: 'inherit' }}>
          As its primary mission, COACH ROSS CUTS brings pride and dignity to members of the Houston
          Area Homeless Community with haircuts, opportunities for limited medical care, nutrition
          counseling, new and clean clothing, and provision of hygiene supplies. Elevating self-esteem,
          allowing people an opportunity to feel good about themselves and to socialize with others in
          fellowship is how we at COACH ROSS CUTS succeed at helping others &quot;One Haircut at a Time.&quot;
        </Typography>
      </GlassCard>

      {/* What We Do Section */}
      <GlassCard delay={0.2} id='what-we-do' isMobile={isMobile}>
        <SectionTitle isMobile={isMobile}>What We Do</SectionTitle>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8, mb: 2, fontSize: 'inherit' }}>
          An NFL Coach, Frank Ross, is the founder of this non-profit charity that has been hosting events
          to attract homeless persons as recipients of these services for the past four years. Players,
          other coaches and staff, and volunteers from the community all lend a hand.
        </Typography>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8, mb: 2, fontSize: 'inherit' }}>
          Especially noted are the professional barbers who give entire days away from their employment to give selflessly
          to this effort. Many social service agencies such as Covenant House, Moving Waters, Reach the
          Homeless, and Star of Hope are but a few of the partnering agencies.
        </Typography>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8, fontSize: 'inherit' }}>
          Vendors such as Olive Garden and others generously donate their food and services as well.
        </Typography>
      </GlassCard>

      {/* What You Can Do Section */}
      <GlassCard delay={0.3} id='what-you-can-do' isMobile={isMobile}>
        <SectionTitle isMobile={isMobile}>What You Can Do</SectionTitle>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8, fontSize: 'inherit' }}>
          Many, many friends and family have given donations to run this program over the past four
          years. As we have now obtained our Federally recognized non-profit 501 (c)(3) status you can
          click the DONATE NOW link on our home page to become a helpful sponsor of this on-going
          mission. No donation to our grass-roots effort is too small or too large. We will be forever
          grateful of your willingness to join in our crusade. We want every person in homeless
          circumstances to walk away feeling good about themselves. Thank you so very much!
        </Typography>
      </GlassCard>

      {/* Donation Info Section */}
      <GlassCard delay={0.4} id='donate' isMobile={isMobile}>
        <SectionTitle isMobile={isMobile}>Donation Information</SectionTitle>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 3,
          my: 2
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            p: 2,
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Box sx={{ 
              mr: 3, 
              p: 2, 
              borderRadius: '50%', 
              background: alpha('#A71930', 0.2)
            }}>
              <PaymentIcon sx={{ color: '#A71930', fontSize: '2rem' }} />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ color: 'white', mb: 0.5 }}>
                PayPal
              </Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Send your donation to: donations@coachrosscuts.org
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            p: 2,
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Box sx={{ 
              mr: 3, 
              p: 2, 
              borderRadius: '50%', 
              background: alpha('#A71930', 0.2)
            }}>
              <AccountBalanceIcon sx={{ color: '#A71930', fontSize: '2rem' }} />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ color: 'white', mb: 0.5 }}>
                Zelle
              </Typography>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Send your donation to: zelle@coachrosscuts.org
              </Typography>
            </Box>
          </Box>
        </Box>
        
        <Typography 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.7)', 
            mt: 3, 
            fontSize: '0.9rem',
            fontStyle: 'italic',
            textAlign: 'center'
          }}
        >
          All donations are tax-deductible under our 501(c)(3) status
        </Typography>
      </GlassCard>
    </>
  );
}