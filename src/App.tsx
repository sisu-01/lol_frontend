import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import GamePage from "./pages/game/GamePage";
import Header from "./components/Header";

const App = () => {
  
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter basename={`${import.meta.env.VITE_PUBLIC_URL}`}>
        <Header />
        <main className="flex-1 relative w-full h-full">
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/game' element={<GamePage />} />
          </Routes>
        </main>
        <Header />
      </BrowserRouter>
    </div>
  )
}

export default App
