import ApiKey from '../../components/ApiKey';

export default {
  title: 'Components/ApiKey',
  component: ApiKey,
};

const Template = (args) => <ApiKey {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  apiKey: '75304d82-9ae2-4678-a4a3-cd7d23de99aa'
};