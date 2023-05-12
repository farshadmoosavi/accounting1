import React, { useEffect } from "react";

import CustomerIdentity from "./openAccount/CustomerIdentity";

function OpenAccount() {
  // register for new customer


  useEffect(() => {
    document.title = "افتتاح حساب مشتری";
  }, []);

  return (
   <CustomerIdentity/>
  );
}

export default OpenAccount;
