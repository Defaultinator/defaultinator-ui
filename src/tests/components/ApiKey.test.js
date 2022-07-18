import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/components/ApiKey.stories';

const { Primary: ApiKey } = composeStories(stories);

// Story data:   apiKey: '75304d82-9ae2-4678-a4a3-cd7d23de99aa'

describe('components/ApiKey', () => {
  it('should render', () => {
    render(<ApiKey />);
  });

  it('should display a hide/show button', () => {
    render(<ApiKey />);

    expect(screen.getByRole('button', { name: /show key/i })).toBeInTheDocument();
  });

  it('should hide the key until the user clicks the show button', () => {
    render(<ApiKey />);

    expect(screen.queryByText('75304d82-9ae2-4678-a4a3-cd7d23de99aa')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /show key/i }));
    expect(screen.queryByText('75304d82-9ae2-4678-a4a3-cd7d23de99aa')).toBeInTheDocument();
  });
});
