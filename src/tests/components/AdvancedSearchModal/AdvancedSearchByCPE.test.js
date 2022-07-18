import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/components/AdvancedSearchModal/AdvancedSearchByCPE.stories';

const { Primary: AdvancedSearchByCPE } = composeStories(stories);

describe('components/AdvancedSearchModal/AdvancedSearchByCPE', () => {
  it('should render', () => {
    render(<AdvancedSearchByCPE />);
  });
});
