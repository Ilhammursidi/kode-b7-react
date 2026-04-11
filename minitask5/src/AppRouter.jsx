import {Routes,Route} from 'react-router';
import { RickMorty } from './Pages/RickMorty';
import App from './Pages/App';
import Pokemon from './Pages/Pokemon';
import Counter from './Pages/Counter';
import { DetailCharacter } from "./Components/DetailCharacter"
import Product from './Pages/Product';
import { ListRickMorty } from './Components/FetchRickMorty';
import RickMortyTwo from './Pages/RickMortyTwo';
import { Login } from './Pages/FormContext';
import { EditProfile } from './Pages/editProfile';
import { Layout } from './Pages/Layout';

function AppRouter() {
    return(
        <Routes>

            <Route element={<Layout/>}>
            <Route index element={<App/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='edit-profile' element={<EditProfile/>}></Route>
            <Route path='pokemon' element={<Pokemon/>}></Route>
            <Route path='rickmortytwo' element={<RickMortyTwo/>}></Route>
            <Route path='product' element={<Product/>}></Route>
            <Route path='counter' element={<Counter/>}></Route>
            <Route path='character' element={<RickMorty/>}>
                <Route index element={<ListRickMorty/>}></Route>
                <Route path=":id/:slug" element={<DetailCharacter/>}></Route>
            </Route>
            </Route>
        </Routes>
    )
}

export default AppRouter;