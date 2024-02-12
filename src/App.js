import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouterApp from './Config/Router';
import { Provider } from 'react-redux';
import store from './Store';
import Navbar from './Component/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        {/* <Navbar/> */}
          <RouterApp />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
