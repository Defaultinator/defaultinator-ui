import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/components/AdvancedSearchModal/AdvancedSearchModal.stories';

const { Primary: AdvancedSearchModal } = composeStories(stories);

describe('components/AdvancedSearchModal/AdvancedSearchModal', () => {
    it('should render', () => {
        render(<AdvancedSearchModal />);
    });
});