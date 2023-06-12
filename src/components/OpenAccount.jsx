import React, { useEffect } from "react";

import CustomerIdentity from "./openAccount/CustomerIdentity";
import CustomerContact from "./openAccount/CustomerContact";
import AccountingBook from "./openAccount/AccountingBook";
import Description from "./openAccount/Description";

function OpenAccount() {
  // register for new customer

  useEffect(() => {
    document.title = "افتتاح حساب مشتری";
  }, []);
  return (
    <div className="row open-account">
      <div className="col-lg-6 mini-double">
        <div className="row">
          <div className="col">
            <CustomerContact />
          </div>
          <div className="col">
            <AccountingBook />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="row">
          <div className="col">
            <CustomerIdentity style={{ width: "100%" }} />
          </div>
        </div>
        <div style={{ width: "29.8rem", height: "1rem" }}>
          <Description />
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
