import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/components/APIKeyCard.stories';

const { Primary: APIKeyCard } = composeStories(stories);

describe('components/APIKeyCard', () => {
    it('should render', () => {
        render(<APIKeyCard />);
    });
});