import { useState } from "react";

function Perros() {
    let [perros, setPerros] = useState
        ([
            {
                nombre: "Perro1",
                imagen: "https://i.blogs.es/808765/dpoty-puppy-2nd--c--tracy-kirby-the-kennel-club-2/1366_2000.jpg",
            },
            {
                nombre: "Perro2",
                imagen: "https://images.hola.com/imagenes/mascotas/20221020219416/razas-perros-toy/1-154-385/razas-de-perro-toy-t.jpg"
            },
            {
                nombre: "Perro3",
                imagen: "\https://images.ecestaticos.com/h34TvzTFVdrau9Un4Wdmwhed_e4=/0x115:2265x1390/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8ec%2F08c%2F85c%2F8ec08c85c866ccb70c4f1c36492d890f.jpg"
            },
            {
                nombre: "Perro4",
                imagen: "https://fotografias.lasexta.com/clipping/cmsimages01/2022/08/09/3FFA8546-05CE-4608-9B69-6602D02A4C58/cachorro-pomsky_104.jpg?crop=887,887,x296,y0&width=1200&height=1200&optimize=low&format=webply"
            }
            // ,
            // {
            //     nombre: "Perro5",
            //     imagen: "\\Perros\\mascotas_501711745_154816138_1706x960.jpg"
            // }
        ])

    let perrosmap = perros.map((perrosMapeado) => (
        <div>
            <ul>
                <li>
                    <h1>{perrosMapeado.nombre}</h1>
                    <p><img src={perrosMapeado.imagen} /></p>
                </li>
            </ul>
        </div>
    ));

    return (
        <>
            {perrosmap}
        </>
    );
}
export default Perros;