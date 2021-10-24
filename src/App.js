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
} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import { UIProvider } from './context/UIContext';


function App() {  

  return (
    <>
      <UIProvider>
        <CartProvider>
          <BrowserRouter>

            <NavBar logo="Libreria"/>
            
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
                <CartScreen/>
              </Route>

              <Route path="*">
                  <Redirect to="/"/>
              </Route>
              {/* <Route path="*">
                  <h2>404... no encontrado</h2>
              </Route> */}
            </Switch>

          </BrowserRouter>
        </CartProvider>
      </UIProvider>

    </>
  );
}

export default App;
