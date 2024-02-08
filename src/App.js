import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouterApp from './Config/Router';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <RouterApp/>
      </BrowserRouter>
    </div>
     </Provider> 
  );
}

export default App;
