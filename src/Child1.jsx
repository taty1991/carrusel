import { Component } from "react";
import logo from './logo.svg';

class Child1 extends Component {
    state = {
        // constructor
    }

    render() {
        return (
            <div className="carrusel" style={{width:"300px"}}>
                <h2>HIJO 1</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Este es el inicio ejemplo de carrusel en React</p>
            </div>
        )
    }




}

export default Child1;