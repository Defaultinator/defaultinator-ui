import React from "react";
import { render, screen } from '@testing-library/react';
import useAxios from "axios-hooks";

import CredentialsTable from '../../components/CredentialsTable';
import {
  sampleCredentials
} from '../data/sampleData';
import {
  MemoryRouter
} from "react-router-dom";

jest.mock('axios-hooks');

describe("<CredentialsTable />", () => {

  it("renders <CredentialsTable /> component", () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    render(<CredentialsTable />);

  });

  it('renders a progress bar while loading', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: true,
      data: null
    }]));

    render(<CredentialsTable />);
    expect(screen.queryByRole('progressbar')).toBeTruthy();

  });

  it('does not render a progress bar when loading is complete', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    render(<CredentialsTable />);
    expect(screen.queryByRole('progressbar')).toBeNull();

  });

  it('renders an error message if there is an error', () => {
    useAxios.mockImplementation(() => ([{
      error: true,
      loading: true,
      data: null
    }]));

    render(<CredentialsTable />);
    expect(screen.queryByText('There was an error.')).toBeTruthy();

  });

  it('does not render an error message if there is not an error', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: true,
      data: null
    }]));

    render(<CredentialsTable />);
    expect(screen.queryByText('There was an error.')).toBeNull();

  });

  it('renders a table with a list of credentials and cpe strings', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: sampleCredentials
    }]));

    render(
      <MemoryRouter>
        <CredentialsTable />
      </MemoryRouter>
    );

    sampleCredentials.forEach((credential) => {
      expect(screen.getByText(credential.cpe)).toBeTruthy();
      expect(screen.getByText(credential.username)).toBeTruthy();
      expect(screen.getByText(credential.password)).toBeTruthy();
    });

  });

  it('renders the proper table headings', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    render(<CredentialsTable />);
    expect(screen.getByText("CPE")).toBeTruthy();
    expect(screen.getByText("Username")).toBeTruthy();
    expect(screen.getByText("Password")).toBeTruthy();

  });

});
