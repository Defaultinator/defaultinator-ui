import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/routes/Credentials/AddCredentialsPage.stories';

const { Primary: AddCredentialsPage } = composeStories(stories);

describe('routes/AddCredentialsPage', () => {
    it('should render', () => {
        render(<AddCredentialsPage />);
    });
});