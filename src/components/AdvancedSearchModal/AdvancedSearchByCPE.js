import React, {
  useState,
} from 'react';

import {
  Button,
  Container,
  Grid,
} from '@mui/material';
import AutoCompleteCPEFormSection from '../forms/AutoCompleteCPEFormSection';

function AdvancedSearchByCPE({ onSubmit }) {

  const [fields, setFields] = useState({});

  return (
    <Container>
      <AutoCompleteCPEFormSection fields={fields} setFields={setFields} />
      <Grid
        container
        sx={{ paddingTop: 3 }}
        justifyContent="flex-end"
      >
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => onSubmit(fields)}
          >
            Search
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="secondary"
            sx={{marginLeft: 2}}
            onClick={() => setFields({})}
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
