import React from 'react';
import {
  useParams,
} from "react-router-dom";

import VendorTable from "../components/VendorTable";

const VendorListPage = () => {
  let { vendorId } = useParams();

  return(
    <div>
      <VendorTable vendorId={vendorId} />
    </div>
  );
};

export default VendorListPage;
