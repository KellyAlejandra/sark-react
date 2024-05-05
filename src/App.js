
import './App.css';
import { InicioSesion } from './componentes/InicioSesion';
import ServiciosBarberia from './componentes/ServiciosBarberia';




function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <h1>SARK</h1>
      <h2>Software para el agendamiento de citas y registro de clientes de la barberia Kaliman Barber</h2>
     
     
      <InicioSesion/>  
      <ServiciosBarberia/>
      

      
    </header>
    </div>
   )
   }

export default App;
