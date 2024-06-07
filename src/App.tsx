// import Home from "./pages/Home/HomeMain";
import LoginMain from "./pages/Login/LoginMain";
import { useState } from "react";
import Home from "./pages/Home/HomeMain";
//Importaciones de firebase
import { aplicationFirebase } from "./credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(aplicationFirebase);

function App() {
  const [username, setUsername] = useState<unknown>(null);
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUsername(userFirebase);
    } else {
      setUsername(null);
    }
  });
  return (
    <div>
      {username ? <Home /> : <LoginMain />}
      {/* <LoginMain /> */}
    </div>
  );
}

export default App;
