import {
  Button,
  Grid,
  LinearProgress,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    maxWidth: 400,
  }
}));

const JoyrideTooltip = ({
  continuous,
  index,
  size,
  step,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps,
}) => {
  const classes = useStyles();

  const {
    title,
    content
  } = step;

  return (
    <Paper
      {...tooltipProps}
      className={classes.root}
    >
      <Grid container>
        <Grid item xs={12}>
          {title &&
            <Typography
              variant={'h5'}
              style={{ textAlign: 'center' }}
            >
              {title}
            </Typography>
          }
        </Grid>
        <Grid item xs={12}>
          {(typeof content === 'string') ?
            <Typography
              variant={'body2'}
              style={{ textAlign: 'center' }}
              gutterBottom
            >
              {content}
            </Typography>
            :
            <>{ content }</>
          }
        </Grid>
        <Grid
          item
          container
          xs={3}
          direction={'row'}
          alignItems={'flex-start'}
          justifyContent={'flex-start'}
        >
          <Button
            {...backProps}
            size="small"
            disabled={index === 0}
            color="secondary"
            variant="contained"
            style={{ paddingLeft: 2 }}
          >
            <KeyboardArrowLeftIcon fontSize={'small'} />Back
          </Button>
        </Grid>
        <Grid
          item
          container
          xs
          direction={'column'}
          justifyContent={'center'}
          display={'flex'}
        >
          <LinearProgress variant="determinate" value={Math.round((index + 1) / size * 100)} />
        </Grid>
        <Grid
          item
          container
          xs={3}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'flex-end'}
        >
          {(index + 1) === size ?
            <Button
              {...closeProps}
              size="small"
              color="secondary"
              variant="contained"
            >
              Done
            </Button>
            :
            <Button
              {...primaryProps}
              size="small"
              color="secondary"
              variant="contained"
              style={{ paddingRight: 2 }}
            >
              Next<KeyboardArrowRightIcon fontSize={'small'} />
            </Button>
          }
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JoyrideTooltip;