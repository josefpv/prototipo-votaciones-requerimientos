import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Avatar,
  Button,
  TextField,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import TimelineIcon from "@mui/icons-material/Timeline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AddIcon from "@mui/icons-material/Add";
import { red } from "@mui/material/colors";
import history from "./history";

const Menu = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Grid container sx={{ p: 2 }} spacing={2}>
        <Grid item md={2}>
          <Card sx={{ minWidth: 275, textAlign: "center" }}>
            <CardContent>
              <HowToVoteIcon sx={{ fontSize: 80, color: "#ffb700" }} />
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Votaciones DuocUC
              </Typography>
              <Typography variant="h5" component="div">
                Asistencia al Voto
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Registro de asistencia al voto de estudiantes habilitados a
                sufragar.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="warning"
                size="small"
                onClick={() => history.push("/asistencia")}
                endIcon={<KeyboardDoubleArrowRightIcon />}
              >
                Ir a...
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={2}>
          <Card sx={{ minWidth: 275, textAlign: "center" }}>
            <CardContent>
              <AssignmentIcon sx={{ fontSize: 80, color: "#ffb700" }} />
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Votaciones DuocUC
              </Typography>
              <Typography variant="h5" component="div">
                Jornadas Electorales
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Administra las jornadas de elecciones activas. inicio término.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                color="warning"
                endIcon={<AddIcon />}
                onClick={() => history.push("/jornada/nueva")}
              >
                Nueva
              </Button>
              <Button
                size="small"
                color="warning"
                endIcon={<KeyboardDoubleArrowRightIcon />}
                onClick={() => history.push("/jornadas")}
              >
                Administrar
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={2}>
          <Card sx={{ minWidth: 275, textAlign: "center" }}>
            <CardContent>
              <TimelineIcon sx={{ fontSize: 80, color: "#ffb700" }} />
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Votaciones DuocUC
              </Typography>
              <Typography variant="h5" component="div">
                Resultados Asistencia.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Visualiza los resultados de la jornada.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="warning"
                size="small"
                endIcon={<KeyboardDoubleArrowRightIcon />}
                onClick={() => history.push("/resultados")}
              >
                Ir a...
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={12}>
          <Divider />
        </Grid>
        <Grid item md={2}>
          <Card sx={{ minWidth: 275, textAlign: "center" }}>
            <CardContent>
              <BorderColorIcon sx={{ fontSize: 80, color: "#ffb700" }} />
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Rquerimientos DuocUC
              </Typography>
              <Typography variant="h5" component="div">
                Ingresar Requerimiento.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Ingresa un nuevo requerimiento al sistema.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="warning"
                size="small"
                endIcon={<KeyboardDoubleArrowRightIcon />}
              >
                Ir a...
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={2}>
          <Card sx={{ minWidth: 275, textAlign: "center" }}>
            <CardContent>
              <AutoStoriesIcon sx={{ fontSize: 80, color: "#ffb700" }} />
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Rquerimientos DuocUC
              </Typography>
              <Typography variant="h5" component="div">
                Ver Requerimientos.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Ve el estado de tus requerimietos y respuestas.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="warning"
                size="small"
                endIcon={<KeyboardDoubleArrowRightIcon />}
              >
                Ir a...
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Menu;
