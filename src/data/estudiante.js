import _ from "lodash";

const estudiantes = [
  {
    run: "265392083",
    nombres: "Jose Francisco",
    apellidos: "Peñaloza Vivas",
    carreras: "Ingeniería en Informática",
    sede: "San Joaquín",
    jornada: "Vespertino",
    mesa: "A-07",
    habilitado: true,
  },
];

export const buscaEstudiante = (run) => {
  console.log(run);
  const index = _.findIndex(estudiantes, { run });
  console.log(index);
  return estudiantes[index];
};
