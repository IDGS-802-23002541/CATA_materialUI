import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f9d2b3',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function GridAidee() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Grid size={12} rowSpacing={1}>
        <Item>Inteligente</Item>
      </Grid>
      <Grid container spacing={2} rowSpacing={1}>
        <Grid size={6}>
          <Item>Bella</Item>
        </Grid>
        <Grid size={6}>
          <Item>Extrovertida</Item>
        </Grid>
      </Grid>
      <Grid container spacing={3} rowSpacing={1}>
        <Grid size={4}>
          <Item>Carismática</Item>
        </Grid>
        <Grid size={4}>
          <Item>Risueña</Item>
        </Grid>
        <Grid size={4}>
          <Item>Responsable</Item>
        </Grid>
      </Grid>
      <Grid container spacing={4} rowSpacing={1}>
        <Grid size={3}>
          <Item>Resiliente</Item>
        </Grid>
        <Grid size={3}>
          <Item>Competitiva</Item>
        </Grid>
        <Grid size={3}>
          <Item>Determinada</Item>
        </Grid>
        <Grid size={3}>
          <Item>Sincera</Item>
        </Grid>
      </Grid>
  </Box>
  );
}
