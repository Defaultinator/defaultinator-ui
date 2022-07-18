import AppsIcon from '@mui/icons-material/Apps';
import RouterIcon from '@mui/icons-material/Router';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';

import { Tooltip } from '@mui/material';

export function PartIcon({ part }) {
  let icon = <DeviceUnknownIcon />;
  let text = 'Unknown';

  switch (part) {
    case 'a':
      icon = <AppsIcon />;
      text = 'Software';
      break;
    case 'o':
      icon = <DeveloperBoardIcon />;
      text = 'Operating System';
      break;
    case 'h':
      icon = <RouterIcon />;
      text = 'Hardware';
      break;
    default:
      break;
  }

  return (
    <Tooltip title={text}>
      {icon}
    </Tooltip>
  );
}

export default PartIcon;
