import { render, screen } from '@testing-library/react';
import App from '../App';

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

describe('<SearchBar />', () => {
  it.skip('routes to /search when enter is pressed', () => {
  });

  it.skip('sets the correct query params', () => {
    // TODO: This should include proper encoding of special characters. I think.
  });
});
