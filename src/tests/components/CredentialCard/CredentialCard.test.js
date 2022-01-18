import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/components/CredentialCard/CredentialCard.stories';

const { Primary: CredentialCard, Verified } = composeStories(stories);

// Test data used in story
//
// export const sampleCredential = {
//   "references": [
//     "http://192-168-1-1-ip.co/manuals/1107.pdf"
//   ],
//   "_id": "23452345",
//   "username": "foo",
//   "password": "bar",
//   "protocol": "Unknown",
//   "cpe": {
//     "_id": "234523452345",
//     "part": "a",
//     "product": "11wa_321a",
//     "vendor": "11wave",
//     "version": "ANY",
//     "language": "ANY",
//     "update": "ANY",
//     "edition": "ANY"
//   },
//   "edits": [
//     {
//       "edit": {
//         "references": [
//           "http://192-168-1-1-ip.co/manuals/1107.pdf"
//         ],
//         "username": "foo",
//         "password": "",
//         "protocol": "Unknown",
//         "cpe": {
//           "part": "a",
//           "product": "11wa_321a",
//           "vendor": "11wave",
//           "version": "ANY",
//           "language": "ANY",
//           "update": "ANY",
//           "edition": "ANY"
//         }
//       },
//       "timestamp": 1642110033,
//     },
//     {
//       "edit": {
//         "password": "bar",
//       },
//       "timestamp": 1642110133,
//     },
//   ],
//   "__v": 0
// };

describe('components/CredentialCard/CredentialCard', () => {
  it('should render', () => {
    render(<CredentialCard />);
  });

  it('should display the username and password', () => {
    render(<CredentialCard />);

    expect(screen.getByText('foo')).toBeInTheDocument();
    expect(screen.getByText('bar')).toBeInTheDocument();
  });

  it('should display the vendor and product', () => {
    render(<CredentialCard />);

    expect(screen.getByText('11wave')).toBeInTheDocument();
    expect(screen.getByText('11wa_321a')).toBeInTheDocument();
  });

  it('should have an options menu', () => {
    render(<CredentialCard />);

    expect(
      screen.getByRole('button', { name: /options/i })
    ).toBeInTheDocument();
  });

  it('should have an edit button', () => {
    render(<CredentialCard />);

    expect(
      screen.getByRole('button', { name: /edit/i })
    ).toBeInTheDocument();
  });

  it('should have a delete button', () => {
    render(<CredentialCard />);

    expect(
      screen.getByRole('button', { name: /delete/i })
    ).toBeInTheDocument();
  });

  it('should show the data of creation and most recent edit', () => {
    render(<CredentialCard />);

    expect(screen.getByText('Created on: 1/13/2022')).toBeInTheDocument();
    expect(screen.getByText('Last edited: 1/13/2022')).toBeInTheDocument();
  });

  it('should display the result as unverified by default', () => {
    render(<CredentialCard />);

    expect(screen.getByLabelText('unverified')).toBeInTheDocument();
  });

  it('should display the result is verified if it is verified', () => {
    render(<Verified />);

    expect(screen.getByLabelText('verified')).toBeInTheDocument();

  });

});