import HomeScreen from './screens/HomeScreen';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import StudentScreen from './screens/StudentScreen';
import ProfesorScreen from './screens/ProfesorScreen';
import KolegijiScreen from './screens/KolegijiScreen';
import IspitiScreen from './screens/IspitiScreen';
import SveucilistaScreen from './screens/SveucilistaScreen';

const routerDefinitions = createRoutesFromElements(
  <Route>
    <Route
      path='/'
      element={<HomeScreen />}
    />
    <Route
      path='/HomeScreen'
      element={<HomeScreen />}
    />
    <Route
      path='/StudentScreen'
      element={<StudentScreen />}
    />
    <Route
      path='/ProfesorScreen'
      element={<ProfesorScreen />}
    />
    <Route
      path='/KolegijiScreen'
      element={<KolegijiScreen />}
    />
    <Route
      path='/IspitiScreen'
      element={<IspitiScreen />}
    />
    <Route
      path='/SveucilistaScreen'
      element={<SveucilistaScreen />}
    />
  </Route>
);

//Ovo mi se nešto zabagalo pa sam ostavio reda-radi
// ([
//   {
//     path: '/',
//     element: <HomeScreen />,
//     errorElement: '',
//     children: [
//       { index: true, element: <HomeScreen /> },
//       { path: '/StudentScreen', element: <StudentScreen /> },
//       { path: '/ProfesorScreen', element: <ProfesorScreen /> },
//     ],
//   },
// ]);

const router = createBrowserRouter(routerDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
