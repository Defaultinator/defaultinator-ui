import React from 'react';

import ReportIssueDialog from '../../../components/CredentialCard/ReportIssueDialog';

export default {
  title: 'Components/CredentialCard/ReportIssueDialog',
  component: ReportIssueDialog,
};

function Template(args) {
  return <ReportIssueDialog {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  open: true,
};
