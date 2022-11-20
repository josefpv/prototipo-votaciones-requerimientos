import React from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  Paper,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Navbar from "./Navbar";

const Asistencia = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Grid container>
        <Grid item md={4} xs={12} sx={{ height: 800 }}>
          <Paper sx={{ m: 2, p: 2, height: "100%" }} elevation={3}>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item md={12}>
                <TextField
                  id="outlined-basic"
                  label="Serial"
                  variant="outlined"
                  fullWidth
                  helperText="Escanee el codigo QR."
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="outlined-basic"
                  label="Serial"
                  variant="outlined"
                  fullWidth
                  helperText="Ingrese su RUN sin puntos, con guión y dígito verificador."
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  variant="outlined"
                  startIcon={<SearchIcon />}
                  color="warning"
                  fullWidth
                >
                  Buscar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item md={8} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Typography sx={{ pt: 2 }} variant="h4" component="div">
                Datos del Estudiante
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Divider />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Asistencia;
