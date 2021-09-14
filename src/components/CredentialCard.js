import React from 'react';
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
} from '@material-ui/core';

import { CredentialType } from '../config/types';

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
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

export const CredentialCard = ({ credential, onPrimaryAction, primaryButtonText, onSecondaryAction, secondaryButtonText }) => {
  const styles = useStyles();
  const { username, password, cpe } = credential;
  const { vendor, product } = cpe;

  return (
    <Card className={styles.root}>
      <CardHeader
        title={vendor}
        titleTypographyProps={{ style: { textTransform: 'capitalize' } }}
        subheader={product}
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
        {primaryButtonText && onPrimaryAction &&
          <Button
            size="small"
            color="primary"
            variant={'contained'}
            onClick={() => onPrimaryAction(credential)}
          >
            {primaryButtonText}
          </Button>
        }
        {secondaryButtonText && onSecondaryAction &&
          <Button
            size="small"
            color="secondary"
            onClick={() => onSecondaryAction(credential)}
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
  onPrimaryAction: PropTypes.func,
  primaryButtonText: PropTypes.string,
  onSecondaryAction: PropTypes.func,
  secondaryButtonText: PropTypes.string,
};

CredentialCard.defaultProps = {
  items: [],
  actions: [],
};

export default CredentialCard;