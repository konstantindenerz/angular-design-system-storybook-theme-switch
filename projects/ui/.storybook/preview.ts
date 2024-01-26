import {setCompodocJson} from "@storybook/addon-docs/angular";
import {componentWrapperDecorator, Preview} from "@storybook/angular";
import docJson from "../documentation.json";

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'core-light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        // https://github.com/storybookjs/icons/tree/main/src/icons
        items: [
          {value: 'core-light', title: 'Core', icon: 'sun'},
          {value: 'core-dark', title: 'Core', icon: 'moon'},
          {value: 'synthwave-light', title: 'Synthwave', icon: 'sun'},
          {value: 'synthwave-dark', title: 'Synthwave', icon: 'moon'}
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    componentWrapperDecorator(
      (story) => `<div [class]="labs-theme-manager">${story}</div>`,
      ({globals}) => {
        document.documentElement.className = '';
        document.documentElement.classList.add(`labs-${globals['theme']}-theme`);
        return {currentTheme: globals['theme']};
      }
    ),
  ],
};

export default preview;
