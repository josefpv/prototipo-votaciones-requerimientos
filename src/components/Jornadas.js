import React from "react";
import { Grid, Button, TextField, Typography } from "@mui/material";
import Navbar from "./Navbar";

import SanJoaquin from "./../images/san_joaquin.jpg";
import PuenteAlto from "./../images/puente_alto.jpg";
import Apoquindo from "./../images/apoquindo.jpg";
import TarjetaJornada from "./TarjetaJornada";

const Jornadas = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item md={12}>
          <Typography variant="h4" component="div">
            Jornadas Creadas
          </Typography>
        </Grid>
        <Grid item md={2}>
          <TarjetaJornada
            titulo="SJ20221201"
            descripcion="San Joaquín- Jornada electoral desde el 01-12-2022 11:00 hasta el 01-12-2022 16:00"
            imagen={SanJoaquin}
          />
        </Grid>
        <Grid item md={2}>
          <TarjetaJornada
            titulo="PA20221201"
            descripcion="Puente Alto - Jornada electoral desde el 01-12-2022 11:00 hasta el 01-12-2022 16:00"
            imagen={PuenteAlto}
          />
        </Grid>
        <Grid item md={2}>
          <TarjetaJornada
            titulo="SCA20221201"
            descripcion="San Carlos de Apoquindo - Jornada electoral desde el 01-12-2022 11:00 hasta el 01-12-2022 16:00"
            imagen={Apoquindo}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Jornadas;
