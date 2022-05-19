import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import Registrar from './componentes/Registrar';
import Login from './componentes/Login';
import VerEmergencias from './componentes/VerEmergencias';
import CrearEmergencias from './componentes/CrearEmergencias';
import Index from './componentes/Index';
import VerEmergenciasA from './componentes/VerEmergenciasA';
import Em from './componentes/Em';
function App() {
  return (
    <Router>
      <NavBar/>
      
      <Route path='/Registrar' exact component={Registrar}/>
      <Route path='/Login' exact component={Login}/>
      <Route path='/verEmergencias' exact component={VerEmergencias}/>
      <Route path='/CrearEmergencias' exact component={CrearEmergencias}/>
      <Route path='/Index' exact component={Index}/>
      <Route path='/VerEmergenciasA' exact component={VerEmergenciasA}/>
      
      <Route path='/Em' exact component={Em}/>
      
    </Router>

  );
}

export default App;
