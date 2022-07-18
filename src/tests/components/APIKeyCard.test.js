import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/components/APIKeyCard.stories';

const { Primary: APIKeyCard } = composeStories(stories);

// Test data used in story
//
// {
//   apiKey: 'foobarfoobarfoobar',
//   email: 'foo@bar.foobar',
//   notes: 'foo bar foo bar foo bar',
// },

describe('components/APIKeyCard', () => {
  it('should render', () => {
    render(<APIKeyCard />);
  });

  it('should display the key, notes, and email', () => {
    render(<APIKeyCard />);

    expect(screen.queryByText('foobarfoobarfoobar')).not.toBeInTheDocument();
    expect(screen.queryByText('foo@bar.foobar')).toBeInTheDocument();
    expect(screen.queryByText('foo bar foo bar foo bar')).toBeInTheDocument();
  });

  it('should have an edit button', () => {
    render(<APIKeyCard />);

    expect(
      screen.getByRole('button', { name: /edit/i })
    ).toBeInTheDocument();
  });

  it('should have a delete button', () => {
    render(<APIKeyCard />);

    expect(
      screen.getByRole('button', { name: /delete/i })
    ).toBeInTheDocument();
  });

});