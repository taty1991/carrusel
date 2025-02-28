import { Component } from "react";
import PropTypes from "prop-types";
import React from "react";

class Child2 extends Component {
    state = {
        cont: 0,
    }

    // Ir al siguiente elemento
    nextImg = () => {
        const { cont } = this.state;
        const { children } = this.props; // Obtiene los elementos hijos
        this.setState({
            cont: (cont + 1) % children.length, // Ciclo al siguiente
        });
    };

    // Ir al elemento anterior
    prevImg = () => {
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
            <div className="carrusel" style={{width:"300px"}}>
                <h2>HIJO 2</h2>
                <div>
                    {children[cont]}
                </div>
                <div className="carrusel-controls-img">
                    <button onClick={this.prevImg} style={{padding: "5px 10px"}}>Atrás</button>
                    <button onClick={this.nextImg} style={{padding: "5px 10px"}}>Siguiente</button>
                </div>
            </div>

        )
    }




}

Child2.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Child2;