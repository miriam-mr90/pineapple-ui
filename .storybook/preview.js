
import { ThemeProvider } from 'styled-components';
import { withThemes } from '@react-theming/storybook-addon';

import theme from '../src/themes/theme';
import alternativeTheme from '../src/themes/alternativeTheme';

const themes = [
    {
      name: 'Theme1', // Required it's used for displaying the button label,
      backgroundColor: '#fff', // Optional, it's used for setting dynamic background color on storybook
      ...theme,
    },
    // TODO: update values
    // {
    //   name: 'Theme2', // Required it's used for displaying the button label,
    //   backgroundColor: '#000',// Optional, it's used for setting dynamic background color on storybook
    //   ...alternativeTheme, // Your theme keys (Check example if you need some help)
    // }
];

export const decorators = [withThemes(ThemeProvider, themes)];

export const parameters = {
    actions: {
        argTypesRegex: "^on[A-Z].*"
    },
    options: {
        // order: ['Tokens', 'Layout', 'Components', 'Plugins'],
        method: 'alphabetical',
    },
    controls: {
        expanded: true
    },
}