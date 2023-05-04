import React from 'react';
// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jugadores">Jugadores</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jugadores' element={<Jugadores />}>
          <Route path='/jugadores' element={<JugadoresIndex />} />
          <Route path=':slug' element={<JugadoresLista />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      HOME
    </div>
  )
}

function Jugadores() {
  return (
    <div>
      <h1>JUGADORES</h1>
      <Outlet />
    </div>
  )
}

function JugadoresIndex() {
  return (
    <ul>
      {/* jugadores.map comentado, ES COMO SE PONDRIA SI JUGADORES ES UN ARRAY*/}
      {/* {jugadores.map(({ slug, name, img }) => ( */}
      {Object.entries(jugadores).map(([slug, { name, img }]) =>
      (
        <li key={slug}>
          <Link to={`/jugadores/${slug}`}>
            <h1>{name}</h1>
            <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function JugadoresLista() {
  const { slug } = useParams();
  const lista = jugadores[slug];
  if (!lista) {
    return <div>No se encontró el jugador</div>;
  }
  const { name, img, biografia } = lista;
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>{biografia}</p>
    </div>
  )
}
const jugadores = {
  "Magic Jonhson":
  {
    name: "Magic Jonhson",
    img: "https://imagenes.elpais.com/resizer/jeU9nY2ha0XR7sns2No5swcArh0=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/YZXCS47QTBG2FMTJUWLII34N64.jpg",
    biografia: "Earvin 'Magic' Johnson, Jr. (Lansing, Míchigan; 14 de agosto de 1959) es un exbaloncestista estadounidense, considerado uno de los mejores de la historia.1​ Militó en Los Angeles Lakers de la NBA desde 1979 hasta 1991, tiempo en que publicó que había contraído el VIH, abandonando el deporte profesional para combatirlo, salvo por un breve período en 1996. Con 2,06 metros de estatura, jugaba en la posición de base."

  },
  "Michael Jordan":
  {
    name: "Michael Jordan",
    img: "https://cdn.nba.com/headshots/nba/latest/1040x760/893.png",
    biografia: "Michael Jeffrey Jordan (Nueva York; 17 de febrero de 1963) es un exjugador de baloncesto estadounidense. Con 1,98 metros de altura, jugaba en la posición de escolta. Es considerado por la mayoría de aficionados y especialistas como el mejor jugador de baloncesto de todos los tiempos.2​3​ Se retiró definitivamente en 2003 en los Washington Wizards, tras haberlo hecho en dos ocasiones anteriores, en 1993 y 1999, después de haber jugado 13 temporadas en los Chicago Bulls.4​"

  },
  "Lebron James":
  {
    name: "Lebron James",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LeBron_James_Lakers.jpg/171px-LeBron_James_Lakers.jpg",
    biografia: "LeBron Raymone James Sr. (Akron, Ohio, 30 de diciembre de 1984) es un jugador de baloncesto estadounidense que actualmente pertenece a la plantilla de Los Angeles Lakers de la NBA. Con 2,06 metros de estatura, su posición es la de alero, pero su talento, versatilidad y poderío físico le permiten jugar tanto de base como de ala-pívot.1​ James es el máximo anotador de la historia de la NBA2​ y es considerado como uno de los mejores jugadores de baloncesto del mundo y de la historia.3​"
  },
  "Tim Duncan":
  {
    name: "Tim Duncan",
    img: "https://s1.eestatic.com/2016/12/17/deportes/baloncesto/nba/nba_-national_basketball_association-san_antonio_spurs-islas_virgenes_178995074_23646381_854x640.jpg",
    biografia: "Timothy Theodore Duncan (Christiansted, Saint Croix, Islas Vírgenes de los Estados Unidos, 25 de abril de 1976), más conocido como Tim Duncan, es un exjugador de baloncesto estadounidense que jugó como ala-pívot o pívot en los San Antonio Spurs de la NBA desde la temporada 1997-98 hasta la 2015-16. Obtuvo cinco anillos de campeón, dos premios al jugador más valioso de la NBA, tres veces elegido MVP de las Finales, diez apariciones en el mejor quinteto de la NBA y tres en el segundo. También ha aparecido en 15 ediciones del All-Star Game de la NBA."
  },
  "Shaquille O'Neal":
  {
    name: "Shaquille O'Neal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzmZ85SdurNIrJjvvcLxJntsPk4JW33sek2FFiGjXBg&s",
    biografia: "Shaquille Rashaun O'Neal (Newark, Nueva Jersey, 6 de marzo de 1972) es un exjugador estadounidense de baloncesto, que se desempeñaba como pívot.2​ Es considerado como uno de los jugadores más dominantes de la historia de la NBA.3​4​ O'Neal ganó cuatro campeonatos de la NBA, tres con Los Angeles Lakers y uno con Miami Heat, además de finalizar subcampeón con Orlando Magic en 1995 y con Los Angeles Lakers en 2004."
  }
}

export default App;