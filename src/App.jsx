import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Cyber from "./pages/Cyber"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cybersecurity" element={<Cyber />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
