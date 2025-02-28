import { Component } from "react";
import PropTypes from "prop-types";
import React from "react";

class Carrousel extends Component {
    state = {
        cont: 0, // El elemento actual en el carrusel
    };

    // Ir al siguiente elemento
    next = () => {
        const { cont } = this.state;
        const { children } = this.props; // Obtiene los elementos hijos
        this.setState({
            cont: (cont + 1) % children.length, // Ciclo al siguiente
        });
    };

    // Ir al elemento anterior
    prev = () => {
        const { cont } = this.state;
        const { children } = this.props;
        this.setState({
            cont: (cont - 1 + children.length) % children.length, // Ciclo hacia atrás
        });
    };

    render() {
        const { cont } = this.state;
        const { children } = this.props;

        return (
            <div className="carrusel">
                <div>
                    {children[cont]}
                </div>
                <div className="carrusel-controls">
                    <button onClick={this.prev}>Atrás</button>
                    <button onClick={this.next}>Siguiente</button>
                </div>
            </div>
        );
    }
}


Carrousel.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Carrousel;