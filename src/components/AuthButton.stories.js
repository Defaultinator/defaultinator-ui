import AuthButton from './AuthButton';

export default {
  title: 'Components/AuthButton',
  component: AuthButton,
};

// TODO: Need to make a story where the state is set. Otherwise it's just empty.

const Template = (args) => <AuthButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
