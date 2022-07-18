import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/components/CredentialsList/CredentialsList.stories';

const {
  Primary: CredentialsList, Dense, Loading, LoadingInitial, Error,
} = composeStories(stories);

describe('components/CredentialsList', () => {
  it('should render', () => {
    render(<CredentialsList />);
  });

  describe('Dense', () => {
    it('should render', () => {
      render(<Dense />);
    });
  });

  describe('Loading', () => {
    it('should render', () => {
      render(<Loading />);
    });
  });

  describe('LoadingInitial', () => {
    it('should render', () => {
      render(<LoadingInitial />);
    });
  });

  describe('Error', () => {
    it('should render', () => {
      render(<Error />);
    });
  });
});
