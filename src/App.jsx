
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
      <NavBar />      
      <ItemListContainer greeting={'Bienvenidos a la TiendaOnline'}/>
    </>
  )
}

export default App
