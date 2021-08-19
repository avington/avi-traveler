import { FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../../features/auth/login-page/login-page';
import './app-router.module.scss';

/* eslint-disable-next-line */
export interface AppRouterProps {}

const MyPlacePage = lazy(() => import('../../features/my-places/my-place-page/my-place-page'));

const AppRouter: FunctionComponent<AppRouterProps> = (props: AppRouterProps) => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={MyPlacePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/">
            <MyPlacePage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
