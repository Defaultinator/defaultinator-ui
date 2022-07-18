import AuthButton from '../../components/AuthButton';

export default {
  title: 'Components/AuthButton',
  component: AuthButton,
};

// TODO: Need to make a story where the state is set. Otherwise it's just empty.

function Template(args) {
  return <AuthButton {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
