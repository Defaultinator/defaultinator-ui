import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';

import { CredentialType } from '../../config/types';

import CredentialCardMenuOptions from './CredentialCardMenuOptions';
import VerifiedIcon from '../Icons/VerifiedIcon';
import { Skeleton } from '@mui/material';
import loadingWrapper from '../../util/loadingWrapper';

export const CredentialCard = (
  {
    credential = {},
    primaryButtonProps,
    secondaryButtonProps,
    isAdmin = false,
    onVerify = () => { },
    loading = false,
  }
) => {
  const {
    username = '',
    password = '',
    cpe = {},
    isVerified = false,
    edits = [],
  } = credential;
  const { vendor = '', product = '' } = cpe;

  const createdOn = Math.min(...(edits?.map(({ timestamp }) => timestamp) || [0])) / 1000;

  let lastEdited;
  if (edits?.length > 1) {
    lastEdited = Math.max(...edits.map(({ timestamp }) => timestamp)) / 1000;
  };

  // Needed to display the date properly
  const dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "2-digit"
  };

  return (
    <Card sx={{ maxWidth: 550, minWidth: 250, textAlign: 'center', margin: 'auto' }}>
      <CardHeader
        avatar={
          loadingWrapper(
            loading,
            <IconButton
              disabled={!isAdmin}
              aria-label={isVerified ? "unverify" : "verify"}
              onClick={() => onVerify(credential)}
              size="large">
              <VerifiedIcon isVerified={isVerified} />
            </IconButton>,
            'circle')
        }
        title={loading ? <Skeleton width={100} variant={'text'} /> : vendor}
        titleTypographyProps={{ style: { textTransform: 'capitalize' }, variant: 'h5' }}
        subheader={loading ? <Skeleton width={200} variant={'text'} /> : product}
        subheaderTypographyProps={{ variant: 'body2' }}
        action={loadingWrapper(loading, <CredentialCardMenuOptions {...credential} />, 'circle')}
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
            >
              Username
            </Typography>
            <Typography
              sx={{ margin: 'auto' }}
            >
              {loading ? <Skeleton /> : (username || <i>blank</i>)}
            </Typography>
          </Grid>
          <Divider orientation={'vertical'} flexItem />
          <Grid item>
            <Typography
              variant={'h6'}
            >
              Password
            </Typography>
            <Typography
              sx={{ margin: 'auto' }}
            >
              {loading ? <Skeleton /> : (password || <i>blank</i>)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <span sx={{ width: '100%' }}>
          {!!createdOn && createdOn !== Infinity &&
            <Box sx={{textAlign: 'left'}}>
              <Typography variant={'caption'}>
                {loading ?
                  <Skeleton width={150} /> :
                  <>
                    Created on: {new Date(createdOn * 1000).toLocaleString("en-US", dateOptions)}
                  </>
                }
              </Typography>
            </Box>
          }
          {lastEdited &&
            <Box sx={{textAlign: 'left'}}>
              <Typography variant={'caption'}>
                {loading ?
                  <Skeleton width={150} /> :
                  <>
                    Last edited: {new Date(lastEdited * 1000).toLocaleString("en-US", dateOptions)}
                  </>
                }
              </Typography>
            </Box>
          }
        </span>
        <Button
          disabled={loading || isVerified}
          size="small"
          color="primary"
          variant={'outlined'}
          aria-label="edit"
          {...primaryButtonProps}
        >
          Edit
        </Button>
        {isAdmin &&
          <Button
            disabled={loading}
            size="small"
            color="secondary"
            aria-label="delete"
            {...secondaryButtonProps}
          >
            Delete
          </Button>
        }
      </CardActions>
    </Card>
  );
};

CredentialCard.propTypes = {
  credential: CredentialType,
  primaryButtonProps: PropTypes.object,
  secondaryButtonProps: PropTypes.object,
  isAdmin: PropTypes.bool,
  onVerify: PropTypes.func,
  loading: PropTypes.bool,
};

CredentialCard.defaultProps = {
  credential: {},
  isAdmin: false,
  onVerify: () => { },
  loading: false,
};

export default CredentialCard;