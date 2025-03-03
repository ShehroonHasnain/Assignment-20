import Counter from './components/Counter';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <Counter/>
      </Provider>
      </div>
    
  );
}

export default App;