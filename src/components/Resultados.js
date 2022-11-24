import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Avatar,
  Divider,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import Grafica from "./Grafica";
import Navbar from "./Navbar";
import Ganadora from "./../images/ganadora.png";
//general
const options = {
  title: "Distribución Total",
};

const data = [
  ["Asistencia", "Cant. Personas"],
  ["Asistieron", 482],
  ["No Asistieron", 12],
];

const options2 = {
  title: "Distribución Voto",
};

const data2 = [
  ["Voto", "Cantidad"],
  ["Correcto", 455],
  ["Blanco", 16],
  ["Nulo", 11],
];

const options3 = {
  title: "Asistencia por Mesa",
};

const data3 = [
  ["Mesa", "Cantidad"],
  ["A-1", 60],
  ["A-2", 60],
  ["B-1", 90],
  ["B-2", 60],
  ["B-3", 80],
  ["C-1", 72],
  ["C-1", 60],
];

const options4 = {
  title: "Voto por Candidato",
};

const data4 = [
  ["Mesa", "Cantidad"],
  ["Alejanda B. Sanchez G.", 40],
  ["Julio C. Fernández C.", 60],
  ["Santiago M. Muñoz S.", 86],
  ["Andrea C. Villanueva M.", 296],
];

const Resultados = () => {
  const [jornada, setJornada] = React.useState(10);

  const handleChange = (event) => {
    setJornada(event.target.value);
  };
  return (
    <React.Fragment>
      <Navbar />
      <Grid container sx={{ p: 2 }}>
        <Grid item md={12}>
          <Typography variant="h4" component="div">
            Resultado Asistencia
          </Typography>
        </Grid>
        <Grid item md={12} sx={{ marginTop: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Jornada</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={jornada}
              label="Jornada"
              onChange={handleChange}
            >
              <MenuItem value={10}>SJ20220110</MenuItem>
              <MenuItem value={20}>SCA20220110</MenuItem>
              <MenuItem value={30}>PA20220110</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <Divider />
        </Grid>
        <Grid item md={12} sx={{ marginTop: 2, marginBottom: 2 }}>
          <Grid container justifyContent="center" alignContent="center">
            <Grid item md={1} sx={{ pl: 4 }}>
              <Avatar
                alt="Andrea C. Villanueva M."
                src={Ganadora}
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid item md={11}>
              <Typography variant="h5" component="div">
                Andrea C. Villanueva M.
              </Typography>
              <Typography variant="subtitle" component="div">
                Estudiante de Ingenierìa en Informàtica, ha obtenido la mayor
                cantidad de votos en esta jornada.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Divider />
        </Grid>
        <Grid item md={6}>
          <Grafica options={options} data={data} />
        </Grid>
        <Grid item md={6}>
          <Grafica options={options2} data={data2} />
        </Grid>
        <Grid item md={6}>
          <Grafica options={options3} data={data3} />
        </Grid>
        <Grid item md={6}>
          <Grafica options={options4} data={data4} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Resultados;
