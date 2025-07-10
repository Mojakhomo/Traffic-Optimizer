import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Divider,
  Stack
} from '@mui/material';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const fleetData = [
  {
    title: '🚚 Delivery Fleet',
    description: 'Optimized for low fuel usage and quick city deliveries.',
    fuelEfficiency: '15 km/l',
    eta: '35 mins',
    vehicleLoad: '75%',
    mapImage: 'https://via.placeholder.com/500x220?text=Delivery+Route+Preview'
  },
  {
    title: '🚌 Public Transport',
    description: 'Supports high capacity routes with frequent stops and smart routing.',
    fuelEfficiency: '10 km/l',
    eta: '50 mins',
    vehicleLoad: '90%',
    mapImage: 'https://via.placeholder.com/500x220?text=Public+Transport+Route'
  },
  {
    title: '🚑 Emergency Services',
    description: 'Uses shortest-time routing based on real-time traffic + incidents.',
    fuelEfficiency: 'N/A',
    eta: '12 mins',
    vehicleLoad: 'Low (priority access)',
    mapImage: 'https://via.placeholder.com/500x220?text=Emergency+Route+Preview'
  }
];

export default function FleetOptimization() {
  return (
    <Box sx={{ padding: 4, maxWidth: 1000, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Fleet Optimization
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
        AI-enhanced route planning for public, delivery, and emergency fleets across Lesotho.
      </Typography>
      <Grid container spacing={4}>
        {fleetData.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Card elevation={4}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {item.description}
                </Typography>

                <img
                  src={item.mapImage}
                  alt={`${item.title} Map`}
                  style={{
                    width: '100%',
                    borderRadius: 8,
                    marginTop: 16,
                    marginBottom: 16,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }}
                />

                <Divider sx={{ mb: 2 }} />

                <Stack spacing={1}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocalGasStationIcon sx={{ mr: 1 }} />
                    <Typography variant="body2">
                      <strong>Fuel Efficiency:</strong> {item.fuelEfficiency}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    <Typography variant="body2">
                      <strong>Estimated Time of Arrival:</strong> {item.eta}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocalShippingIcon sx={{ mr: 1 }} />
                    <Typography variant="body2">
                      <strong>Vehicle Load:</strong> {item.vehicleLoad}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
