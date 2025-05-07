"use client";

import { Box, Typography, Paper, useTheme, alpha, Button, Link } from "@mui/material";
import { motion } from "framer-motion";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EmailIcon from '@mui/icons-material/Email';
import Image from "next/image";

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
        fontSize: isMobile ? '1.5rem' : '2.7rem',
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
              background: alpha('#A71930', 0.2),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <PaymentIcon sx={{ color: '#A71930', fontSize: isMobile ? '1rem' : '2rem' }} />
            </Box>
            <Box display='flex' alignItems={isMobile ? 'flex-start' : 'center'} flexDirection={isMobile ? 'column' : 'row'} width='100%'>
              <Typography variant="h4" sx={{ color: 'white', mb: 0.5 }}>
                PayPal
              </Typography>
              <Box sx={{
                  ml: isMobile ? undefined : 'auto',
                  display: 'flex',
                  alignItems: 'center', gap: '1.5rem'
              }}>
<Button 
                variant="contained"
                color="primary"
                onClick={() => {
                  const email = "coachrosscuts@gmail.com";
                  // PayPal has well-supported direct URLs for donations
                  // This will open the PayPal site configured for sending money
                  // window.open(`https://www.paypal.com/paypalme/${email.split('@')[0]}`, '_blank');
                  
                  // Alternative direct link if the PayPal.me doesn't work
                  window.open(`https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${encodeURIComponent(email)}&currency_code=USD`, '_blank');
                }}
                sx={{
                  fontWeight: 'bold',
                  borderRadius: 2,
                  bgcolor: '#0070ba', // PayPal blue
                  '&:hover': {
                    bgcolor: '#005ea6', // Darker PayPal blue
                    boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                  },
                  boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                }}
              >
                Donate
              </Button>

                {!isMobile && <Image
                  src="/paypal.jpeg"
                  alt="Coach's Cuts logo"
                  width={isMobile ? 40 : 100}
                  height={isMobile ? 40 : 100}
                  style={{
                    objectFit: "contain",
                  }}
                />}
              </Box>
              
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
              background: alpha('#A71930', 0.2),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <AccountBalanceIcon sx={{ color: '#A71930', fontSize: isMobile ? '1rem' : '2rem' }} />
            </Box>
            <Box display='flex' alignItems={isMobile ? 'flex-start' : 'center'} flexDirection={isMobile ? 'column' : 'row'} width='100%'>
              <Typography variant="h4" sx={{ color: 'white', mb: 0.5 }}>
                Zelle
              </Typography>
              <Box sx={{
                  ml: isMobile ? undefined : 'auto',
                  display: 'flex',
                  alignItems: 'center', gap: '1.5rem'
              }}>
              <Button 
                variant="contained"
                onClick={() => {
                  const recipient = "coachrosscuts@gmail.com";
                  alert(`Please open your banking app with Zelle and send money to: ${recipient}`);
                  window.open("https://www.zellepay.com/", '_blank');
                }}
                sx={{
                  fontWeight: 'bold',
                  borderRadius: 2,
                  ml: isMobile ? undefined : 'auto',
                  background: 'linear-gradient(135deg, #6E31C9 0%, #44148E 100%)',
                  color: 'white',
                  border: '2px solid #8544E1',
                  boxShadow: '0 4px 12px rgba(110, 49, 201, 0.3)',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #7B3BE0 0%, #5B28A8 100%)',
                    boxShadow: '0 6px 16px rgba(110, 49, 201, 0.4)',
                    border: '2px solid #9A5CF2',
                  }
                }}
              >
                  Donate
              </Button>
              {!isMobile && <Image
                  src="/chase.png"
                  alt="Coach's Cuts logo"
                  width={isMobile ? 40 : 100}
                  height={isMobile ? 40 : 100}
                  style={{
                    objectFit: "contain",
                  }}
                />}
              </Box>
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
              background: alpha('#A71930', 0.2),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <EmailIcon sx={{ color: '#A71930', fontSize: isMobile ? '1rem' : '2rem' }} />
            </Box>
            <Box>
              <Typography variant="h4" sx={{ color: 'white', mb: 0.5 }}>
                Large Donations
              </Typography>
              {/* Email Link for Larger Donations */}
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                For larger donations, please email{' '}
                <Link 
                  href="mailto:coachrosscuts@gmail.com?subject=Donation%20to%20Coach's%20Cuts&body=I'd%20like%20to%20make%20a%20donation%20to%20support%20Coach's%20Cuts.%20Please%20let%20me%20know%20the%20best%20way%20to%20proceed%20with%20a%20larger%20donation.%0A%0AThank%20you%20for%20your%20important%20work%20in%20the%20community."
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'underline',
                    ml: '.1rem',
                    '&:hover': {
                      color: '#A71930',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  coachrosscuts@gmail.com
                </Link>
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
      {/* Contact Section */}
      <GlassCard delay={0.3} id='contact' isMobile={isMobile}>
        <SectionTitle isMobile={isMobile}>Contact Us</SectionTitle>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8, fontSize: 'inherit', mb: 3 }}>
          Have questions about our mission or want to get involved? We&apos;d love to hear from you. 
          Reach out to Coach&apos;s Cuts through email or social media, and we&apos;ll respond as soon as possible. 
          Whether you&apos;re interested in volunteering, sponsoring an event, or just learning more about what we do, 
          we&apos;re here to connect!
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          gap: isMobile ? 4 : 10.5,
          mt: 4
        }}>
          {/* Email Contact */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 2
          }}>
            <Box sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: '50%', 
              width: 48, 
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 0.5, fontWeight: 500 }}>
                Email
              </Typography>
              <Link 
                href="mailto:coachrosscuts@gmail.com?subject=Inquiry%20about%20Coach's%20Cuts"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#A71930',
                    textDecoration: 'underline'
                  }
                }}
              >
                coachrosscuts@gmail.com
              </Link>
            </Box>
          </Box>
          
          {/* Instagram Contact */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 2
          }}>
            <Box sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: '50%', 
              width: 48, 
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <rect width="20" height="20" x="2" y="2" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 0.5, fontWeight: 500 }}>
                Instagram
              </Typography>
              <Link 
                href="https://www.instagram.com/frankyross_/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#A71930',
                    textDecoration: 'underline'
                  }
                }}
              >
                @frankyross_
              </Link>
            </Box>
          </Box>
        </Box>
      </GlassCard>
    </>
  );
}