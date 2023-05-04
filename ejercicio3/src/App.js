import React from 'react';
// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';


function App() {

  function Home() {
    return (
      <div>
        <h1>Welcome home!</h1>
      </div>
    )
  }

  function Launch() {
    return (
      <div>
        <h1>Launch!</h1>
        <Outlet />
      </div>
    )
  }
  function LaunchIndex() {
    return (
      <ul>
        {Object.entries(peliculas).map(([slug, { titulo, imagen }]) =>
        (
          <li key={slug}>
            <Link to={`/launch/${slug}`}>
              <h2>{titulo}</h2>
              <img src={imagen} alt={titulo} />
            </Link >
          </li>
        ))}
      </ul>
    );
  }
  function LaunchPelis() {
    const { slug } = useParams();
    const pelis = peliculas[slug];
    const { titulo, imagen, sinopsis } = pelis;
    return (
      <div>
        <h2>{titulo}</h2>
        <img src={imagen} alt={titulo} />
        <p>{sinopsis}</p>
      </div>
    );
  }


  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/launch">Launch</Link> </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/launch" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchPelis />} />
        </Route >
      </Routes>
    </Router>
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











// function Peliculas() {
//   let [peliculas, setPeliculas] = useState(
//     [
//       {
//         id: 1,
//         titulo: "«El padrino» (1972)",
//         imagen: "https://static1.abc.es/media/play/2020/05/21/padrino-kjgG--510x287@abc.jpg",
//         sinopsis: " Sinopsis uno"
//       },
//       {
//         id: 2,
//         titulo: "El mago de Oz (1939)",
//         imagen: "https://static4.abc.es/media/play/2020/05/21/mago-kjgG--510x287@abc.jpg",
//         sinopsis: " Sinopsis dos"
//       },
//       {
//         id: 3,
//         titulo: "Ciudadano Kane (1941)",
//         imagen: "https://static1.abc.es/media/play/2020/05/21/kane-kjgG--510x287@abc.jpg",
//         sinopsis: " Sinopsis tres"
//       }
//     ]
//   );

//   return (
//     <section>
//       {peliculas.map((peliculas) =>
//         <>
//           <div>{peliculas.titulo}</div>
//           <div>{peliculas.imagen}</div>
//           <div>{peliculas.sinopsis}</div>
//         </>
//       )};

//     </section>
//   )
// }


