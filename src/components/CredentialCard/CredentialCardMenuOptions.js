import PropTypes from 'prop-types';
import React, {
  useState,
} from 'react';

import {
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  ListItemIcon,
} from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import BugReportIcon from '@material-ui/icons/BugReport';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import ReportIssueDialog from './ReportIssueDialog';

const ReportIssueMenuItem = () => {
  const [open, setOpen] = useState(false);

  return(
    <>
    <ReportIssueDialog open={open} setOpen={setOpen}/>
    <MenuItem
      onClick={() => setOpen(true)}
    >
      <ListItemIcon>
        <BugReportIcon />
      </ListItemIcon>
      <Typography variant="inherit" noWrap>
        Report an Issue
      </Typography>
    </MenuItem>
    </>
  );
};

const ReferencesMenuItem = ({ references }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  
  return (
    <>
      <MenuItem
        onClick={(e) => setAnchorEl(e.currentTarget)}
        disabled={references.length <= 0}
      >
        <ListItemIcon>
          <BookmarksIcon />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          References
        </Typography>
        <KeyboardArrowRightIcon />
      </MenuItem>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        style={{position: 'absolute', top: 40}}
      >
        {references.map((ref, idx) => (
          <MenuItem
            key={idx}
            component={'a'}
            href={`${ref}`}
          >
            {ref}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const CredentialCardMenuOptions = ({ references }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <Tooltip title={"More Options"}>
        <span>
          <IconButton
            aria-label="options"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <MoreVertIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Menu
        id="credentials-options-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <ReportIssueMenuItem />
        <ReferencesMenuItem references={references} />
      </Menu>
    </>
  );
};
export default CredentialCardMenuOptions;