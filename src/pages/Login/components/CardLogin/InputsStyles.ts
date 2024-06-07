export const textFieldStylesEmail = {
  // Estilos de la etiqueta error
  "& label.Mui-error": {
    color: "#F65D33",
  },
  // Estilos de color de borde en error
  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "#F65D33", // Cambia el color del borde cuando está en modo outlined
  },
  // Estilos del texto en error
  "& .MuiFormHelperText-root.Mui-error": {
    color: "#F65D33",
    fontWeight: "bold",
  },
  // Estilos de input
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    fontFamily: "Arial",
    fontWeight: "bold",
    // Estilos de los bordes
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
      borderWidth: "2px",
    },
    "&:hover:not(.Mui-focused)": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#b5b5b5",
      },
    },
  },
  // Estilos de place holder
  "& .MuiInputLabel-outlined": {
    color: "#fff",
    fontWeight: "bold",
  },
};

export const textFieldStylesPassword = {
  // Estilos de la etiqueta error
  "& label.Mui-error": {
    color: "#F65D33",
  },
  // Estilos de color de borde en error
  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "#F65D33", // Cambia el color del borde cuando está en modo outlined
  },
  // Estilos del texto en error
  "& .MuiFormHelperText-root.Mui-error": {
    color: "#F65D33",
    fontWeight: "bold",
  },
  // Estilos del input
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    fontFamily: "Arial",
    fontWeight: "bold",
    // Estilos de los bordes
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
      borderWidth: "2px",
    },
    // Estilos del input al hacer hover
    "&:hover:not(.Mui-focused)": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#b5b5b5",
      },
    },
  },
  // Estilos de place holder
  "& .MuiInputLabel-outlined": {
    color: "#fff",
    fontWeight: "bold",
  },
};
