import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';

describe('App', () => {
  let wrapper;

  afterEach(rtl.cleanup);
  beforeEach(() => {
    wrapper = rtl.render(<App />);
  });

  it('data is in correct order and displaying', async () => {
    const text = await wrapper.findByText('Select a season');
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
  });
});