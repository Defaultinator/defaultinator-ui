import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/routes/APIKeyPage/AddAPIKeyPage.stories';

const { Primary: AddAPIKeyPage } = composeStories(stories);

describe('routes/APIKeyPage/AddAPIKeyPage', () => {
  it('should render', () => {
    render(<AddAPIKeyPage />);
  });
});
