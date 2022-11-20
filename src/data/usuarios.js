import _ from "lodash";
import { toast } from "react-toastify";
import history from "../components/history";

const usuarios = [
  {
    nombre: "Jose Francisco",
    usuario: "josefvivas",
    password: "12345",
    isAdmin: false,
  },
];

export const iniciaSesion = (usuario, password) => {
  const encontrado = _.findIndex(usuarios, { usuario, password });
  console.log(encontrado);
  if (encontrado >= 0) {
    history.push("/inicio");
  } else {
    toast.error("Usuario o password incorrecto, por favor intente nuevamente.");
  }
};
