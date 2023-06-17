import React, { useEffect } from "react";

import CustomerIdentity from "./openAccount/CustomerIdentity";
import CustomerContact from "./openAccount/CustomerContact";
import AccountingBook from "./openAccount/AccountingBook";
import Description from "./openAccount/Description";
import ResponsiveAppBar from "./navbar/Navbar";
function OpenAccount() {
  // register for new customer

  useEffect(() => {
    document.title = "افتتاح حساب مشتری";
  }, []);
  return (
    <div>
      <ResponsiveAppBar/>
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
              <CustomerIdentity />
            </div>
          </div>
          <div>
            <Description />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
