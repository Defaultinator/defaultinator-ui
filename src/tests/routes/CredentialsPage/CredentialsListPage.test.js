import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/routes/Credentials/CredentialsListPage.stories';

const { Primary: CredentialsListPage } = composeStories(stories);

describe('routes/CredentialsListPage', () => {
    it('should render', () => {
        render(<CredentialsListPage />);
    });
});