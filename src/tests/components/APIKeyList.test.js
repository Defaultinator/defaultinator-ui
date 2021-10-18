import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/components/APIKeyList.stories';

const { Primary: APIKeyList } = composeStories(stories);

describe('components/APIKeyList', () => {
    it('should render', () => {
        render(<APIKeyList />);
    });
});