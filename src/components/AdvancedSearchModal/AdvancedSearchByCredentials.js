import React, {
  useState,
} from 'react';

import makeStyles from '@mui/styles/makeStyles';
import {
  Button,
  Container,
  Grid,
  TextField,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  actions: {
    paddingTop: theme.spacing(3),
  },
  cancel: {
    marginLeft: theme.spacing(2),
  },
  input: {
    margin: 'auto',
    display: 'table',
  }
}));

const AdvancedSearchByCPE = ({ onSubmit }) => {
  const styles = useStyles();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label={'Username'}
            variant={'outlined'}
          />
        </Grid>
        <Grid item xs={6}>
        <TextField
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label={'Password'}
            variant={'outlined'}
          />
        </Grid>
      </Grid>
      <Grid
        container
        className={styles.actions}
        justifyContent="flex-end"
      >
        <Grid item>
          <Button
            variant={"contained"}
            color={'primary'}
            onClick={() => onSubmit({
              ...(username && {username: username}),
              ...(password && {password: password})
            })}
          >
            Search
          </Button>
        </Grid>
        <Grid item>
          <Button
            color={'secondary'}
            className={styles.cancel}
            onClick={() => {
              setUsername('');
              setPassword('');
            }}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

AdvancedSearchByCPE.propTypes = {
};

AdvancedSearchByCPE.defaultProps = {
};

export default AdvancedSearchByCPE;