import React from 'react';
import {
  useParams,
} from "react-router-dom";

import ProductsByVendorTable from "../components/ProductsByVendorTable";

const ProductsByVendorPage = () => {
  let { vendorId } = useParams();

  return(
    <div>
      <ProductsByVendorTable vendorId={vendorId} />
    </div>
  );
};

export default ProductsByVendorPage;
