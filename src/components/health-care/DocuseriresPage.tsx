import { Box, Card, CardContent, Typography } from '@mui/material';
import PageLayout from '../PageLayout';

export default function DcouseriesPage() {
  return (
    <PageLayout>
      <Box height="100%" padding="1rem" display="flex" justifyContent="center">
        <Card style={{ height: '100%', width: '100%', maxWidth: '1200px' }}>
          <CardContent style={{ height: '100%'}}>
            <Box
              display="flex"
              width="100%"  
              height="100%"
              flexDirection="column"
              justifyContent="stretch"
              padding="1rem"
            >
              <Box paddingBottom="1rem" display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h5" component="h1" gutterBottom fontWeight="bold">
                  Docuseries - Treating PTSD with Psychedelics, TBI and Pain Management
                </Typography>
              </Box>
              <Box flex={1} display="flex" justifyContent="center">
                <iframe
                  src="https://www.youtube.com/embed/ZkbIR7YjsIo"
                  title="YouTube video player"
                  style={{ border: 'none', width: '100%', height: '100%'}}
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </PageLayout>
  );
}
