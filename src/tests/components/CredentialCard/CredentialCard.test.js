import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/components/CredentialCard/CredentialCard.stories';

const { Primary: CredentialCard } = composeStories(stories);

describe('components/CredentialCard', () => {
  it('should render', () => {
    render(<CredentialCard />);
  });

  it('should display the username and password', () => {
    render(<CredentialCard />);

    expect(screen.getByText('foo')).toBeInTheDocument();
    expect(screen.getByText('bar')).toBeInTheDocument();    
  });

  it('should display the vendor and product', () => {
    render(<CredentialCard />);

    expect(screen.getByText('11wave')).toBeInTheDocument();
    expect(screen.getByText('11wa_321a')).toBeInTheDocument();    
  });

  it('should have an options menu', () => {
    render(<CredentialCard />);

    expect(
      screen.getByRole('button', {name: /options/i})
    ).toBeInTheDocument();
  });

  it('should have an edit button', () => {
    render(<CredentialCard />);

    expect(
      screen.getByRole('button', {name: /edit/i})
    ).toBeInTheDocument();
  });

  it('should have a delete button', () => {
    render(<CredentialCard />);

    expect(
      screen.getByRole('button', {name: /delete/i})
    ).toBeInTheDocument();
  });

});