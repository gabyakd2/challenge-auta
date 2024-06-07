// import Home from "./pages/Home/HomeMain";
import { useState } from "react";
//Importaciones de firebase
import { aplicationFirebase } from "./credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import RoutesMain from "./RoutesMain";
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
  console.log(username)
  return (
    <RoutesMain />
  );
}

export default App;
