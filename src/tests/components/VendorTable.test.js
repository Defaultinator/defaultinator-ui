import React from "react";
import { render, screen } from '@testing-library/react';
import useAxios from "axios-hooks";

import VendorTable from '../../components/VendorTable';

import {
  sampleVendors
} from '../data/sampleData';
import CredentialsTable from "../../components/CredentialsTable";

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
    expect(screen.queryByRole('progressbar')).toBeTruthy();

  });

  it('does not render a progress bar when loading is complete', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    render(<VendorTable />);
    expect(screen.queryByRole('progressbar')).toBeFalsy();

  });

  it('renders an error message if there is an error', () => {
    useAxios.mockImplementation(() => ([{
      error: true,
      loading: true,
      data: null
    }]));

    render(<VendorTable />);
    expect(screen.queryByText('There was an error.')).toBeTruthy();

  });

  it('does not render an error message if there is not an error', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: true,
      data: null
    }]));

    render(<VendorTable />);
    expect(screen.queryByText('There was an error.')).toBeNull();
  });

  it('renders a table with a list of vendors', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: sampleVendors
    }]));

    render(<VendorTable />);
    sampleVendors.forEach((vendor) => {
      expect(screen.getByText(vendor)).toBeTruthy();
    });

  });

  it('renders the proper table headings', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    render(<VendorTable />);
    expect(screen.getByText("Vendors")).toBeTruthy();

  });

});
