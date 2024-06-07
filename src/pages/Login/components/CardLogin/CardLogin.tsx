import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./card-login.module.css";
// Importacion de firebase
import { aplicationFirebase } from "../../../../credentials";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(aplicationFirebase);

interface IInputs {
  email: string;
  password: string;
}

function CardLogin() {
  const [ errorLogin, setErrorLogin ] = useState<string>("");
  const { register, handleSubmit, watch , formState: { errors }, } = useForm<IInputs>();
  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const email = watch("email");
    const password = watch("password");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setErrorLogin("El usuario o contraseña no coinciden");
    }
    console.log(data);
  };

  return (
    <div className={styles.containerCardLogin}>
      <div className={styles.containerLoginText}></div>
      <div className={styles.containerLoginInputs}>
        <div className={styles.containerSecondLoginInputs}>
          <img
            className={styles.logoAuta}
            src="https://www.auta.com.ar/static/media/logo-auta.1ad353ae5985c99b7417.png"
            alt="logo-auta"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputsLogin}>
              <TextField
                id="email"
                label="Correo electronico"
                variant="outlined"
                fullWidth
                error={!!errors.email || !!errorLogin}
                helperText={errors.email?.message}
                {...register("email", { 
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "El formato del correo electrónico no es válido",
                  },
                })}
                sx={{
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
                    fontWeight: "bold"
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
                }}
              />
            </div>
            <div className={styles.inputsLogin}>
              <TextField
                id="password"
                label="Contraseña"
                variant="outlined"
                type="password"
                error={!!errors.password || !!errorLogin}
                helperText={errors.password?.message}
                fullWidth
                {...register("password", {
                  required: "La contraseña es obligatoria",

                })}
                sx={{
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
                    fontWeight: "bold"
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
                }}
              />
            </div>
            <div className={styles.buttonSignIn}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ color: "#864BFA", fontWeight: "bold" }}
              >
                Ingresar
              </Button>
            </div>
            {errorLogin && <p className={styles.errorLogin}>{errorLogin}</p>}
          </form>
          <div className={styles.buttonSignIn}>
            <p className={styles.textRegister}>
              ¿No eres miembro?{" "}
              <a href="" className={styles.redirectRegister}>
                Crea una nueva cuenta
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLogin;
