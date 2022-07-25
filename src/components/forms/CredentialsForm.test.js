import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './CredentialsForm.stories';

const { Primary: CredentialsForm } = composeStories(stories);

describe('components/AdvancedSearchModal/CredentialsForm', () => {
  it('should render', () => {
    render(<CredentialsForm />);
  });
});
