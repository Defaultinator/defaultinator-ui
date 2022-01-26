import AppsIcon from '@material-ui/icons/Apps';
import RouterIcon from '@material-ui/icons/Router';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import DeviceUnknownIcon from '@material-ui/icons/DeviceUnknown';

import { Tooltip } from '@material-ui/core';

export const PartIcon = ({part}) => {
  let icon = <DeviceUnknownIcon />;
  let text = 'Unknown';

  switch (part) {
    case 'a':
      icon = <AppsIcon />;
      text = 'Software';
      break;
    case 'o':
      icon = <DeveloperBoardIcon />
      text = 'Operating System';
      break;
    case 'h':
      icon = <RouterIcon />
      text = 'Hardware';
      break;
    default:
      break;
  };

  return(
    <Tooltip title={text}>
      {icon}
    </Tooltip>
  );
};

export default PartIcon;