import Navbar from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
          <Navbar/>
          <ItemListContainer greeting = 'Bienvenido a nuestra pastelería 😊'/>
    </div>
  );
}

export default App;
