import { Skeleton } from '@mui/material';

export const loadingWrapper = (loading, element, shape = 'rect') => {
  if (loading) {
    return (
      <Skeleton variant={shape}>
        {element}
      </Skeleton>
    );
  }
  return element;
};

export default loadingWrapper;
