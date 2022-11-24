import React, { useState, useEffect } from "react";
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
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import Navbar from "./Navbar";
import { registraAsistencia } from "../data/asistencia";
import { buscaEstudiante } from "../data/estudiante";
import { toast } from "react-toastify";

let intervalo = 0;
const Asistencia = () => {
  const [serial, setSerial] = useState("");
  const [run, setRun] = useState("");
  const [habilitado, setHabilitado] = useState(false);
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellido] = useState("");
  const [carreras, setCarreras] = useState("");
  const [sede, setSede] = useState("");
  const [jornada, setJornada] = useState("");
  const [mesa, setMesa] = useState("");
  const [autorizacion, setAutorizacion] = useState(false);
  const [registrado, setRegistrado] = useState(false);

  const [esRunValido, setEsRunValido] = useState(false);
  const [esSerialValido, setEsSerialValido] = useState(false);

  const [contador, setContador] = useState(10);

  const handleChangeRun = (e) => {
    setRun(e.target.value);
    setEsRunValido(Fn.validaRut(e.target.value));
  };

  const handleBuscaEstudiante = () => {
    const data = buscaEstudiante(run.replace("-", ""));
    if (!data) {
      toast.error(
        "Estudiante no encontrado, por favor verifique el RUN he intente nuevamente."
      );
    } else {
      setNombres(data.nombres);
      setApellido(data.apellidos);
      setCarreras(data.carreras);
      setSede(data.sede);
      setJornada(data.jornada);
      setMesa(data.mesa);
      setHabilitado(data.habilitado);
    }
  };

  const handleReinicia = () => {
    setNombres("");
    setApellido("");
    setCarreras("");
    setSede("");
    setJornada("");
    setMesa("");
    setHabilitado("");
    setSerial("");
    setRun("");
    setHabilitado(false);
    setEsRunValido(false);
    setRegistrado(false);
    setAutorizacion(false);
    setContador(10);
  };

  const handleActiva = () => {};

  const handleRegistraAsistencia = () => {
    if (registraAsistencia(serial, run)) {
      intervalo = setInterval(() => {
        setContador((contador) => contador - 1);
      }, 1000);
      setRegistrado(true);
    }
  };

  useEffect(() => {
    if (contador == 0) {
      clearInterval(intervalo);
      handleReinicia();
    }
  }, [contador]);

  useEffect(() => {
    setNombres("");
    setApellido("");
    setCarreras("");
    setSede("");
    setJornada("");
    setMesa("");
    setHabilitado("");
    setContador(10);
    setAutorizacion(false);
  }, [serial, run]);

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
                  onChange={(e) => setSerial(e.target.value.toUpperCase())}
                  value={serial}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="outlined-basic"
                  label="RUN"
                  variant="outlined"
                  fullWidth
                  helperText="Ingrese su RUN sin puntos, con guión y dígito verificador."
                  onChange={handleChangeRun}
                  value={run}
                />
              </Grid>
              <Grid item md={12}>
                {run && !esRunValido ? (
                  <Alert severity="error">
                    RUN invâlido, por favor asegúrese de ingresar RUN sin
                    puntos, con guión y dígito verificador.
                  </Alert>
                ) : null}
              </Grid>
              <Grid item md={12}>
                {nombres ? (
                  habilitado ? (
                    <Alert severity="info">
                      Usted se encuentra habilitado para sufragar por favor,
                      veifique sus datos y marque la casilla para registrar
                      asistencia.
                    </Alert>
                  ) : (
                    <Alert severity="warning">
                      Usted no se encuentra habilitado para sufragar, por favor
                      diríjase al Centro Estudiantil para mayor información.
                    </Alert>
                  )
                ) : null}
              </Grid>
              <Grid item md={12}>
                <Button
                  variant="outlined"
                  startIcon={<SearchIcon />}
                  color="warning"
                  fullWidth
                  disabled={!esRunValido}
                  onClick={handleBuscaEstudiante}
                >
                  Buscar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item md={8} xs={12}>
          {registrado ? (
            <Grid container spacing={2}>
              <Grid item md={12} xs={12} sx={{ textAlign: "center" }}>
                <ThumbUpIcon sx={{ fontSize: 120, color: "#ffb700" }} />
              </Grid>
              <Grid item md={12} xs={12} sx={{ textAlign: "center" }}>
                <Typography variant="h4">
                  <strong>{`¡TU VOTO FUE REGISTRADO!`}</strong>
                  <br />
                  {`${nombres} ${apellidos}, ahora ve a la mesa ${mesa}`}
                </Typography>
              </Grid>
              <Grid item md={12} xs={12} sx={{ textAlign: "center" }}>
                <Typography variant="subtitle">
                  Al registrar tu asistencia, estás ejerciendo tu derecho como
                  estudiante a elegir. Por eso, desde DuocUC te invitamos a
                  siempre participar en las jornadas electorales.
                </Typography>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                sx={{ textAlign: "center", color: "red" }}
              >
                <Typography variant="subtitle">{`Reiniciando en ${contador}...`}</Typography>
              </Grid>
            </Grid>
          ) : (
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
                  value={nombres}
                  onChange={(e) => setNombres(e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  id="outlined-basic"
                  label="Apellidos"
                  variant="outlined"
                  fullWidth
                  inputProps={{ readOnly: true }}
                  value={apellidos}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  id="outlined-basic"
                  label="Carreras"
                  variant="outlined"
                  fullWidth
                  inputProps={{ readOnly: true }}
                  value={carreras}
                  onChange={(e) => setCarreras(e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  id="outlined-basic"
                  label="Sede"
                  variant="outlined"
                  fullWidth
                  inputProps={{ readOnly: true }}
                  value={sede}
                  onChange={(e) => setSede(e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  id="outlined-basic"
                  label="Jornada"
                  variant="outlined"
                  fullWidth
                  inputProps={{ readOnly: true }}
                  value={jornada}
                  onChange={(e) => setJornada(e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  id="outlined-basic"
                  label="Mesa de votación"
                  variant="outlined"
                  fullWidth
                  inputProps={{ readOnly: true }}
                  value={mesa}
                  onChange={(e) => setMesa(e.target.value)}
                />
              </Grid>
              <Grid item md={12}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={autorizacion}
                        onChange={(e) => setAutorizacion(e.target.checked)}
                      />
                    }
                    label="Confirmo que mis datos son correctos y autorizo a DuocUC a utilizar mis datos para fines de asistencia electoral."
                  />
                </FormGroup>
              </Grid>
              <Grid item md={4}>
                <Button
                  variant="outlined"
                  color="warning"
                  startIcon={<HowToVoteIcon />}
                  onClick={handleRegistraAsistencia}
                  disabled={habilitado && autorizacion ? false : true}
                >
                  Registrar Asistencia
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Asistencia;

var Fn = {
  // Valida el rut con su cadena completa "XXXXXXXX-X"
  validaRut: function (rutCompleto) {
    rutCompleto = rutCompleto.replace("‐", "-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
    var tmp = rutCompleto.split("-");
    var digv = tmp[1];
    var rut = tmp[0];
    if (digv == "K") digv = "k";

    return Fn.dv(rut) == digv;
  },
  dv: function (T) {
    var M = 0,
      S = 1;
    for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
    return S ? S - 1 : "k";
  },
};
