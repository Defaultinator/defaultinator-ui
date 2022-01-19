import PropTypes from 'prop-types';

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
} from '@material-ui/core';

import { CredentialType } from '../../config/types';

import CredentialCardMenuOptions from './CredentialCardMenuOptions';
import VerifiedIcon from '../Icons/VerifiedIcon';

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
    minWidth: 250,
    textAlign: 'center',
    margin: 'auto',
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
  timestampContainer: {
    width: '100%',
  },
  timestampContents: {
    textAlign: 'left',
  }
});

export const CredentialCard = (
  {
    credential,
    primaryButtonText,
    primaryButtonProps,
    secondaryButtonText,
    secondaryButtonProps,
    isAdmin = false,
    onVerify = () => { },
  }
) => {
  const styles = useStyles();

  const {
    username,
    password,
    cpe,
    isVerified = false,
    edits,
  } = credential;
  const { vendor, product } = cpe;

  const createdOn = Math.min(...(edits?.map(({ timestamp }) => timestamp) || [0]));

  let lastEdited;
  if (edits?.length > 1) {
    lastEdited = Math.max(...edits.map(({ timestamp }) => timestamp));
  };

  // Needed to display the date properly
  const dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "2-digit"
  };

  return (
    <Card className={styles.root}>
      <CardHeader
        avatar={
          <IconButton
            disabled={!isAdmin}
            aria-label={isVerified ? "unverify" : "verify"}
            onClick={() => onVerify(credential)}
          >
            <VerifiedIcon isVerified={isVerified} />
          </IconButton>
        }
        title={vendor}
        titleTypographyProps={{ style: { textTransform: 'capitalize' }, variant: 'h5' }}
        subheader={product}
        subheaderTypographyProps={{ variant: 'body2' }}
        action={<CredentialCardMenuOptions {...credential} />}
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
        <span className={styles.timestampContainer}>
          {!!createdOn &&
            <div className={styles.timestampContents}>
              <Typography variant={'caption'}>
                Created on: {new Date(createdOn * 1000).toLocaleString("en-US", dateOptions)}
              </Typography>
            </div>
          }
          {lastEdited &&
            <div className={styles.timestampContents}>
              <Typography variant={'caption'}>
                Last edited: {new Date(lastEdited * 1000).toLocaleString("en-US", dateOptions)}
              </Typography>
            </div>
          }
        </span>
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
  isAdmin: PropTypes.bool,
  onVerify: PropTypes.func,
};

CredentialCard.defaultProps = {
  isAdmin: false,
  onVerify: () => { },
};

export default CredentialCard;