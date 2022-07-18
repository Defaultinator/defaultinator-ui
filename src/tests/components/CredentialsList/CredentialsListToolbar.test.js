import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/components/CredentialsList/CredentialsListToolbar.stories';

const { Primary: CredentialsListToolbar } = composeStories(stories);

describe('components/CredentialsListToolbar', () => {
  it('should render', () => {
    render(<CredentialsListToolbar />);
  });
});
