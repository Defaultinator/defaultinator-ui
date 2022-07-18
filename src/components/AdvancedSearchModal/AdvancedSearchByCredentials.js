import React, {
  useState,
} from 'react';

import {
  Button,
  Container,
  Grid,
  TextField,
} from '@mui/material';

function AdvancedSearchByCPE({ onSubmit }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            sx={{ margin: 'auto', display: 'table' }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{ margin: 'auto', display: 'table' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ paddingTop: 3 }}
        justifyContent="flex-end"
      >
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => onSubmit({
              ...(username && { username }),
              ...(password && { password }),
            })}
          >
            Search
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="secondary"
            sx={{ marginLeft: 2 }}
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
}

AdvancedSearchByCPE.propTypes = {
};

AdvancedSearchByCPE.defaultProps = {
};

export default AdvancedSearchByCPE;
