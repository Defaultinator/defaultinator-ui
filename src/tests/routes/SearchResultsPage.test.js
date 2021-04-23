import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';

import SearchResultsPage from '../../routes/SearchResultsPage';

import {
  MemoryRouter
} from "react-router-dom";

const renderer = new ShallowRenderer();

jest.mock('axios-hooks');

describe("<SearchResultsPage />", () => {

  it("renders <SearchResultsPage /> component", () => {

    renderer.render(
      <MemoryRouter>
        <SearchResultsPage />
      </MemoryRouter>
    );

  });

});
