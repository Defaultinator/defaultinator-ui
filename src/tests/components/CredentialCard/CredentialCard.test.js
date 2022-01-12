import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/components/CredentialCard/CredentialCard.stories';

const { Primary: CredentialCard } = composeStories(stories);

describe('components/CredentialCard', () => {
    it('should render', () => {
        render(<CredentialCard />);
    });
});