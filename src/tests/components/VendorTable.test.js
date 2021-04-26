import React from "react";
import { screen } from '@testing-library/react';
import useAxios from "axios-hooks";

import VendorTable from '../../components/VendorTable';

import {
  sampleVendors
} from '../data/sampleData';

import {
  renderWithRouter
} from "../utils/renderWithRouter";;

jest.mock('axios-hooks');

describe("<VendorTable />", () => {

  it("renders <VendorTable /> component", () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    renderWithRouter(<VendorTable />);

  });

  it('renders a progress bar while loading', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: true,
      data: null
    }]));

    renderWithRouter(<VendorTable />);
    expect(screen.queryByRole('progressbar')).toBeTruthy();

  });

  it('does not render a progress bar when loading is complete', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    renderWithRouter(<VendorTable />);
    expect(screen.queryByRole('progressbar')).toBeFalsy();

  });

  it('renders an error message if there is an error', () => {
    useAxios.mockImplementation(() => ([{
      error: true,
      loading: true,
      data: null
    }]));

    renderWithRouter(<VendorTable />);
    expect(screen.queryByText('There was an error.')).toBeTruthy();

  });

  it('does not render an error message if there is not an error', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: true,
      data: null
    }]));

    renderWithRouter(<VendorTable />);
    expect(screen.queryByText('There was an error.')).toBeNull();
  });

  it('renders a table with a list of vendors', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: sampleVendors
    }]));

    renderWithRouter(<VendorTable />);
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

    renderWithRouter(<VendorTable />);
    expect(screen.getByText("Vendors")).toBeTruthy();

  });

});
