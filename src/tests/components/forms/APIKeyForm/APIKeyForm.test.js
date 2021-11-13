import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../../stories/components/forms/APIKeyForm/APIKeyForm.stories';

const { Primary: APIKeyForm } = composeStories(stories);

describe('components/AdvancedSearchModal/APIKeyForm', () => {
    it('should render', () => {
        render(<APIKeyForm />);
    });
});