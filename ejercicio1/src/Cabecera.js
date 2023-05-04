import { Link } from 'react-router-dom'

function Cabecera() {
    return (
        <header>
            <nav>
                <ol>
                    <li>
                        <Link to="/"><h1>Rutas en React</h1></Link>
                    </li>
                    <li>
                        <Link to="/nombres">Nombres</Link>
                    </li>
                </ol>
            </nav>
        </header>
    );
}

export default Cabecera;