import { Box } from '@mui/material';
import PageLayout from '../PageLayout';

export default function MissionPage() {
  return (
    <PageLayout>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundImage:
            'url(https://news.llu.edu/sites/news.llu.edu/files/styles/crop_featured_image/public/GettyImages-1394396934.jpg?h=d9c4b6e6&itok=Q97tXVR9)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 'calc(100vh - 86px)',
          padding: '1rem',
          position: 'relative',
          color: 'white',
          columnGap: '4rem',
        }}
      >
        <Box
          flex={1}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            maxWidth: '600px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>PTSD affects every</h1>
          {/* <p style={{ fontSize: '1.25rem', lineHeight: '1.5' }}>
            We are a group of developers who are passionate about technology and its potential to
            change the world for the better.
          </p> */}
        </Box>

        <Box flex={1}>
          <iframe
            src="https://www.youtube.com/embed/ZkbIR7YjsIo"
            title="YouTube video player"
            style={{ border: 'none', width: '100%', height: '100%', aspectRatio: '16/9' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Box>
      </Box>
    </PageLayout>
  );
}
