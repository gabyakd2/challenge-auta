import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/HomeMain"
import LoginMain from "./pages/Login/LoginMain"
import RegisterMain from "./pages/Register/RegisterMain"

function RoutesMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/register" element={<RegisterMain />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesMain