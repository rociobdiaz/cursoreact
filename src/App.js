import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/Container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar titulo="NOMBRE DEL SITIO"/>
      <ItemListContainer greeting="A MI PAGINA"/>
    </div>
  );
}

export default App;
