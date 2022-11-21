import React from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  Paper,
  Divider,
  Alert,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

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
                <Alert severity="info">
                  Escanee el código QR o ingrese manualmente el serial para
                  comenzar...
                </Alert>
              </Grid>
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
                <Alert severity="error">Serial ingresado no válido</Alert>
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="outlined-basic"
                  label="RUN"
                  variant="outlined"
                  fullWidth
                  helperText="Ingrese su RUN sin puntos, con guión y dígito verificador."
                />
              </Grid>
              <Grid item md={12}>
                <Alert severity="warning">
                  Usted no se encuentra habilitado para sufragar, por favor
                  diríjase al Centro Estudiantil para mayor información.
                </Alert>
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
            <Grid item md={4}>
              <TextField
                id="outlined-basic"
                label="Nombres"
                variant="outlined"
                fullWidth
                inputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                id="outlined-basic"
                label="Apellidos"
                variant="outlined"
                fullWidth
                inputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                id="outlined-basic"
                label="Carreras"
                variant="outlined"
                fullWidth
                inputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                id="outlined-basic"
                label="Sede"
                variant="outlined"
                fullWidth
                inputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                id="outlined-basic"
                label="Jornada"
                variant="outlined"
                fullWidth
                inputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                id="outlined-basic"
                label="Mesa de votación"
                variant="outlined"
                fullWidth
                inputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item md={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Confirmo que mis datos son correctos y autorizo a DuocUC a utilizar mis datos para fines de asistencia electoral."
                />
              </FormGroup>
            </Grid>
            <Grid item md={4}>
              <Button
                variant="outlined"
                color="warning"
                startIcon={<HowToVoteIcon />}
              >
                Registrar Asistencia
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Asistencia;
