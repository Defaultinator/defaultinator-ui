import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/routes/APIKeyPage/ListAPIKeysPage.stories';

const { Primary: ListAPIKeysPage } = composeStories(stories);

describe('routes/APIKeyPage/ListAPIKeysPage', () => {
    it('should render', () => {
        render(<ListAPIKeysPage />);
    });
});