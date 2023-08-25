import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import "./App.css"
import Body from "./component/Body";
import Head from "./component/Head";
import store from "./utils/store";

function App() {
  return (
    <>
      <BrowserRouter>
              <Provider store={store}>
        <div>
       
  <Head />
      <Body/>

        {/* 
        header
        body{
        sidebar-menu item 
        main containner
        buttonslist
        video containner
        videocard
        }
        
         */}
      </div>

    
      </Provider>
</BrowserRouter>
      
  </>
  );
}

export default App;
