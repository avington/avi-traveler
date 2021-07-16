import { render } from '@testing-library/react';

import MyPlacePage from './my-place-page';

describe('MyPlacePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyPlacePage />);
    expect(baseElement).toBeTruthy();
  });
});
