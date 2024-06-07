import styles from "./register-main.module.css";
import CardRegister from "./components/CardRegister";

function RegisterMain() {
  return (
    <div className={styles.containerMainLogin}>
      <CardRegister />
    </div>
  );
}

export default RegisterMain;
