import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/components/ApiKey.stories';

const { Primary: ApiKey } = composeStories(stories);

describe('components/ApiKey', () => {
    it('should render', () => {
        render(<ApiKey />);
    });
});