import React from "react";
import { render, screen } from '@testing-library/react';
import useAxios from "axios-hooks";

import CredentialDetails from '../../components/CredentialDetails';
import {
  sampleCredential
} from '../data/sampleData';

jest.mock('axios-hooks');

describe("<CredentialDetails />", () => {

  it("renders <CredentialDetails /> component", () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    render(<CredentialDetails />);

  });

  it('renders a <Skeleton /> while loading', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: true,
      data: null
    }]));

    render(<CredentialDetails />);
    expect(screen.queryByTestId('credentialdetail-skeleton')).toBeTruthy();

  });

  it('does not render a progress bar when loading is complete', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: []
    }]));

    render(<CredentialDetails />);
    expect(screen.queryByTestId('credentialdetail-skeleton')).toBeNull();

  });

  it('renders an error message if there is an error', () => {
    useAxios.mockImplementation(() => ([{
      error: true,
      loading: true,
      data: null
    }]));

    render(<CredentialDetails />);
    expect(screen.queryByText('There was an error.')).toBeTruthy();

  });

  it('does not render an error message if there is not an error', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: true,
      data: null
    }]));

    render(<CredentialDetails />);
    expect(screen.queryByText('There was an error.')).toBeNull();

  });

  it('renders a <Paper /> element with the credentials returned', () => {
    useAxios.mockImplementation(() => ([{
      error: false,
      loading: false,
      data: sampleCredential
    }]));

    render(<CredentialDetails />);

    sampleCredential.forEach((credential) => {
      expect(screen.getByText(credential.cpe)).toBeTruthy();
      expect(screen.getByText(credential.username)).toBeTruthy();
      expect(screen.getByText(credential.password)).toBeTruthy();
    });

  });

});
