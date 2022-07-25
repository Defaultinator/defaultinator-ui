import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './APIKeyListToolbar.stories';

const { Primary: APIKeyListToolbar } = composeStories(stories);

describe('components/APIKeyListToolbar', () => {
  it('should render', () => {
    render(<APIKeyListToolbar />);
  });
});
