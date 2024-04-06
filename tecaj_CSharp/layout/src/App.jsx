import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { RoutesNames } from './constants';
import Pocetna from './pages/Pocetna';
import Sveucilista from './pages/sveucilista/Sveucilista';
import SveucilistaPromjena from './pages/sveucilista/SveucilistaPromjena';
import SveucilistaDodaj from './pages/sveucilista/SveucilistaDodaj';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path={RoutesNames.HOME}
          element={<Pocetna />}
        />

        <Route
          path={RoutesNames.SVEUCILISTE_PREGLED}
          element={<Sveucilista />}
        />
        <Route
          path={RoutesNames.SVEUCILISTE_NOVI}
          element={<SveucilistaDodaj />}
        />
        <Route
          path={RoutesNames.SVEUCILISTE_PROMJENI}
          element={<SveucilistaPromjena />}
        />
      </Routes>
    </>
  );
}

export default App;
