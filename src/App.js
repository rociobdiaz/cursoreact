import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'


function App() {  

  return (
    <>
      <BrowserRouter>

        <NavBar logo="Libreria"/>

        {/* <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="logolibreria"
                src="/"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar> */}
        
        <Switch>
          <Route exact path="/">
              <ItemListContainer />
          </Route>

          <Route exact path="/productos/:categoryId">
              <ItemListContainer />
          </Route>

          <Route exact path="/detail/:itemId">
              <ItemDetailContainer />
          </Route>

          <Route exact path="/contacto">
              <h1>Contacto</h1>
          </Route>

          <Route exact path="/cart">
            {/* TODO: hacer vista carrito */}
            <h1>Carrito</h1>
          </Route>

          <Route path="*">
              <Redirect to="/"/>
          </Route>
          {/* <Route path="*">
              <h2>404... no encontrado</h2>
          </Route> */}
        </Switch>

      </BrowserRouter>
    </>
  );
}


/* function App() {
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
} */

export default App;
