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
      fullName: "",
      kindOfCustomer: "",
      nationality: "",
      fatherName: "",
      typeOfIdentityCode: "",
      placeOfIssue: "",
      identityCode: 0,
      cardExpirationDate: new Date(),
      birthDay: new Date(),
      valueTaxNumber: 0,
    },
  ]);

  const [contactState, setContactState] = useState({
    mobilePhone: "",
    landingPhone: "",
    email: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    paymentLimit: null,
    allowedAmountOfReference: "",
    grouping: "",
  });

  const [descriptionState, setDescriptionState] = useState("");

  useEffect(() => {
    document.title = "افتتاح حساب مشتری";
  }, []);

  const createClick = () => {
    fetch(`${URLS.API_URL}customer`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // //identity:
        fullName: identityState.fullName,
        kindOfCustomer: identityState.kindOfCustomer,
        nationality: identityState.nationality,
        fatherName: identityState.fatherName,
        typeOfIdentityCode: identityState.typeOfIdentityCode,
        placeOfIssue: identityState.placeOfIssue,
        cardExpirationDate: identityState.cardExpirationDate,
        identityCode: identityState.identityCode,
        birthDay: identityState.birthDay,
        valueTaxNumber: identityState.valueTaxNumber,
        // contact
        mobilePhone: contactState.mobilePhone,
        landingPhone: contactState.landingPhone,
        email: contactState.email,
        country: contactState.country,
        city: contactState.city,
        address: contactState.address,
        postalCode: contactState.postalCode,
        paymentLimit: contactState.paymentLimit,
        allowedAmountOfReference: contactState.allowedAmountOfReference,
        grouping: contactState.grouping,
        // description
        descriptionState: descriptionState
      }),
    })
      .then((res) => res.json)
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  };

  return (
    <IdentityContext.Provider value={[identityState, setIdentityState]}>
      <ContactContext.Provider value={[contactState, setContactState]}>
        <DescriptionContext.Provider value={[descriptionState, setDescriptionState]}>
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
        </DescriptionContext.Provider>
      </ContactContext.Provider>
    </IdentityContext.Provider>
  );
}

export default OpenAccount;
