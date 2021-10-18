import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { APIKeyType } from '../config/types';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },

});

export const APIKeyCard = ({ apiKey, email, notes }) => {
  const styles = useStyles();

  return (
    <Card className={styles.root}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{email}</Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>{apiKey}</Typography>
        <Typography variant="body2">{notes}</Typography>
      </CardContent>
    </Card>
  );
};

APIKeyCard.propTypes = APIKeyType;

APIKeyCard.defaultProps = {
};

export default APIKeyCard;