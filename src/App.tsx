import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import GamePage from "./pages/game/GamePage";
import AdBar from "./components/AdBar";
import GATracker from "./components/GATracker";

const App = () => {
  
  return (
    <div className="flex flex-col h-dvh">
      <BrowserRouter basename={`${import.meta.env.VITE_PUBLIC_URL}`}>
        <GATracker />
        <AdBar position='header' />
        <main className="flex-1 relative w-full h-full">
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/game' element={<GamePage />} />
          </Routes>
        </main>
        <AdBar position='footer' />
      </BrowserRouter>
    </div>
  )
}

export default App
