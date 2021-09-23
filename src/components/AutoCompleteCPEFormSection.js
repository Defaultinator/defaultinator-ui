import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import useAxios from "axios-hooks";
import { API_URI } from '../config/constants';

import {
  Grid,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const CPEFormAutocompleteItem = ({ field, setField, fieldName, queryParams }) => {
  const [open, setOpen] = useState(false);
  const [fieldText, setFieldText] = useState('');
  const [{ data = [], loading }, executeRequest] = useAxios(
    {
      url: `${API_URI}/dictionary/typeahead`,
    },
    {
      manual: true
    });

  useEffect(() => {
    if (open) {
      const myParams = { ...queryParams };
      delete myParams[fieldName];
      const delayRequest = setTimeout(() => {
        executeRequest({
          params: {
            field: fieldName,
            prefix: fieldText,
            ...myParams,
          }
        }).catch(() => { });
      }, 300);

      return () => clearTimeout(delayRequest);
    }
  }, [fieldText, fieldName, executeRequest, open, queryParams]);

  return (
    <Autocomplete
      freeSolo
      id={`${fieldName}-select`}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onBlur={() => setField({ _id: fieldText })}
      options={(!(data.find((item) => item._id === fieldText) || fieldText === '')) ? [{ _id: fieldText }, ...data] : data}
      value={field}
      onChange={(event, newValue) => setField(newValue)}
      inputValue={fieldText}
      onInputChange={(event, newInputValue) => {
        setFieldText(newInputValue);
      }}
      getOptionLabel={(option) => option._id || ""}
      filterOptions={(x) => x}
      renderInput={(params) => (
        <TextField
          {...params}
          label={`${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`}
          variant={"outlined"}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="secondary" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export const AutoCompleteCPEFormSection = ({fields, setFields}) => {
  const [vendor, setVendor] = useState('');
  const [product, setProduct] = useState('');
  const [version, setVersion] = useState('');

  useEffect(() => {
    setFields((q) => {
      let newParams = { ...q };
      delete newParams.vendor;
      return ({
        ...newParams,
        ...(vendor?._id && { vendor: vendor._id }),
      });
    });
  }, [vendor, setFields]);

  useEffect(() => {
    setFields((q) => {
      let newParams = { ...q };
      delete newParams.product;
      return ({
        ...newParams,
        ...(product?._id && { product: product._id }),
      });
    });
  }, [product, setFields]);

  useEffect(() => {
    setFields((q) => {
      let newParams = { ...q };
      delete newParams.version;
      return ({
        ...newParams,
        ...(version?._id && { version: version._id }),
      });
    });
  }, [version, setFields]);

  return (
    <Grid container spacing={3}>
      <Grid item sm={4}>
        <Autocomplete
          id={"part-select"}
          options={['a', 'o', 'h']}
          renderInput={(params) => <TextField {...params} label={"Part"} variant={"outlined"} />}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <CPEFormAutocompleteItem field={vendor} setField={setVendor} fieldName={'vendor'} queryParams={fields} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CPEFormAutocompleteItem field={product} setField={setProduct} fieldName={'product'} queryParams={fields} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CPEFormAutocompleteItem field={version} setField={setVersion} fieldName={'version'} queryParams={fields} />
      </Grid>
    </Grid>
  );
};

AutoCompleteCPEFormSection.propTypes = {
  fields: PropTypes.shape({
    vendor: PropTypes.string,
    product: PropTypes.string,
    version: PropTypes.string
  }).isRequired,
  setFields: PropTypes.func.isRequired,
};

AutoCompleteCPEFormSection.defaultProps = {
};

export default AutoCompleteCPEFormSection;