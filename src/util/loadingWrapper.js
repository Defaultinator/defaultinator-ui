import { Skeleton } from '@material-ui/lab';

export const loadingWrapper = (loading, element, shape = "rect") => {
  if (loading) {
    return (
      <Skeleton variant={shape}>
        {element}
      </Skeleton>
    );
  } else {
    return element;
  }
};

export default loadingWrapper;