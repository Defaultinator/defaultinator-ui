import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';

import ProductsByVendorPage from '../../routes/ProductsByVendorPage';

import {
  MemoryRouter
} from "react-router-dom";

const renderer = new ShallowRenderer();

jest.mock('axios-hooks');

describe("<ProductsByVendorPage />", () => {

  it("renders <ProductsByVendorPage /> component", () => {

    renderer.render(
      <MemoryRouter>
        <ProductsByVendorPage />
      </MemoryRouter>
    );

  });

});
