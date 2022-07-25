import PropTypes from 'prop-types';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Skeleton,
} from '@mui/material';
import { APIKeyType } from '../config/types';
import IsAdminIcon from './Icons/IsAdminIcon';
import loadingWrapper from '../util/loadingWrapper';
import ApiKey from './ApiKey';

export const APIKeyCard = ({
  apiKey = {},
  loading = false,
  deleteButtonProps = {},
  editButtonProps = {},
}) => {
  const {
    apiKey: key, email, notes, isAdmin,
  } = apiKey;

  return (
    <Card sx={{ width: 400, margin: 'auto' }}>
      <CardHeader
        avatar={
          loadingWrapper(loading, <IsAdminIcon isAdmin={isAdmin} />, 'circle')
        }
        title={loading ? <Skeleton width={100} variant="text" /> : email}
        subheader={loading ? <Skeleton width={150} variant="text" /> : <ApiKey apiKey={key} />}
      />
      <CardContent>
        <Typography variant="body1">{loading ? [1, 2, 3].map((val) => <Skeleton key={val} style={{ width: '100%' }} />) : notes}</Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          disabled={loading}
          size="small"
          color="secondary"
          {...deleteButtonProps}
        >
          Delete
        </Button>
        <Button
          disabled={loading}
          size="small"
          color="primary"
          variant="outlined"
          {...editButtonProps}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

APIKeyCard.propTypes = {
  apiKey: PropTypes.shape(APIKeyType),
  loading: PropTypes.bool,
  deleteButtonProps: PropTypes.object,
  editButtonProps: PropTypes.object,
};

APIKeyCard.defaultProps = {
  loading: false,
  onDelete: {},
  onEdit: {},
};

export default APIKeyCard;
