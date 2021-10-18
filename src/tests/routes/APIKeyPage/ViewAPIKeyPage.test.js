import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/routes/APIKeyPage/ViewAPIKeyPage.stories';

const { Primary: ViewAPIKeyPage } = composeStories(stories);

describe('routes/APIKeyPage/ViewAPIKeyPage', () => {
    it('should render', () => {
        render(<ViewAPIKeyPage />);
    });
});