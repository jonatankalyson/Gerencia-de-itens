
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemListe from './pages/ItemLister/ItemLister'
import Cadastro from './pages/Cadastro/Cadastro'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ItemListe/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='*' element={<h1>No Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
