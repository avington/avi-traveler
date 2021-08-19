import { useState } from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './login-menu.module.scss';

/* eslint-disable-next-line */
export interface LoginMenuProps {}

export function LoginMenu(props: LoginMenuProps) {
  const [activeItem, setActiveItem] = useState<string | undefined>('');

  const handleItemClick: (event: unknown, data: MenuItemProps) => void = (e, data) =>
    setActiveItem(data?.name);

  return (
    <Menu stackable>
      <Menu.Item header>Our Company</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          as={NavLink}
          to="/login"
          name="login"
          active={activeItem === 'login'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
}

export default LoginMenu;
