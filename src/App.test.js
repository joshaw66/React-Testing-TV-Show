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

// Test written to test the text on the home page dropdown button //

  it('Button has correct text', async () => {
    const text = await wrapper.findByText('Select a season');
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
  });
});