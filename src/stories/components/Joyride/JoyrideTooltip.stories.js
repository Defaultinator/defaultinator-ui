import JoyrideTooltip from '../../../components/Joyride/JoyrideTooltip';

export default {
  title: 'Components/Joyride/JoyrideTooltip',
  component: JoyrideTooltip,
};

const Template = (args) => <JoyrideTooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  step: {
    title: "Hello World",
    content: "This is the content of the tooltip."
  },
  index: 1,
  size: 4,
  continuous: true,
};

export const First = Template.bind({});
First.args = {
  step: {
    title: "Hello World",
    content: "This is the content of the tooltip."
  },
  index: 0,
  size: 4,
  continuous: true,
};

export const Last = Template.bind({});
Last.args = {
  step: {
    title: "Hello World",
    content: "This is the content of the tooltip."
  },
  index: 3,
  size: 4,
  continuous: true,
};