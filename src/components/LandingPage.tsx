import { Box, Button, Divider, Typography } from '@mui/material';
import PageLayout from './PageLayout';
import { Link } from 'react-router-dom';
import HealthCareImage from '../assets/veteran-ptsd-psychedelic.jpg';
import AviationImage from '../assets/drone.jpg';

export default function LandingPage() {
  return (
    <PageLayout>
      <Box
        display="flex"
        sx={{
          flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
          minHeight: '100%',
        }}
      >
        <Box display="flex" flexDirection="column" flex={1} minHeight={0} p={4} borderRadius="8px">
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Health Care
          </Typography>
          <Box flex={1} minHeight={0}>
            <img
              src={HealthCareImage}
              alt="Healthcare"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                marginBottom: '1rem', 
              }}
            />
          </Box>
          <Box display="flex" flexDirection="column" flex={1} minHeight={0} marginTop="1rem">
            <Typography variant="body1" paragraph fontSize="18px">
              We provide health care services to those who need it most. Our focus is on treating
              PTSD with innovative psychedelic therapies. These treatments are designed to address
              the root causes of trauma and offer long-lasting relief from symptoms. Our dedicated
              team of healthcare professionals is committed to delivering personalized care,
              ensuring that each patient receives the attention and support they need to heal and
              recover.
            </Typography>
            <Typography variant="body1" paragraph fontSize="18px">
              Our approach includes a combination of therapy, medication, and holistic practices to
              create a comprehensive treatment plan tailored to each individual's needs. By
              leveraging the latest research in psychedelic medicine, we aim to provide cutting-edge
              solutions for mental health challenges.
            </Typography>
            <Box display="flex" justifyContent="center" margin="2rem" height="100%" alignItems="center">
              <Link to="/health-care" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Learn More
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        />

        <Box display="flex" flexDirection="column" flex={1} minHeight={0} p={4} borderRadius="8px">
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Aviation
          </Typography>
          <Box display="flex" flexDirection="column" flex={1} minHeight={0}>
            <Typography variant="body1" paragraph fontSize="18px">
              We provide aviation services to those who need it most. Our services encompass support
              for the oil, gas, energy, mining, film, defense, and security sectors using advanced
              drone technology. We offer a range of aerial solutions, including surveying, mapping,
              inspections, and surveillance, to enhance operational efficiency and safety.
            </Typography>
            <Typography variant="body1" paragraph fontSize="18px">
              Our state-of-the-art drones are equipped with high-resolution cameras and sensors,
              enabling precise data collection and real-time analysis. Whether it's for pipeline
              inspections, geological surveys, or cinematic filming, our drone services are designed
              to meet the unique needs of each industry. Our experienced pilots and technicians
              ensure that all operations are conducted safely and in compliance with regulatory
              standards.
            </Typography>
            <Box display="flex" height="100%" justifyContent="center" margin="2rem" alignItems="center">
              <Link to="/aviation" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Learn More
                </Button>
              </Link>
            </Box>
          </Box>
          <Box flex={1} minHeight={0}>
            <img
              src={AviationImage}
              alt="Aviation"
              style={{
                height: '100%',
                width: '100%',
                borderRadius: '8px',
                marginBottom: '1rem',
              }}
            />
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
}
