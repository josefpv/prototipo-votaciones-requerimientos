import _ from "lodash";
import { toast } from "react-toastify";

const seriales = ["12345", "ABCD", "123456"];

export const registraAsistencia = (serial, run) => {
  if (!_.includes(seriales, serial)) {
    toast.error(
      "No se pudo registrar asistencia debido el serial ingresado es inválido, por favor verifique e intente nuevamente."
    );
    return false;
  }

  if (!Fn.validaRut(run)) {
    toast.error(
      "No se pudo registrar asistencia debido el RUN ingresado es inválido, por favor verifique e intente nuevamente."
    );

    return false;
  }

  toast.success(
    "Asistencia registrada exitosamente, por favor diríjase a su mesa de votación."
  );
  return true;
};

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
