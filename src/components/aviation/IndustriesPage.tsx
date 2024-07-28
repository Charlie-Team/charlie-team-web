import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import PageLayout from '../PageLayout';
import DroneOilGas from '../../assets/drones-oil-gas.jpg';
import DroneEnergy from '../../assets/drones-energy.jpg';
import DroneDefense from '../../assets/drones-defense.jpg';
import DroneMining from '../../assets/drones-mining.jpg';
import DroneFilm from '../../assets/drones-film.jpg';

export default function IndustriesPage() {
  return (
    <PageLayout>
      <Box display="flex" flexDirection="column" padding="1rem" rowGap="1rem">
        <Box>
          <Card>
            <CardContent>
              <CardHeader title="Oil and Gas" />
              <Box display="flex" columnGap="1rem">
                <Typography variant="body2" color="text.secondary" fontSize="18px" flexBasis="66%">
                  The oil and gas industry utilizes drones for various purposes such as pipeline monitoring,
                  infrastructure inspection, and safety surveillance. Drones offer a cost-effective and efficient
                  way to ensure the integrity of assets, detect leaks, and prevent accidents. They can access
                  hard-to-reach areas and provide real-time data, enhancing operational safety and efficiency.
                </Typography>
                <Box flexBasis="33%">
                  <CardMedia component="img" height="140" image={DroneOilGas} alt="Oil and Gas" />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardContent>
              <CardHeader title="Energy" />
              <Box display="flex" columnGap="1rem">
                <Box flexBasis="33%">
                  <CardMedia component="img" height="140" image={DroneEnergy} alt="Energy" />{' '}
                </Box>
                <Typography variant="body2" color="text.secondary" fontSize="18px" flexBasis="66%">
                  In the energy sector, drones are deployed for solar panel inspection, wind turbine maintenance,
                  and power line monitoring. They help in identifying defects, improving maintenance schedules,
                  and enhancing the overall reliability of energy infrastructure. Drones contribute to reducing
                  downtime and operational costs while increasing safety for workers.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardContent>
              <CardHeader title="Defense and Security" />
              <Box display="flex" columnGap="1rem">
                <Typography variant="body2" color="text.secondary" fontSize="18px" flexBasis="66%">
                  Drones play a crucial role in defense and security by providing reconnaissance, surveillance,
                  and intelligence gathering capabilities. They are used in border patrol, search and rescue
                  missions, and tactical operations. The use of drones enhances situational awareness, reduces
                  risks to personnel, and offers a strategic advantage in various military and security scenarios.
                </Typography>
                <Box flexBasis="33%">
                  <CardMedia
                    component="img"
                    height="140"
                    image={DroneDefense}
                    alt="Defense and Security"
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardContent>
              <CardHeader title="Mining" />
              <Box display="flex" columnGap="1rem">
                <Box flexBasis="33%">
                  <CardMedia component="img" height="140" image={DroneMining} alt="Mining" />{' '}
                </Box>
                <Typography variant="body2" color="text.secondary" fontSize="18px" flexBasis="66%">
                  In the mining industry, drones are utilized for surveying and mapping, monitoring stockpiles,
                  and inspecting equipment. They provide accurate and up-to-date data, helping in resource
                  management and operational planning. Drones enhance safety by reducing the need for workers
                  to enter hazardous areas and improve overall operational efficiency.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardContent>
              <CardHeader title="Film" />
              <Box display="flex" columnGap="1rem">
                <Typography variant="body2" color="text.secondary" fontSize="18px" flexBasis="66%">
                  The film industry leverages drones for aerial photography and cinematography, providing unique
                  and dynamic shots that were previously difficult or expensive to achieve. Drones offer a
                  versatile and cost-effective solution for capturing high-quality footage, enhancing the visual
                  storytelling in movies, TV shows, and commercials. They allow filmmakers to explore new creative
                  possibilities and improve production efficiency.
                </Typography>
                <Box flexBasis="33%">
                  <CardMedia
                    component="img"
                    height="140"
                    image={DroneFilm}
                    alt="Film"
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