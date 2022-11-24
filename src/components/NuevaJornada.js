import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { fetchSedes } from "../data/sedes";
import { fetchEscuelas } from "../data/escuelas";
import history from "./history";

const NuevaJornada = () => {
  const [sede, setSede] = useState(1);
  const [sedesLista, setSedesLista] = useState([]);
  const [jornada, setJornada] = useState("Diurno");
  const [escuela, setEscuela] = useState(1);
  const [escuelas, setEscuelas] = useState([]);

  const [desde, setDesde] = useState(new Date());
  const [hasta, setHasta] = useState(new Date());

  useEffect(() => {
    const listaSedes = fetchSedes();
    setSedesLista(listaSedes);
  }, []);

  useEffect(() => {
    const listaEscuelas = fetchEscuelas(sede);
    setEscuelas(listaEscuelas);
  }, [sede]);

  useEffect(() => {
    if (escuelas.length && escuelas[0].id) {
      setEscuela(escuelas[0].id);
    } else {
      setEscuela(1);
    }
  }, [escuelas]);

  const handleChangeSede = (e) => {
    setSede(e.target.value);
  };

  const handleChangeEscuela = (e) => {
    setEscuela(e.target.value);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item md={12}>
          <Typography variant="h4" component="div">
            Nueva Jornada Electoral
          </Typography>
        </Grid>
        <Grid item md={4}>
          <TextField
            id="outlined-basic"
            label="Identificador"
            variant="outlined"
            fullWidth
            helperText="Ingresa un texto que ayude a identificar esta jornada del resto, ej: una combinación de fecha y sede."
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            id="outlined-basic"
            label="Descripción"
            variant="outlined"
            fullWidth
            helperText="Ingresa una descripción que ayude detalle brevemente la jornada."
          />
        </Grid>
        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sede</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sede}
              label="Sede"
              onChange={handleChangeSede}
            >
              {sedesLista &&
                sedesLista.map((s) => (
                  <MenuItem key={s.id} value={s.id}>
                    {s.sede}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Jornada</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={jornada}
              label="Jornada"
              onChange={(e) => setJornada(e.target.value)}
            >
              <MenuItem value="Diurno">Diurno</MenuItem>
              <MenuItem value="Vespertino">Vespertino</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Escuela</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={escuela}
              label="Escuela"
              onChange={handleChangeEscuela}
            >
              {escuelas &&
                escuelas.map((e) => (
                  <MenuItem key={e.id} value={e.id}>
                    {e.escuela}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} fullWidth />}
            label="Inicio"
            value={desde}
            onChange={(newValue) => {
              setDesde(newValue);
            }}
          />
        </Grid>
        <Grid item md={4}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} fullWidth />}
            label="Termino"
            value={hasta}
            onChange={(newValue) => {
              setHasta(newValue);
            }}
          />
        </Grid>
        <Grid item md={4}>
          <Button
            variant="outlined"
            color="warning"
            fullWidth
            sx={{ height: "100%" }}
            startIcon={<AddIcon />}
          >
            Crear Jornada
          </Button>
        </Grid>
        <Grid item md={4}>
          <Button
            fullWidth
            sx={{ height: "100%" }}
            startIcon={<HomeIcon />}
            onClick={() => history.push("/inicio")}
          >
            Ir a inicio
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default NuevaJornada;
