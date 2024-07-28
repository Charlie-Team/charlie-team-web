import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import PageLayout from '../PageLayout';
import PTSDImage from '../../assets/ptsd.jpg';
import TBIImage from '../../assets/tbi.jpeg';
import PainManagementImage from '../../assets/pain-management.jpg';

export default function ResearchPage() {
  return (
    <PageLayout>
      <Box display="flex" flexDirection="column" padding="1rem" rowGap="1rem">
        <Box>
          <Card>
            <CardContent>
              <CardHeader title="PTSD" />
              <Box display="flex" columnGap="1rem">
                <Typography variant="body2" color="text.secondary" fontSize="18px" flexBasis="66%">
                  Post-Traumatic Stress Disorder (PTSD) is a mental health condition that's
                  triggered by a terrifying event — either experiencing it or witnessing it.
                  Symptoms may include flashbacks, nightmares, severe anxiety, and uncontrollable
                  thoughts about the event. People with PTSD may feel stressed or frightened even
                  when they are not in danger. Treatment options include therapy, medication, and
                  support from loved ones, and research is continually advancing to improve
                  understanding and treatment of PTSD.
                </Typography>
                <Box flexBasis="33%">
                  <CardMedia component="img" height="140" image={PTSDImage} alt="PTSD" />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardContent>
              <CardHeader title="Traumatic Brain Injury (TBI)" />
              <Box display="flex" columnGap="1rem">
                <Box flexBasis="33%">
                  <CardMedia component="img" height="140" image={TBIImage} alt="Pain Managment" />{' '}
                </Box>
                <Typography variant="body2" color="text.secondary" fontSize="18px" flexBasis="66%">
                  Traumatic Brain Injury (TBI) occurs when an external force injures the brain. It
                  can result from a violent blow or jolt to the head or body, or from an object
                  penetrating the skull. TBIs can range from mild concussions to severe injuries
                  resulting in long-term complications or death. Symptoms can include loss of
                  consciousness, confusion, headaches, dizziness, and cognitive impairments.
                  Research into TBI aims to understand the mechanisms of injury, develop better
                  diagnostic tools, and create effective treatments to aid recovery and improve the
                  quality of life for those affected.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardContent>
              <CardHeader title="Pain Management" />
              <Box display="flex" columnGap="1rem">
                <Typography variant="body2" color="text.secondary" fontSize="18px" flexBasis="66%">
                  Pain management encompasses a wide range of techniques to prevent, reduce, or stop
                  pain sensations. This can include medications, physical therapy, psychological
                  approaches, and alternative therapies like acupuncture. Effective pain management
                  is crucial for improving the quality of life for individuals suffering from
                  chronic pain conditions, post-surgical pain, or pain from injuries. Research in
                  this field is focused on discovering new pain relief methods, understanding pain
                  mechanisms, and ensuring that treatments are both effective and safe.
                </Typography>
                <Box flexBasis="33%">
                  <CardMedia
                    component="img"
                    height="140"
                    image={PainManagementImage}
                    alt="Pain Managment"
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </PageLayout>
  );
}
