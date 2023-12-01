import { Outlet } from 'react-router-dom';
import Encabezado from './Encabezado';
import Principal from './Principal';
import Pie from './Pie';


function Layout() {
    return (  
        <>
        <Encabezado></Encabezado>
        <Principal>
            <Outlet></Outlet>
        </Principal>
        <Pie></Pie>
      </>
    );
}

export default Layout;