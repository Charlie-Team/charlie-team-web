import { Box } from '@mui/material';

export default function PageLayout(props: { children: React.ReactNode }) {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <div style={{ height: '80px' }}></div>
      {/* <Container>{props.children}</Container> */}
      <Box flex={1} minHeight={0}>{props.children}</Box>
    </Box>
  );
}
