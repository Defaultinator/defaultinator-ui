import React from "react";
import { render, screen } from '@testing-library/react';
import useAxios from "axios-hooks";

import VendorTable from '../components/VendorTable';

jest.mock('axios-hooks');

describe("<VendorTable />", () => {

  it("renders <VendorTable /> component", () => {

    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    render(<VendorTable />);

  });

  it('renders a progress bar while loading', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: true,
      data: null
    }]));

    render(<VendorTable />);
    expect(screen.getByTestId('vendortable-loader')).toBeTruthy();

  });

  it.skip('does not render a progress bar when loading is complete', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    render(<VendorTable />);
    expect(screen.getByTestId('vendortable-loader')).toBeFalsy();

  });

  it('renders an error message if there is an error', () => {
    useAxios.mockImplementation(() => ([{
      error: true,
      loading: true,
      data: null
    }]));

    render(<VendorTable />);
    expect(screen.getByText('There was an error.')).toBeTruthy();

  });

  it.skip('does not render an error message if there is not an error', () => {
    useAxios.mockImplementation(() => ([{
      error: true,
      loading: true,
      data: null
    }]));

    render(<VendorTable />);
    expect(screen.getByText('There was an error.')).toBeFalsy();

  });

  it('renders a table with a list of vendors', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: ["foo", "bar"]
    }]));

    render(<VendorTable />);
    expect(screen.getByText('foo')).toBeTruthy();
    expect(screen.getByText('bar')).toBeTruthy();

  });

});
