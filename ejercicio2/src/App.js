import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cabecera from './Cabecera';
import Perros from './Perros';
import Gatos from './Gatos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecera />
        <Routes>
          <Route path='/perros'  element={<Perros/>}  />
          <Route path='/gatos'   element={<Gatos/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
