import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './TermsPage.stories';

const { Primary: TermsPage } = composeStories(stories);

describe('routes/TermsPage', () => {
  it('should render', () => {
    render(<TermsPage />);
  });
});
