import '@firebase/firestore';
import { FunctionComponent } from 'react';
import './app-firebase.module.scss';
import { firebaseConfig } from '@avi-traveler/config';

/* eslint-disable-next-line */
export interface AppFirebaseProps {}

const AppFirebase: FunctionComponent<AppFirebaseProps> = (props) => {
  return <div>{props.children}</div>;
};

export default AppFirebase;
