import {Routes,Route} from 'react-router';
import { RickMorty } from './Pages/RickMorty';
import App from './Pages/App';
import Pokemon from './Pages/Pokemon';
import Counter from './Pages/Counter';
import { DetailCharacter } from "./Components/DetailCharacter"
import Product from './Pages/Product';
import { ListRickMorty } from './Components/FetchRickMorty';
    
function AppRouter() {
    return(
        <Routes>
            <Route index element={<App/>}></Route>
            <Route path='pokemon' element={<Pokemon/>}></Route>
            <Route path='product' element={<Product/>}></Route>
            <Route path='counter' element={<Counter/>}></Route>
            <Route path='character' element={<RickMorty/>}>
                <Route index element={<ListRickMorty/>}></Route>
                <Route path=":id/:slug" element={<DetailCharacter/>}></Route>
            </Route>
        </Routes>
    )
}

export default AppRouter;