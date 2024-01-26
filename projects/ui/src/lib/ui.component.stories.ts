import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {UiComponent} from './ui.component';

const meta: Meta<UiComponent> = {
  title: 'Theme Test Component',
  component: UiComponent,
};
export default meta;

type Story = StoryObj<UiComponent>;

export const Default: Story = {
  args: {}
};
