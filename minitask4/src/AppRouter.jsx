import {Routes,Route} from 'react-router';

import App from './Pages/App';
import Pokemon from './Pages/Pokemon';
import Counter from './Pages/Counter';
import Product from './Pages/Product';
    
function AppRouter() {
    return(
        <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/pokemon' element={<Pokemon/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/counter' element={<Counter/>}></Route>
        </Routes>
    )
}

export default AppRouter;