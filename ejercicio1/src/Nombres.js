import { useState } from "react";
function Nombres() {
    let [nombres, setNombres] = useState(
        ["Cristh", "Juan", "Tamara", "Kerman", "Naty", "Prueba"]
    );
    let nombresMap = nombres.map(function (nombres1) {
        return <li>{nombres1}</li>
    })
    return (
        <>
            <ol>
                {nombresMap}
            </ol>
        </>
    )
}

export default Nombres;