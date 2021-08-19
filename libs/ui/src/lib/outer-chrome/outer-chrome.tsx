import { FunctionComponent, useState } from 'react';
import { Container, Menu, MenuItemProps } from 'semantic-ui-react';
import LoginMenu from '../login-menu/login-menu';
import styles from './outer-chrome.module.scss';

/* eslint-disable-next-line */
export interface OuterChromeProps {
  title?: string;
}

export const OuterChrome: FunctionComponent<OuterChromeProps> = (props) => {
  const [title, setTitle] = useState<string | undefined>('Places');

  if (props?.title) {
    setTitle(props.title);
  }

  return (
    <div className={styles.outer}>
      <div className="ui vertically padded grid">
        <header className="sixteen wide column" style={{ paddingTop: 0 }}>
          <LoginMenu></LoginMenu>
        </header>
        <main className={styles.main}>
          <Container fluid>{props?.children}</Container>
        </main>
      </div>
    </div>
  );
};
