
import { useState } from "react";
function Gatos() {
    let [fotosGatos, setfotosGatos] = useState(
        [
            <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"></img>,
            <img src="https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg"></img>,
            <img src="https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudio-blanco_155003-13189.jpg?w=2000"></img>,
            <img src="https://ca-times.brightspotcdn.com/dims4/default/c3f4b96/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001"></img>,
        ]
    );
    let fotosMapG = fotosGatos.map(function (gatosMap) {
        return <li>{gatosMap}</li>
    })

    //let fotosMapG = fotosGatos.map((gatosMap) => <li>{gatosMap}</li>);

    return (
        <>
            <ol>{fotosMapG}</ol>
        </>
    )
}

export default Gatos;