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

import { CredentialType } from '../../config/types';

import CredentialCardMenuOptions from './CredentialCardMenuOptions';

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
});

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