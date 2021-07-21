import { FunctionComponent, useState } from 'react';
import { Container, Menu, MenuItemProps } from 'semantic-ui-react';
import styles from './outer-chrome.module.scss';

/* eslint-disable-next-line */
export interface OuterChromeProps {
  title?: string;
}

export const OuterChrome: FunctionComponent<OuterChromeProps> = (props) => {
  const [activeItem, setActiveItem] = useState<string | undefined>('');

  const [title, setTitle] = useState<string | undefined>('Places');

  const handleItemClick: (event: unknown, data: MenuItemProps) => void = (e, data) =>
    setActiveItem(data?.name);

  if (props?.title) {
    setTitle(props.title);
  }

  return (
    <div className={styles.outer}>
      <div className="ui vertically padded grid">
        <header className="sixteen wide column" style={{ paddingTop: 0 }}>
          <Menu stackable>
            <Menu.Item header>Our Company</Menu.Item>
            <Menu.Item name="places" active={activeItem === 'places'} onClick={handleItemClick}>
              Places
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item name="logout" active={activeItem === 'logout'} onClick={handleItemClick} />
            </Menu.Menu>
          </Menu>
        </header>
        <main className={styles.main}>
          <Container fluid>{props?.children}</Container>
        </main>
      </div>
    </div>
  );
};
