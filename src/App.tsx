import { useState } from 'react';
import { Button, Container, Typography, Box, Card, CardContent, Chip } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PublicIcon from '@mui/icons-material/Public';

const prefijos = ["Xylo", "Zentra", "Glar", "Krypto", "Vex", "Nebu"];
const nucleos = ["n", "phor", "tar", "gar", "on"];
const sufijos = ["ia", "us", "prime", " IV", " X"];
const tipos = ["Gigante Gaseoso", "Planeta Rocoso", "Mundo Helado", "Super-Tierra", "Enana Roja"];
const descripciones = [
  "orbitando una estrella binaria.",
  "con una rica biosfera de flora luminiscente.",
  "conocido por sus ruinas de una civilización antigua.",
  "donde la gravedad es el doble que en la Tierra."
];

const aleatorio = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const generarPlaneta = () => {
  const nombre = `${aleatorio(prefijos)}${aleatorio(nucleos)}${aleatorio(sufijos)}`;
  const tipo = aleatorio(tipos);
  const descripcion = `Un ${tipo.toLowerCase()} ${aleatorio(descripciones)}`;
  return { nombre, tipo, descripcion };
};

function App() {
  const [planet, setPlanet] = useState<{ nombre: string; tipo: string; descripcion: string } | null>(null);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Generador de Planetas
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Crea mundos para tus aventuras de ciencia ficción
        </Typography>

        <Button 
          variant="contained" 
          size="large"
          startIcon={<AutoAwesomeIcon />}
          onClick={() => setPlanet(generarPlaneta())}
          sx={{ my: 4 }}
        >
          ¡Generar un Nuevo Mundo!
        </Button>

        {planet && (
          <Card sx={{ width: '100%', maxWidth: 500, boxShadow: 3, mt: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <PublicIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h5">{planet.nombre}</Typography>
              </Box>
              <Chip label={planet.tipo} color="secondary" sx={{ mb: 2 }} />
              <Typography variant="body1" color="text.secondary">
                {planet.descripcion}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </Container>
  );
}

export default App;