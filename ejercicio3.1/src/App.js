import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from "react-router-dom";

function App() {
  function Home() {
    return (
      <div>
        <h1>Bienvenido a la web Peliculas</h1>
      </div>
    )
  }
  function Peliculas() {
    return (
      <div>
        <h2>Lista de Peliculas</h2>
        <Outlet />
      </div>
    )
  }
  function PeliculasList() {
    return (
      <div>
        <ul>
          {Object.entries(peliculas).map(([slug, { titulo, imagen }]) => (
            <li key={slug}>
              <Link to={`/peliculas/${slug}`}>
                <h2>{titulo}</h2>
                <img src={imagen} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  function PeliculaOnly() {
    const { slug } = useParams();
    const pelis = peliculas[slug];
    const { titulo, imagen, sinopsis } = pelis;

    return (
      <div>
        <h2>{titulo}</h2>
        <img src={imagen} />
        <p>{sinopsis}</p>
      </div>
    )
  }


  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/peliculas">Peliculas</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="peliculas" element={<Peliculas />}>
          <Route path="/peliculas" element={<PeliculasList />} />
          <Route path=":slug" element={<PeliculaOnly />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const peliculas =
{
  "pelicula1":
  {
    titulo: "«El padrino» (1972)",
    imagen: "https://static1.abc.es/media/play/2020/05/21/padrino-kjgG--510x287@abc.jpg",
    sinopsis: " Sinopsis uno"
  },
  "pelicula2":
  {

    titulo: "El mago de Oz (1939)",
    imagen: "https://static4.abc.es/media/play/2020/05/21/mago-kjgG--510x287@abc.jpg",
    sinopsis: " Sinopsis dos"
  },
  "pelicula3":
  {
    titulo: "Ciudadano Kane (1941)",
    imagen: "https://static1.abc.es/media/play/2020/05/21/kane-kjgG--510x287@abc.jpg",
    sinopsis: " Sinopsis tres"
  }
};
export default App;
