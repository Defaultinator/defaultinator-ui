import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/routes/AuthenticatePage.stories';

const { Primary: AuthenticatePage } = composeStories(stories);

describe('routes/AuthenticatePage', () => {
    it('should render', () => {
        render(<AuthenticatePage />);
    });
});