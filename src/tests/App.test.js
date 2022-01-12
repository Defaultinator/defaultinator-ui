import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../stories/App.stories';

const { Primary: App } = composeStories(stories);

describe('<App />', () => {

  it('renders the app with Defaultinator in the title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Defaultinator/i);
    expect(linkElement).toBeInTheDocument();
  });

  it.skip('renders <SearchResultsPage /> when the /search route is active', () => {
  });

  it.skip('renders <VendorListPage /> when the /vendors route is active', () => {
  });

  it.skip('renders <ProductsByVendor /> when the /:vendor/products route is active', () => {
  });

  it.skip('renders <CredentialLokupPage /> when the /lookup/:vendorId/:productId route is active', () => {
  });
});