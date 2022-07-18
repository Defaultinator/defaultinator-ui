import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/routes/CredentialsPage/CredentialDetailsPage.stories';

const { Primary: CredentialDetailsPage } = composeStories(stories);

describe('routes/CredentialDetailsPage', () => {
  it('should render', () => {
    render(<CredentialDetailsPage />);
  });
});
