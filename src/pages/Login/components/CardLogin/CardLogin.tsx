import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./card-login.module.css";
// Importacion de firebase
import { aplicationFirebase } from "../../../../credentials";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(aplicationFirebase);

interface IInputs {
  email: string;
  password: string;
}

function CardLogin() {
  const { register, handleSubmit, watch } = useForm<IInputs>();
  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const email = watch("email")
    const password = watch("password")
    await signInWithEmailAndPassword(auth, email, password);
    console.log(data);
  };
  return (
    <div className={styles.containerCardLogin}>
      <div className={styles.containerLoginText}></div>
      <div className={styles.containerLoginInputs}>
        <div className={styles.containerSecontLoginInputs}>
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
                {...register("email")}
                sx={{
                  // Root class for the input field
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    // Class for the border around the input field
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
                  // Class for the label of the input field
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
                fullWidth
                {...register("password")}
                sx={{
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
