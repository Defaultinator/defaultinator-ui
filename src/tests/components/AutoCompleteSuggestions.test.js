import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/components/AutoCompleteSuggestions.stories';

const { Primary: AutoCompleteSuggestions } = composeStories(stories);

describe('components/AutoCompleteSuggestions', () => {
  it('should render', () => {
    render(<AutoCompleteSuggestions />);
  });
});
