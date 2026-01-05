import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import GamePage from "./pages/game/GamePage";
// import AdBar from "./components/AdBar";
import GATracker from "./components/GATracker";

const App = () => {
  
  return (
    <div className="flex flex-col h-dvh">
      <BrowserRouter basename={`${import.meta.env.VITE_PUBLIC_URL}`}>
        <GATracker />
        {/* <AdBar position='header' /> */}
        {/* <main className="absolute top-[60px] bottom-[60px] sm:top-[90px] sm:bottom-[90px] overflow-hidden flex-1 w-full"> */}
        <main className="overflow-hidden flex-1 w-full">
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/game' element={<GamePage />} />
          </Routes>
        </main>
        {/* <AdBar position='footer' /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
