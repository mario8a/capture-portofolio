import { Route, Switch, useLocation } from "react-router-dom";
/*
Esto le permite saber a framer-motion cuando se cierra un componente 
Lo que se tiene que hacer (segun la doc) es saber el "Key" de la pagina
donde estamos en este momento para poder hacerle seguimiento, por eso usa el
useLocation() que es similar al useHistory() del router
*/
import { AnimatePresence } from 'framer-motion';

import { Nav } from './components/Nav/Nav';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
import OurWork from './pages/OurWork';
import GlobalStyle from './styles/GlobalStyle';


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs} />
          <Route exact path="/work" component={OurWork} />
          <Route path="/work/:id" component={MovieDetail} />
          <Route exact path="/contact" component={ContactUs} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;