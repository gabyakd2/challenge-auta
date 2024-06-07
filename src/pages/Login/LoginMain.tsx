import CardLogin from "./components/CardLogin/CardLogin"
import styles from "./login-main.module.css"

function LoginMain() {
  return (
    <div className={styles.containerMainLogin}>
      <CardLogin />
    </div>
  )
}

export default LoginMain