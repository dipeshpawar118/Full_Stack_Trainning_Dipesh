import logo from './logo.svg';
import './App.css';
import NavigationBar from './navBar';
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import SerachCard from './serachCard';
import LocationCard from './locationCard';
import SideContent from './sideContent';
import MainContent from './mianContent';
import { useCallback, useState } from 'react';
import Cart from './cart';
let hashSet = new Set();
function App() {

  const [product, setProduct] = useState([])
  function addedTocart(id) {
    console.log(id);
  }

  const AddedToCart = useCallback((product) => {
    if (hashSet.has(product.id)) {
      setProduct(((t) => [...t, product]))
      hashSet.delete(product.id)
    } else {
      setProduct(((t) => [...t, product]))

      hashSet.add(product.id)
    }
  }, [product]);

  return (
    <div className="App">

      <NavigationBar product={product} />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={  
           <div className="main-contener">
        <SideContent />
        <MainContent AddedToCart={AddedToCart} />
       
      </div>}>
          
          <Route path="cart" element={ <Cart cart={product} />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
      <SerachCard />
      <LocationCard />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

   
    </div>
  );
}

export default App;
library.add(fab, fas, far)
