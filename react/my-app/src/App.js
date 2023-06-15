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

function App() {


  function addedTocart(id){
    console.log(id);

}
    
  return (
    <div className="App">

     <NavigationBar />
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

<div className="main-contener">
  <SideContent/>
  <MainContent  AddedToCart={addedTocart} />

</div>

    </div>
  );
}

export default App;
library.add(fab, fas, far)
