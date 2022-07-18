import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/routes/AboutPage.stories';

const { Primary: AboutPage } = composeStories(stories);

describe('routes/AboutPage', () => {
  it('should render', () => {
    render(<AboutPage />);
  });
});
