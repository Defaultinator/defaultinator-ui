import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/routes/FeedbackPage.stories';

const { Primary: FeedbackPage } = composeStories(stories);

describe('routes/FeedbackPage', () => {
    it('should render', () => {
        render(<FeedbackPage />);
    });
});