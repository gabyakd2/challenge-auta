import styles from "./card-register.module.css";
import { Link } from "react-router-dom";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { checkBoxStyle, textFieldStyles } from "./InputsStyles";
import { useForm, SubmitHandler } from "react-hook-form";
// imports de firebase
import { aplicationFirebase, db } from "../../../credentials";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
const auth = getAuth(aplicationFirebase);

interface IInputs {
  nameUserRegister: string;
  lastnameUserRegister: string;
  emailUserRegister: string;
  passwordUserRegister: string;
}

function CardRegister() {
  const { register, handleSubmit } = useForm<IInputs>();

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const { nameUserRegister, lastnameUserRegister, emailUserRegister, passwordUserRegister } = data;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailUserRegister, passwordUserRegister)
      const user = userCredential.user
      await setDoc(doc(db, "users", user.uid), {
        nameUserRegister,
        lastnameUserRegister,
        emailUserRegister,
        passwordUserRegister
      })
    console.log("El usuario fue registrado")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className={styles.containerCardRegister}>
      <div className={styles.containerRegisterInputs}>
        <p className={styles.textWelcome}>BIENVENIDO</p>
        <img
          className={styles.logoAuta}
          src="https://www.auta.com.ar/static/media/logo-auta.1ad353ae5985c99b7417.png"
          alt="logo-auta"
        />
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formRegister}>
          <div className={styles.completeName}>
            <TextField
              id="nameUserRegister"
              label="Nombre"
              variant="outlined"
              fullWidth
              {...register("nameUserRegister")}
              sx={textFieldStyles}
            />
            <TextField
              id="lastnameUserRegister"
              label="Apellido"
              variant="outlined"
              fullWidth
              {...register("lastnameUserRegister")}
              sx={textFieldStyles}
            />
            <TextField
              id="emailUserRegister"
              label="Correo electronico"
              variant="outlined"
              fullWidth
              {...register("emailUserRegister")}
              sx={textFieldStyles}
            />
            <TextField
              id="passwordUserRegister"
              label="Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              {...register("passwordUserRegister")}
              sx={textFieldStyles}
            />
          </div>
          <FormControlLabel
            required
            control={<Checkbox sx={{ color: "#fff" }} />}
            label="Aceptar terminos y servicios"
            sx={checkBoxStyle}
          />
          <div className={styles.buttonRegister}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ color: "#864BFA", fontWeight: "bold" }}
            >
              Registrarse
            </Button>
          </div>
        </form>
        <div>
          <p className={styles.textLogin}>
            ¿Ya eres miembro?{" "}
            <Link to="/login" className={styles.redirectLogin}>
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.containerRegisterText}></div>
    </div>
  );
}

export default CardRegister;
