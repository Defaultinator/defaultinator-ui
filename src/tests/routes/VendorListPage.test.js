import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';

import VendorListPage from '../../routes/VendorListPage';

import {
  MemoryRouter
} from "react-router-dom";

const renderer = new ShallowRenderer();

jest.mock('axios-hooks');

describe("<VendorListPage />", () => {

  it("renders <VendorListPage /> component", () => {

    renderer.render(
      <MemoryRouter>
        <VendorListPage />
      </MemoryRouter>
      );

  });

});
