import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar titulo="Librería"/>
      </header>
      <div className="products">
        <ItemListContainer />
      </div>
      
    </div>
  );
}

export default App;
