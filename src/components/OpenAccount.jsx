import React, { useEffect, useState } from "react";

import CustomerIdentity from "./openAccount/CustomerIdentity";
import CustomerContact from "./openAccount/CustomerContact";
import AccountingBook from "./openAccount/AccountingBook";
import Description from "./openAccount/Description";
import ResponsiveAppBar from "./navbar/Navbar";
import { URLS } from "../URLS";
function OpenAccount() {
  // register for new customer

  const [customer, setCustomer] = useState([
    {
      FullName: "",
      OrganizationId: 0,
      CustomerType: "",
      Nationality: "",
      FatherName: "",
      IdentityCardType: "",
      issuePlace: "",
      IdentityCode: 0,
      CardExpiration: new Date(),
      Birthday: new Date(),
      TaxValueNumber: 0,
      Country: "",
      City: "",
      Address: "",
      PostalCode: 0,
      Limting: false,
      AllowedAmountCurrency: 0,
      grouping: "",
      Description: ""
    }
  ]);

  useEffect(() => {
    document.title = "افتتاح حساب مشتری";
  }, []);

  const createClick = () => {
    fetch(`${URLS.API_URL}customer`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        FullName: customer.FullName,
        CustomerType: customer.CustomerType,
        Nationality: customer.Nationality,
        FatherName: customer.FatherName,
        IdentityCardType: customer.IdentityCardType,
        CardExpiration: customer.CardExpiration,
        Birthday: customer.Birthday,
        TaxValueNumber: customer.TaxValueNumber,
        Country: customer.Country,
        City: customer.City,
        Address: customer.Address,
        PostalCode: customer.PostalCode,
        Limting: customer.Limting,
        AllowedAmountCurrency: customer.AllowedAmountCurrency,
        grouping: customer.grouping,
        Description: customer.Description,
      })
  }).then(res => res.json)
      .then((result) => {
          alert(result);
      }, (error) => { alert("Failed") })
};

  
  return (
    <div>
      <ResponsiveAppBar />
      <div className="row open-account">
        <div className="col-lg-6 mini-double">
          <div className="row up">
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
      <div className="center">
        <button
          type="button"
          className="btn btn-primary m-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={createClick}
        >
          افزودن مشتری
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
