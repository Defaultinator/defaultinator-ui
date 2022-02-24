import Joyride from '../../../components/Joyride/Joyride';

export default {
  title: 'Components/Joyride/Joyride',
  component: Joyride,
  decorators: [
    (Story) => (
      <div>
        <button id='test-1'>Test1</button>
        <br /><br />
        <button id='test-2'>Test2</button>
        <Story />
      </div>
    ),
  ]
};

const Template = (args) => <Joyride {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  steps: [
    {
      title: "Test Step 1",
      target: "#test-1",
      content: "sadfg asdfg stdfhj serth dfgh sdthsdths rthjsrtjsft jhsftj",
    },
    {
      title: "Test Step 2",
      target: "#test-2",
      content: "sadfg asdfg stdfhj serth dfgh sdthsdths rthjsrtjsft jhsftj",
    },
  ]
};