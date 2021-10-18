import React, {
    useEffect,
  } from 'react';
  import {
    useParams,
  } from "react-router-dom";
  import {
    Link, useHistory,
  } from 'react-router-dom';
  import useAxios from "axios-hooks";
  
  import { useConfirm } from "material-ui-confirm";
  import { useSnackbar } from "notistack";
  
  import { API_URI } from '../../config/constants';
  
  import APIKeyCard from '../../components/APIKeyCard';
  
  const ViewAPIKeyPage = () => {
    let { apiKeyId } = useParams();
    const history = useHistory();
    const confirm = useConfirm();
    const { enqueueSnackbar } = useSnackbar();
    const [{ data: apiKey, loading, error }] = useAxios(`${API_URI}/apikeys/${apiKeyId}`);
    
    const [
      , executeDelete
    ] = useAxios(
      {
        url: `${API_URI}/apikeys/${apiKeyId}`,
        method: 'DELETE'
      },
      { manual: true }
    );
  
    useEffect(() => {
      if (error) {
        console.log(error);
        enqueueSnackbar('There was an error loading the requested data.');
      }
    }, [error, enqueueSnackbar]);
  
    const handleDelete = () => {
      confirm({ description: "Are you sure you want to delete this entry?" })
        .then(() => {
          executeDelete()
            .then((res) => {
              if (res.status === 200) {
                enqueueSnackbar('API key deleted!');
                history.push(`/apikeys`);
              } else {
                enqueueSnackbar('There has been an error deleting this record.');
                console.log(res);
              }
            })
            .catch((err) => {
              enqueueSnackbar('There has been an error deleting this record.');
              console.log(err);
            });
        })
        .catch(() => {
  
        });
    };
  
    // TODO: Clean up or implement the extra params
    return (
      <>
        {!loading &&
          <APIKeyCard
            {...apiKey}
            primaryButtonText={'Edit'}
            primaryButtonProps={{ component: Link, to: `/apikeys/${apiKeyId}/edit` }}
            secondaryButtonText={'Delete'}
            secondaryButtonProps={{onClick:handleDelete}}
          />
        }
      </>
    );
  };
  
  export default ViewAPIKeyPage;