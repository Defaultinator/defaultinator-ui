import React from 'react';
import {
  useParams,
} from "react-router-dom";
import CredentialDetails from "../../components/CredentialDetails";

const CredentialLookupPage = () => {
  let { credentialId } = useParams();

  return(
    <div>
      <CredentialDetails credentialId={credentialId} />
    </div>
  );
};

export default CredentialLookupPage;
