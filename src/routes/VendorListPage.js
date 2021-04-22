import React from 'react';
import {
  useParams,
} from "react-router-dom";

import VendorTable from "../components/VendorTable";

const VendorListPage = () => {
  let { vendorId } = useParams();

  console.log(vendorId);

  return(
    <div>
      <VendorTable vendorId={vendorId} />
    </div>
  );
};

export default VendorListPage;
