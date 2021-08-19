import { render } from '@testing-library/react';

import LoginMenu from './login-menu';

describe('LoginMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginMenu />);
    expect(baseElement).toBeTruthy();
  });
});
