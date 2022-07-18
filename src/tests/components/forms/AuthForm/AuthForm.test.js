import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../../stories/components/forms/AuthForm/AuthForm.stories';

const { Primary: AuthForm } = composeStories(stories);

describe('components/AdvancedSearchModal/AuthForm', () => {
  it('should render', () => {
    render(<AuthForm />);
  });
});
