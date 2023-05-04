import { Link } from 'react-router-dom'

function Cabecera() {
    return (
        <header>
            <h1>FOTOS DE PERROS Y GATOS</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio </Link>
                    </li>
                    <li>
                        <Link to="perros">Perros  </Link>
                    </li>
                    <li>
                        <Link to="gatos">Gatos  </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Cabecera;