import './my-place-page.module.scss';
import { FunctionComponent } from 'react';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface MyPlacePageProps {}

const MyPlacePage: FunctionComponent<MyPlacePageProps> = (props: MyPlacePageProps) => {
  return <div className="my-page">my map page</div>;
};

export default MyPlacePage;
