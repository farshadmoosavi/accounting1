import React, { useEffect } from "react";

import CustomerIdentity from "./openAccount/CustomerIdentity";
import CustomerContact from "./openAccount/CustomerContact";

function OpenAccount() {
  // register for new customer

  useEffect(() => {
    document.title = "افتتاح حساب مشتری";
  }, []);

  return (
    <>
      <CustomerIdentity />
      <CustomerContact />
    </>
  );
}

export default OpenAccount;
