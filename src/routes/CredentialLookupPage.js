import React from 'react';
import {
  useParams,
} from "react-router-dom";
import CredentialDetails from "../components/CredentialDetails";

const CredentialLookupPage = () => {
  let { vendorId, productId } = useParams();

  return(
    <div>
      <CredentialDetails vendorId={vendorId} productId={productId}/>
    </div>
  );
};

export default CredentialLookupPage;
