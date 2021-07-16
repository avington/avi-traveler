import { FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
