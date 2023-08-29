import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import "./App.css"
import Body from "./component/Body";
import Head from "./component/Head";
import store from "./utils/store";
import Maincontainner from './component/Maincontainner'
import WatchPage from './component/WatchPage';


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [{
    path: "/",
    element:<Maincontainner/>
  }
    , {
      path: "watch",
      element:<WatchPage/>
  }
  
  ]
}])

function App() {
  return (
    <>
     
              <Provider store={store}>
        <div>
       
  <Head />
     <RouterProvider router={appRouter}/>

      </div>

    
      </Provider>

      
  </>
  );
}

export default App;
