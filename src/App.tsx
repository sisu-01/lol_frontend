import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import GamePage from "./pages/game/GamePage";
import Privacy from "./pages/privacy/PrivacyPage";
import AdBar from "./components/AdBar";
import GATracker from "./components/GATracker";
// import FooterBar from "./components/FooterBar";
import Terms from "./pages/terms/TermsPage";
import Contact from "./pages/contact/ContactPage";
import About from "./pages/about/AboutPage";

const App = () => {
  
  return (
    <div className="flex flex-col h-dvh">
      <BrowserRouter basename={`${import.meta.env.VITE_PUBLIC_URL}`}>
        <GATracker />
        <AdBar position='header' />
        <main className="absolute top-[45px] bottom-[45px] sm:top-[95px] sm:bottom-[95px] overflow-hidden flex-1 w-full">
        {/* <main className="overflow-hidden flex-1 w-full"> */}
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/game' element={<GamePage />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/terms' element={<Terms />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
          </Routes>
        </main>
        {/* <FooterBar /> */}
        <AdBar position='footer' />
      </BrowserRouter>
    </div>
  )
}

export default App
