import { Provider } from 'react-redux';
import store from '../store/store';
import AppFirebase from './app-firebase/app-firebase';
import AppRouter from './app-router/app-router';

export function App() {
  return (
    <AppFirebase>
      <Provider store={store}>
        <AppRouter></AppRouter>
      </Provider>
    </AppFirebase>
  );
}

export default App;
