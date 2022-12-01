import { Avatar, Divider, Grid, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import React from "react";

const Nosotros = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item md={12} sx={{ marginTop: 2, marginLeft: 2 }}>
        <Typography variant="h4" component="div">
          Nosotros y nuestro proyecto
        </Typography>
      </Grid>
      <Grid item md={12} sx={{ marginTop: 2, marginLeft: 2 }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={3}>
            <Grid container>
              <Grid item md={12} xs={12} sx={{ paddingLeft: 18 }}>
                <Avatar
                  alt="Francisco J. Arias Z."
                  sx={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#000000",
                    fontSize: 40,
                  }}
                >
                  😎
                </Avatar>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                sx={{ textAlign: "center", marginTop: 2 }}
              >
                Francisco J. Arias Z.
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Grid container>
              <Grid item md={12} xs={12} sx={{ paddingLeft: 18 }}>
                <Avatar
                  alt="Jose F. Peñaloza V."
                  sx={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#000000",
                    fontSize: 40,
                  }}
                >
                  🤔
                </Avatar>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                sx={{ textAlign: "center", marginTop: 2 }}
              >
                José F. Peñaloza V.
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Grid container>
              <Grid item md={12} xs={12} sx={{ paddingLeft: 18 }}>
                <Avatar
                  alt="Belén I. Friant"
                  sx={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#000000",
                    fontSize: 40,
                  }}
                >
                  😚
                </Avatar>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                sx={{ textAlign: "center", marginTop: 2 }}
              >
                Belén I. Friant.
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Grid container>
              <Grid item md={12} xs={12} sx={{ paddingLeft: 18 }}>
                <Avatar
                  alt="Matias A. Fontalba A."
                  sx={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#000000",
                    fontSize: 40,
                  }}
                >
                  🫡
                </Avatar>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                sx={{ textAlign: "center", marginTop: 2 }}
              >
                Matias A. Fontalba A.
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12} sx={{ marginTop: 10 }}>
        <Divider />
      </Grid>
      <Grid item md={1} sx={{ marginTop: 18, textAlign: "right" }}>
        <FormatQuoteIcon sx={{ fontSize: 80 }} />
      </Grid>
      <Grid item md={6} sx={{ marginTop: 20 }}>
        <Typography variant="h6" component="div">
          El enfoque de nuestra empresa se basa en el desarrollo de software que
          mejore los procesos y optimice los tiempo en actividades llevadas a
          cabo en instituciones académicas. Es por esto, que nuestro enfoque se
          basa en un sistema híbrido que combina las bases de datos
          digitalizadas como las bases de datos escritas, mediante validaciones
          por códigos de barra, datos de identificación del estudiante, para asi
          permitir un correcto registro de asistencia en las votaciones, al
          igual que llevar una vitacora y estadística de asistencia por jornada.
        </Typography>
      </Grid>
      <Grid item md={1} sx={{ marginTop: 40, textAlign: "left" }}>
        <FormatQuoteIcon sx={{ fontSize: 80 }} />
      </Grid>
    </Grid>
  );
};

export default Nosotros;
