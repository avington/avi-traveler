import styles from './app.module.scss';
import { OuterChrome } from '@avi-traveler/ui';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import AppRouter from './app-router/app-router';

export function App() {
  return (
    <OuterChrome>
      <AppRouter></AppRouter>
    </OuterChrome>
  );
}

export default App;
