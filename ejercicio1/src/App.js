import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Nombres from "./Nombres"
import Cabecera from './Cabecera';

function App() {

  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/nombres" element={<Nombres />} />
      </Routes>
    </BrowserRouter >

  );
}

export default App;
