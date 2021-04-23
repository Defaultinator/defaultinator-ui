import React from "react";
import { render, screen } from '@testing-library/react';
import useAxios from "axios-hooks";

import ProductsByVendorTable from '../../components/ProductsByVendorTable';
import {
  sampleProducts
} from '../data/sampleData';

import {
  MemoryRouter
} from "react-router-dom";

jest.mock('axios-hooks');

describe("<ProductsByVendorTable />", () => {

  it("renders <ProductsByVendorTable /> component", () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    render(<ProductsByVendorTable />);

  });

  it('renders a progress bar while loading', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: true,
      data: null
    }]));

    render(<ProductsByVendorTable />);
    expect(screen.queryByRole('progressbar')).toBeTruthy();

  });

  it('does not render a progress bar when loading is complete', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    render(<ProductsByVendorTable />);
    expect(screen.queryByRole('progressbar')).toBeNull();

  });

  it('renders an error message if there is an error', () => {
    useAxios.mockImplementation(() => ([{
      error: true,
      loading: true,
      data: null
    }]));

    render(<ProductsByVendorTable />);
    expect(screen.queryByText('There was an error.')).toBeTruthy();

  });

  it('does not render an error message if there is not an error', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: true,
      data: null
    }]));

    render(<ProductsByVendorTable />);
    expect(screen.queryByText('There was an error.')).toBeNull();

  });

  it('renders a table with a list of products', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: sampleProducts
    }]));

    render(
      <MemoryRouter>
        <ProductsByVendorTable />
      </MemoryRouter>
    );

    sampleProducts.forEach((product) => {
      expect(screen.getByText(product)).toBeTruthy();
    });

  });

  it('renders the proper table headings', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    render(<ProductsByVendorTable />);
    expect(screen.getByText("Products")).toBeTruthy();

  });

});
