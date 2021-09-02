import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Titulo from './components/Titulo/titulo.jsx';
import Marcas from './components/Marcas/Marcas.jsx';

function App() {
  return (  
    <>  
    <NavBar />
    <Titulo/>
    <div class="container">
    <Marcas lista={["Logitech","Genius","Ryzer","Sentey"]} /> 
    </div>
    </>
  );
}

export default App;