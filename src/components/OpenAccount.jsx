import React, { useEffect, useState } from "react";
import CustomerIdentity from "./openAccount/CustomerIdentity";
import CustomerContact from "./openAccount/CustomerContact";
import AccountingBook from "./openAccount/AccountingBook";
import Description from "./openAccount/Description";
import ResponsiveAppBar from "./navbar/Navbar";
import { URLS } from "../URLS";
import { IdentityContext } from "./openAccount/IdentityContextState";
import { ContactContext } from "./openAccount/ContactContextState";
import { DescriptionContext } from "./openAccount/DescriptionContextState";

function OpenAccount() {
  const [identityState, setIdentityState] = useState([
    {
      FullName: "",
      CustomerType: "",
      Nationality: "",
      FatherName: "",
      IdentityCardType: "",
      issuePlace: "",
      IdentityCode: 0,
      CardExpiration: new Date(),
      Birthday: new Date(),
      TaxValueNumber: 0,
    },
  ]);

  const [contactState, setContactState] = useState({
    MobilePhone: "",
    LandingPhone: "",
    Email: "",
    Country: "",
    City: "",
    Address: "",
    PostalCode: 0,
    Limting: false,
    AllowedAmountCurrency: 0,
    grouping: "",
  });

  const [descriptionState, setDescriptionState] = useState({
    Description: "",
    CreatedAt: new Date(),
    LastUpdate: new Date(),
    IsActive: false,
    AccountNumber: 0,
  });

  useEffect(() => {
    document.title = "افتتاح حساب مشتری";
  }, []);

  const resetForm = () => {
    setIdentityState({
      FullName: "",
      CustomerType: identityState.CustomerType[0],
      Nationality: "",
      FatherName: "",
      IdentityCardType: "",
      issuePlace: "",
      IdentityCode: 0,
      CardExpiration: new Date(),
      Birthday: new Date(),
      TaxValueNumber: 0,
    });

    setContactState({
      MobilePhone: "",
      LandingPhone: "",
      Email: "",
      Country: "",
      City: "",
      Address: "",
      PostalCode: "", // Update to empty string
      Limting: false,
      AllowedAmountCurrency: 0,
      grouping: "",
    });

    setDescriptionState({
      Description: "",
      CreatedAt: new Date(),
      LastUpdate: new Date(),
      IsActive: false,
      AccountNumber: 0,
    });
  };

  const createClick = () => {
    // const data = {
    //   CustomerType: "حقیقی",
    //   OrganizationId: 0,
    //   FullName: "سعید",
    //   Nationality: "string",
    //   FatherName: "string",
    //   IdentityCardType: "string",
    //   issuePlace: "string",
    //   IdentityCode: 0,
    //   CardExpiration: "2023-07-01T10:50:55.98",
    //   Birthday: "2023-07-01T10:50:55.98",
    //   TaxValueNumber: 0,
    //   Country: "string",
    //   City: "string",
    //   Address: "string",
    //   PostalCode: 0,
    //   Limting: true,
    //   AllowedAmountCurrency: 0,
    //   grouping: "string",
    //   Description: "string",
    //   Email: "user@example.com",
    //   MobilePhone: "09126048610",
    //   LandingPhone: "09126048610",
    //   CreatedAt: "2023-07-01T10:50:55.98",
    //   LastUpdate: "2023-07-01T10:50:55.98",
    //   IsActive: true,
    //   AccountNumber: 0,
    // };

    // fetch("https://localhost:7124/api/customer", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(`${URLS.API_URL}customer`);
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    const requestBody = {
      // identity:
      FullName: identityState.FullName,
      CustomerType: identityState.CustomerType,
      Nationality: identityState.Nationality,
      FatherName: identityState.FatherName,
      IdentityCardType: identityState.IdentityCardType,
      issuePlace: identityState.issuePlace,
      CardExpiration: identityState.CardExpiration,
      IdentityCode: identityState.IdentityCode,
      Birthday: identityState.Birthday,
      TaxValueNumber: identityState.TaxValueNumber,
      // contact
      MobilePhone: contactState.MobilePhone,
      LandingPhone: contactState.LandingPhone,
      Email: contactState.Email,
      Country: contactState.Country,
      City: contactState.City,
      Address: contactState.Address,
      PostalCode: contactState.PostalCode,
      Limting: contactState.Limting,
      AllowedAmountCurrency: contactState.AllowedAmountCurrency,
      grouping: contactState.grouping,
      // description
      Description: descriptionState.Description, // because in back-end the name is Description
    };

    fetch('https://localhost:7124/api/customer', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          console.log(`${URLS.API_URL}customer`);
          console.log(identityState.FullName);
        },
        (error) => {
          alert("Failed!!!");
        }
      );
      resetForm();
  };

  return (
    <IdentityContext.Provider value={[identityState, setIdentityState]}>
      <ContactContext.Provider value={[contactState, setContactState]}>
        <DescriptionContext.Provider
          value={[descriptionState, setDescriptionState]}
        >
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
                // data-bs-toggle="modal"
                // data-bs-target="#exampleModal"
                onClick={createClick}
              >
                افزودن مشتری
              </button>
            </div>
          </div>
        </DescriptionContext.Provider>
      </ContactContext.Provider>
    </IdentityContext.Provider>
  );
}
export default OpenAccount;
