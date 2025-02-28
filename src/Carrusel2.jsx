import { useEffect, useState } from "react";
import React from "react";
import PropTypes from "prop-types";

function Carrusel2({ children }) {
    const [cont, setCont] = useState(0);

    const totalChilds = React.Children.count(children);

    useEffect(() => {
        alert(`Montado cantidad de hijos ${totalChilds}`);
        return () => {
            console.log(`Desmontado - indece ${cont}`);
        };
    }, []);

    useEffect(() => {
        alert(cont);
    }, [cont])

    const next = () => {
        setCont((cont + 1) % totalChilds);
    };

    const prev = () => {
        setCont((cont - 1 + totalChilds) % totalChilds);
    };

    return (
        <div className="carrusel">
            <div>
                {React.Children.toArray(children)[cont]}
            </div>
            <div className="carrusel-controls">
                <button onClick={prev}>Atrás</button>
                <button onClick={next}>Siguiente</button>
            </div>
        </div>
    )

}

Carrusel2.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Carrusel2;