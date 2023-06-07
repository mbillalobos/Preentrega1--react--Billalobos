import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greetings = {"Buenas noches, somos LI..LA.. productos de limpieza"}/>
    </>
  )
}

export default App
