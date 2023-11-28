import './App.css'
import Encabezado from './componentes/compartidos/Encabezado';
import Principal from './componentes/compartidos/Principal';
import Pie from './componentes/compartidos/Pie';
/* import Lista from './componentes/compartidos/lista_de_metas/Lista'; */
import Detalles from './componentes/compartidos/nueva/Detalles';

function App() {
  return (
    <div className="App">
       <Encabezado></Encabezado>
       <Principal>
          {/* <Lista /> */}
          <Detalles />
       </Principal>
       <Pie></Pie>
    </div>
  );
}

export default App;
