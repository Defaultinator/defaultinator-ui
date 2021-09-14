import { addDecorator } from '@storybook/react';

import { ThemeProvider } from '@material-ui/styles';
import darkTheme from '../src/themes/darkTheme';
import { SnackbarProvider } from 'notistack';
import { ConfirmProvider } from 'material-ui-confirm';
import StoryRouter from 'storybook-react-router';
 
addDecorator(StoryRouter());

export const decorators = [
  (Story) => (
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={darkTheme}>
        <ConfirmProvider
          defaultOptions={{
            confirmationButtonProps: { autoFocus: true, variant: 'contained' },
            cancellationButtonProps: { color: 'secondary' },
          }}
        >
          <Story />
        </ConfirmProvider>
      </ThemeProvider>
    </SnackbarProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
