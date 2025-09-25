import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import './assets/css/style.css'
import Home from './pages/Home';
import ListPoke from './pages/ListPoke';
import SurpriseMe from './pages/SurpriseMe';
import WhoPoke from './pages/WhoPoke';
import PokeSingle from './pages/PokeSingle';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-mon" element={<ListPoke />} />
          <Route path="/single/:id" element={<PokeSingle />} />
          <Route path="/surprise-me" element={<SurpriseMe />} />
          <Route path="/whos-that" element={<WhoPoke />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
