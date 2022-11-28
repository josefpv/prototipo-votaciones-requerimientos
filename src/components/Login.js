import React, { useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Logo from "./../images/logo.png";
import { iniciaSesion } from "../data/usuarios";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleIniciaSesion = () => {
    iniciaSesion(usuario, password);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={4} sx={{ textAlign: "center" }}>
        <Grid container sx={{ marginTop: 30 }}>
          <Grid item md={12}>
            <img src={Logo} height={100} width={400} />
            <Typography>Sistema de Asistencia a Votaciones</Typography>
          </Grid>
          <Grid item md={12} sx={{ marginTop: 4 }}>
            <TextField
              id="outlined-basic"
              label="Usuario"
              variant="outlined"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </Grid>
          <Grid item md={12} sx={{ marginTop: 4 }}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item md={12} sx={{ marginTop: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleIniciaSesion}
            >
              Ingresar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
