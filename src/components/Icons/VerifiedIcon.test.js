import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './VerifiedIcon.stories';

const { Primary: Unverified, Verified } = composeStories(stories);

describe('components/Icon/VerifiedIcon', () => {
  it('should render', () => {
    render(<Unverified />);
  });

  it('should show the record is unverified in the default state', async () => {
    render(<Unverified />);

    expect(screen.getByLabelText('unverified')).toBeInTheDocument();
    // TODO: This doesn't find the icon itself
  });

  it('should show the record is verified if it is verified', async () => {
    render(<Verified />);

    expect(screen.getByLabelText('verified')).toBeInTheDocument();
  });
});
