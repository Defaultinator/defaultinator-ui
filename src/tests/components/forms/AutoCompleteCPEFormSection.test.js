import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/components/forms/AutoCompleteCPEFormSection.stories';

const { Primary: AutoCompleteCPEFormSection } = composeStories(stories);

describe('components/AdvancedSearchModal/AutoCompleteCPEFormSection', () => {
    it('should render', () => {
        render(<AutoCompleteCPEFormSection />);
    });
});