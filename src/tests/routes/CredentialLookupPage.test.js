import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';

import CredentialLookupPage from '../../routes/Credentials/CredentialLookupPage';

import {
  MemoryRouter
} from "react-router-dom";

const renderer = new ShallowRenderer();

jest.mock('axios-hooks');

describe("<CredentialLookupPage />", () => {

  it("renders <CredentialLookupPage /> component", () => {

    renderer.render(
      <MemoryRouter>
        <CredentialLookupPage />
      </MemoryRouter>
    );

  });

});
