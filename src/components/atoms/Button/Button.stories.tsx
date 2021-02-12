import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Button, ButtonProps} from "./Button";

export default {
    title: 'Components/Atoms/Button',
    component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Sample = Template.bind({});
Sample.args = {
    classNameString: 'uk-text-small',
    label: 'ボタン',
};