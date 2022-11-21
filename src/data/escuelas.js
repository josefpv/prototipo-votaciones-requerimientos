import _ from "lodash";
import { toast } from "react-toastify";

const escuelas = [
  {
    id: 1,
    idSede: 1,
    escuela: "Administración y Negocios",
  },
  {
    id: 2,
    idSede: 1,
    escuela: "Administración y Negocios",
  },
  {
    id: 3,
    idSede: 1,
    escuela: "Comunicación",
  },
  {
    id: 4,
    idSede: 1,
    escuela: "Construcción",
  },
  {
    id: 5,
    idSede: 1,
    escuela: "Diseño",
  },
  {
    id: 6,
    idSede: 1,
    escuela: "Informática y Telecomunicaciones",
  },
  {
    id: 7,
    idSede: 2,
    escuela: "Administración y Negocios",
  },
  {
    id: 8,
    idSede: 2,
    escuela: "Informática y Telecomunicaciones",
  },
  {
    id: 7,
    idSede: 2,
    escuela: "Ingeniería y Recursos Naturales",
  },
  {
    id: 9,
    idSede: 3,
    escuela: "Informática y Telecomunicaciones",
  },
  {
    id: 10,
    idSede: 3,
    escuela: "Salud",
  },
  {
    id: 11,
    idSede: 4,
    escuela: "Administración y Negocios",
  },
  {
    id: 12,
    idSede: 4,
    escuela: "Administración y Negocios",
  },
  {
    id: 13,
    idSede: 4,
    escuela: "Comunicación",
  },
  {
    id: 14,
    idSede: 4,
    escuela: "Construcción",
  },
  {
    id: 15,
    idSede: 4,
    escuela: "Diseño",
  },
  {
    id: 16,
    idSede: 4,
    escuela: "Informática y Telecomunicaciones",
  },
];

export const fetchEscuelas = (idSede) => {
  const lista = _.filter(escuelas, { idSede });

  if (lista && lista.length > 0) {
    return lista;
  } else {
    toast.error(
      "No hay escuelas registradas para esa sede, por favor seleccione otra."
    );
  }
};
