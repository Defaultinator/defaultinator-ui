import React from 'react';

import ReportIssueDialog from '../../../components/CredentialCard/ReportIssueDialog';

export default {
  title: 'Components/CredentialCard/ReportIssueDialog',
  component: ReportIssueDialog,
};

const Template = (args) => <ReportIssueDialog {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: true,
};