import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import GamePage from "./pages/game/GamePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Header />
        <main className="flex-1 relative w-full h-full">
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/game' element={<GamePage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
