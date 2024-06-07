export const textFieldStyles = {
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

export const checkBoxStyle={
  color: "#B3B3B3",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  margin: "5% 0px 0px 0px",
}