import { render } from '@testing-library/react';

import AppFirebase from './app-firebase';

describe('AppFirebase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppFirebase />);
    expect(baseElement).toBeTruthy();
  });
});
