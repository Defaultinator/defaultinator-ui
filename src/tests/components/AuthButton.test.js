import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/components/AuthButton.stories';

const { Primary: AuthButton } = composeStories(stories);

describe('components/AuthButton', () => {
  it('should render', () => {
    render(<AuthButton />);
  });
});
