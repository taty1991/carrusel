import './App.css';
import Carrousel from './Carrousel';
import Carrusel2 from './Carrusel2';
import Child1 from './Child1';
import Child2 from './Child2';


function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Carrusel con componentes de clases React</h1>
      <Carrousel >
        <Child1 />
        <Child2>
          <img src="/images/imagen1.jpg" alt="Bugs Bunny" style={{ width: "100px", paddingBottom: "10px" }} />
          <img src="/images/imagen2.jpg" alt="Silvestre" style={{ width: "100px", paddingBottom: "10px" }} />
          <img src="/images/imagen3.jpg" alt="Lucas" style={{ width: "100px", paddingBottom: "10px" }} />
        </Child2>
      </Carrousel>

      <hr />

      <h1 style={{ textAlign: "center" }}>Carrusel con componentes funcionales React</h1>
      <Carrusel2>
      <Child1 />
        <Child2>
          <img src="/images/imagen1.jpg" alt="Bugs Bunny" style={{ width: "100px", paddingBottom: "10px" }} />
          <img src="/images/imagen2.jpg" alt="Silvestre" style={{ width: "100px", paddingBottom: "10px" }} />
          <img src="/images/imagen3.jpg" alt="Lucas" style={{ width: "100px", paddingBottom: "10px" }} />
        </Child2>
        
      </Carrusel2>

    </>
  );
}

export default App;
