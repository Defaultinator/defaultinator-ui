import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';

import {
  Link,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { CredentialType } from '../config/types';

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
    minWidth: 250,
    textAlign: 'center',
  },
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end"
  },
  fieldHeading: {
  },
  fieldContent: {
    margin: 'auto',
  },
});

const CardMenuOptions = ({ references }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
    <Tooltip title={"References"}>
      <span>
      <IconButton
        disabled={references.length > 0 ? false : true}
        aria-label="settings"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <MoreVertIcon />
      </IconButton>
      </span>
      </Tooltip>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {references.map((ref, idx) => (
          <MenuItem
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

export const CredentialCard = (
  {
    credential,
    primaryButtonText,
    primaryButtonProps,
    secondaryButtonText,
    secondaryButtonProps
  }
) => {
  const styles = useStyles();
  const { username, password, cpe } = credential;
  const { vendor, product } = cpe;

  return (
    <Card className={styles.root}>
      <CardHeader
        title={vendor}
        titleTypographyProps={{ style: { textTransform: 'capitalize' } }}
        subheader={product}
        action={<CardMenuOptions {...credential} />}
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={3}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Typography
              variant={'h6'}
              className={styles.fieldHeading}
            >
              Username
            </Typography>
            <Typography
              className={styles.fieldContent}
            >
              {username || <i>blank</i>}
            </Typography>
          </Grid>
          <Divider orientation={'vertical'} flexItem />
          <Grid item>
            <Typography
              variant={'h6'}
              className={styles.fieldHeading}
            >
              Password
            </Typography>
            <Typography
              className={styles.fieldContent}
            >
              {password || <i>blank</i>}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions className={styles.cardActions}>
        {primaryButtonText &&
          <Button
            size="small"
            color="primary"
            variant={'contained'}
            {...primaryButtonProps}
          >
            {primaryButtonText}
          </Button>
        }
        {secondaryButtonText &&
          <Button
            size="small"
            color="secondary"
            {...secondaryButtonProps}
          >
            {secondaryButtonText}
          </Button>
        }
      </CardActions>
    </Card>
  );
};

CredentialCard.propTypes = {
  credential: CredentialType,
  primaryButtonText: PropTypes.string,
  primaryButtonProps: PropTypes.object,
  secondaryButtonText: PropTypes.string,
  secondaryButtonProps: PropTypes.object,
};

CredentialCard.defaultProps = {
};

export default CredentialCard;