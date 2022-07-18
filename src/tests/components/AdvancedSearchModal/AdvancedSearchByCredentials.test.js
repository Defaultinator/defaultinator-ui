import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/components/AdvancedSearchModal/AdvancedSearchByCredentials.stories';

const { Primary: AdvancedSearchByCredentials } = composeStories(stories);

describe('components/AdvancedSearchModal/AdvancedSearchByCredentials', () => {
  it('should render', () => {
    render(<AdvancedSearchByCredentials />);
  });
});
