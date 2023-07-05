import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { createContext } from "react";
import { IdentityContext } from "./IdentityContextState";
import { useContext } from "react";


const CustomerIdentity = ({ children }) => {
  useEffect(() => {
    document.title = "افتتاح حساب مشتری";
  }, []);
  const [identityState, setIdentityState] = useContext(IdentityContext);

  // const [identityState, setIdentityState] = useState({
  //   kindOfCustomer: "",
  //   fullName: "",
  //   fatherName: "",
  //   nationality: "",
  //   typeOfIdentityCode: "",
  //   placeOfIssue: "",
  //   identityCode: "",
  //   cardExpirationDate: null,
  //   birthDay: "",
  //   valueTaxNumber: "",
  // });

  const [errors, setErrors] = useState({
    fullName: [],
  });

  const [kindOfCustomers, setKindOfCustomers] = useState([
    { id: 0, kind: "حقیقی" },
    { id: 1, kind: "حقوقی" },
  ]);

  const [nationalities, setnationalities] = useState([
    { id: 0, countryName: "ایران" },
    { id: 1, countryName: "افغانستان" },
    { id: 2, countryName: "چین" },
    { id: 3, countryName: "هندوستان" },
    { id: 4, countryName: "امارات متحده عربی" },
    { id: 5, countryName: "اتریش" },
    { id: 6, countryName: "استرالیا" },
    { id: 7, countryName: "ترکیه" },
    { id: 8, countryName: "باهاما" },
    { id: 9, countryName: "بحرین" },
    { id: 10, countryName: "بنگلادش" },
    { id: 11, countryName: "کانادا" },
    { id: 12, countryName: "کامبوج" },
    { id: 13, countryName: "کامرون" },
    { id: 14, countryName: "هاییتی" },
    { id: 15, countryName: "ژاپن" },
    { id: 16, countryName: "جاماییکا" },
    { id: 17, countryName: "مالی" },
    { id: 18, countryName: "مالاوی" },
    { id: 19, countryName: "مالزی" },
    { id: 20, countryName: "مالدیو" },
    { id: 21, countryName: "مقدونیه" },
    { id: 22, countryName: "موریس" },
    { id: 23, countryName: "ماداگاسکار" },
    { id: 24, countryName: "موریتانی" },
    { id: 25, countryName: "مارشال" },
    { id: 26, countryName: "نامبیا" },
    { id: 27, countryName: "پاناما" },
    { id: 28, countryName: "پاکستان" },
    { id: 29, countryName: "پاراگوئه" },
    { id: 30, countryName: "قطر" },
    { id: 31, countryName: "سنت لوسیا" },
    { id: 32, countryName: "عربستان" },
    { id: 33, countryName: "تایوان" },
    { id: 34, countryName: "تانزانیا" },
    { id: 35, countryName: "تاجیکستان" },
    { id: 36, countryName: "واتیکان" },
    { id: 37, countryName: "زامبیا" },
    { id: 38, countryName: "اکوادور" },
    { id: 39, countryName: "آیسلند" },
    { id: 40, countryName: "بلژیک" },
    { id: 41, countryName: "بلاروس" },
    { id: 42, countryName: "آفریقای مرکزی" },
    { id: 43, countryName: "ای" },
    { id: 44, countryName: "دانمارک" },
    { id: 45, countryName: "گرجستان" },
    { id: 46, countryName: "آلمان" },
    { id: 47, countryName: "کنیا" },
    { id: 48, countryName: "لبنان" },
    { id: 49, countryName: "مکزیک" },
    { id: 50, countryName: "نپال" },
    { id: 51, countryName: "زلاندنو" },
    { id: 52, countryName: "هلند" },
    { id: 53, countryName: "پرو" },
    { id: 54, countryName: "سنگال" },
    { id: 55, countryName: "سریلانکا" },
    { id: 56, countryName: "ونزوئلا" },
    { id: 57, countryName: "یمن" },
    { id: 58, countryName: "مصر" },
    { id: 59, countryName: "چاد" },
    { id: 60, countryName: "شیلی" },
    { id: 61, countryName: "غنا" },
    { id: 62, countryName: "قیلیپین" },
    { id: 63, countryName: "تایلند" },
    { id: 64, countryName: "فنلاند" },
    { id: 65, countryName: "لیبی" },
    { id: 66, countryName: "لیتوانی" },
    { id: 67, countryName: "لیختن اشتاین" },
    { id: 68, countryName: "نیجریه" },
    { id: 69, countryName: "نیکاراگوئه" },
    { id: 70, countryName: "سنگاپور" },
    { id: 71, countryName: "ویتنام" },
    { id: 72, countryName: "زیمبابوه" },
    { id: 73, countryName: "جیبوتی" },
    { id: 74, countryName: "اوکراین" },
    { id: 75, countryName: "آلبانی" },
    { id: 76, countryName: "الجزایر" },
    { id: 77, countryName: "اسلوواکی" },
    { id: 78, countryName: "عمان" },
    { id: 79, countryName: "آنگولا" },
    { id: 80, countryName: "عمان" },
    { id: 81, countryName: "اندونزی" },
    { id: 82, countryName: "ایالات متحده آمریکا" },
    { id: 83, countryName: "بریتانیا" },
    { id: 84, countryName: "بولیوی" },
    { id: 85, countryName: "کلمبیا" },
    { id: 86, countryName: "کاستاریکا" },
    { id: 87, countryName: "هندوراس" },
    { id: 88, countryName: "اردن" },
    { id: 89, countryName: "مراکش" },
    { id: 90, countryName: "مغولستان" },
    { id: 91, countryName: "مونته نگرو" },
    { id: 100, countryName: "نروژ" },
    { id: 101, countryName: "کره شمالی" },
    { id: 102, countryName: "کره جنوبی" },
    { id: 103, countryName: "لهستان" },
    { id: 104, countryName: "پرتغال" },
    { id: 105, countryName: "رومانی" },
    { id: 106, countryName: "سومالی" },
    { id: 107, countryName: "آفریقای جنوبی" },
    { id: 108, countryName: "اسپانیا" },
    { id: 109, countryName: "ارمنستان" },
    { id: 110, countryName: "آرژانتین" },
    { id: 111, countryName: "برزیل" },
    { id: 112, countryName: "کرواسی" },
    { id: 113, countryName: "فرانسه" },
    { id: 114, countryName: "عراق" },
    { id: 115, countryName: "ایرلند" },
    { id: 116, countryName: "اوروگوئه" },
    { id: 117, countryName: "استونی" },
    { id: 118, countryName: "اتیوپی" },
    { id: 119, countryName: "ایتالیا" },
    { id: 120, countryName: "بلغارستان" },
    { id: 121, countryName: "بورکینافاسو" },
    { id: 122, countryName: "کوبا" },
    { id: 123, countryName: "گینه" },
    { id: 124, countryName: "گواتمالا" },
    { id: 125, countryName: "مجارستان" },
    { id: 126, countryName: "کویت" },
    { id: 127, countryName: "روسیه" },
    { id: 128, countryName: "لوکزامبورگ" },
    { id: 129, countryName: "روسیه" },
    { id: 130, countryName: "سودان" },
    { id: 131, countryName: "تونس" },
    { id: 132, countryName: "ترکمنستان" },
    { id: 133, countryName: "سوئد" },
    { id: 134, countryName: "سوئیس" },
    { id: 135, countryName: "قبرس" },
    { id: 136, countryName: "قرقیزستان" },
    { id: 137, countryName: "میانمار(برمه)" },
    { id: 138, countryName: "سوریه" },
    { id: 139, countryName: "آذربایجان" },
    { id: 140, countryName: "جمهوری چک" },
    { id: 141, countryName: "ازبکستان" },
    { id: 142, countryName: "صربستان" },
    { id: 143, countryName: "یونان" },
    { id: 144, countryName: "ساحل عاج" },
    { id: 145, countryName: "اسکاتلند" },
    { id: 146, countryName: "جزایر قناری" },
  ]);

  const [placesOfIssue, setPlacesOfIssue] = useState([
    { id: 0, countryName: "ایران" },
    { id: 1, countryName: "افغانستان" },
    { id: 2, countryName: "چین" },
    { id: 3, countryName: "هندوستان" },
    { id: 4, countryName: "امارات متحده عربی" },
    { id: 5, countryName: "اتریش" },
    { id: 6, countryName: "استرالیا" },
    { id: 7, countryName: "ترکیه" },
    { id: 8, countryName: "باهاما" },
    { id: 9, countryName: "بحرین" },
    { id: 10, countryName: "بنگلادش" },
    { id: 11, countryName: "کانادا" },
    { id: 12, countryName: "کامبوج" },
    { id: 13, countryName: "کامرون" },
    { id: 14, countryName: "هاییتی" },
    { id: 15, countryName: "ژاپن" },
    { id: 16, countryName: "جاماییکا" },
    { id: 17, countryName: "مالی" },
    { id: 18, countryName: "مالاوی" },
    { id: 19, countryName: "مالزی" },
    { id: 20, countryName: "مالدیو" },
    { id: 21, countryName: "مقدونیه" },
    { id: 22, countryName: "موریس" },
    { id: 23, countryName: "ماداگاسکار" },
    { id: 24, countryName: "موریتانی" },
    { id: 25, countryName: "مارشال" },
    { id: 26, countryName: "نامبیا" },
    { id: 27, countryName: "پاناما" },
    { id: 28, countryName: "پاکستان" },
    { id: 29, countryName: "پاراگوئه" },
    { id: 30, countryName: "قطر" },
    { id: 31, countryName: "سنت لوسیا" },
    { id: 32, countryName: "عربستان" },
    { id: 33, countryName: "تایوان" },
    { id: 34, countryName: "تانزانیا" },
    { id: 35, countryName: "تاجیکستان" },
    { id: 36, countryName: "واتیکان" },
    { id: 37, countryName: "زامبیا" },
    { id: 38, countryName: "اکوادور" },
    { id: 39, countryName: "آیسلند" },
    { id: 40, countryName: "بلژیک" },
    { id: 41, countryName: "بلاروس" },
    { id: 42, countryName: "آفریقای مرکزی" },
    { id: 43, countryName: "ای" },
    { id: 44, countryName: "دانمارک" },
    { id: 45, countryName: "گرجستان" },
    { id: 46, countryName: "آلمان" },
    { id: 47, countryName: "کنیا" },
    { id: 48, countryName: "لبنان" },
    { id: 49, countryName: "مکزیک" },
    { id: 50, countryName: "نپال" },
    { id: 51, countryName: "زلاندنو" },
    { id: 52, countryName: "هلند" },
    { id: 53, countryName: "پرو" },
    { id: 54, countryName: "سنگال" },
    { id: 55, countryName: "سریلانکا" },
    { id: 56, countryName: "ونزوئلا" },
    { id: 57, countryName: "یمن" },
    { id: 58, countryName: "مصر" },
    { id: 59, countryName: "چاد" },
    { id: 60, countryName: "شیلی" },
    { id: 61, countryName: "غنا" },
    { id: 62, countryName: "قیلیپین" },
    { id: 63, countryName: "تایلند" },
    { id: 64, countryName: "فنلاند" },
    { id: 65, countryName: "لیبی" },
    { id: 66, countryName: "لیتوانی" },
    { id: 67, countryName: "لیختن اشتاین" },
    { id: 68, countryName: "نیجریه" },
    { id: 69, countryName: "نیکاراگوئه" },
    { id: 70, countryName: "سنگاپور" },
    { id: 71, countryName: "ویتنام" },
    { id: 72, countryName: "زیمبابوه" },
    { id: 73, countryName: "جیبوتی" },
    { id: 74, countryName: "اوکراین" },
    { id: 75, countryName: "آلبانی" },
    { id: 76, countryName: "الجزایر" },
    { id: 77, countryName: "اسلوواکی" },
    { id: 78, countryName: "عمان" },
    { id: 79, countryName: "آنگولا" },
    { id: 80, countryName: "عمان" },
    { id: 81, countryName: "اندونزی" },
    { id: 82, countryName: "ایالات متحده آمریکا" },
    { id: 83, countryName: "بریتانیا" },
    { id: 84, countryName: "بولیوی" },
    { id: 85, countryName: "کلمبیا" },
    { id: 86, countryName: "کاستاریکا" },
    { id: 87, countryName: "هندوراس" },
    { id: 88, countryName: "اردن" },
    { id: 89, countryName: "مراکش" },
    { id: 90, countryName: "مغولستان" },
    { id: 91, countryName: "مونته نگرو" },
    { id: 100, countryName: "نروژ" },
    { id: 101, countryName: "کره شمالی" },
    { id: 102, countryName: "کره جنوبی" },
    { id: 103, countryName: "لهستان" },
    { id: 104, countryName: "پرتغال" },
    { id: 105, countryName: "رومانی" },
    { id: 106, countryName: "سومالی" },
    { id: 107, countryName: "آفریقای جنوبی" },
    { id: 108, countryName: "اسپانیا" },
    { id: 109, countryName: "ارمنستان" },
    { id: 110, countryName: "آرژانتین" },
    { id: 111, countryName: "برزیل" },
    { id: 112, countryName: "کرواسی" },
    { id: 113, countryName: "فرانسه" },
    { id: 114, countryName: "عراق" },
    { id: 115, countryName: "ایرلند" },
    { id: 116, countryName: "اوروگوئه" },
    { id: 117, countryName: "استونی" },
    { id: 118, countryName: "اتیوپی" },
    { id: 119, countryName: "ایتالیا" },
    { id: 120, countryName: "بلغارستان" },
    { id: 121, countryName: "بورکینافاسو" },
    { id: 122, countryName: "کوبا" },
    { id: 123, countryName: "گینه" },
    { id: 124, countryName: "گواتمالا" },
    { id: 125, countryName: "مجارستان" },
    { id: 126, countryName: "کویت" },
    { id: 127, countryName: "روسیه" },
    { id: 128, countryName: "لوکزامبورگ" },
    { id: 129, countryName: "روسیه" },
    { id: 130, countryName: "سودان" },
    { id: 131, countryName: "تونس" },
    { id: 132, countryName: "ترکمنستان" },
    { id: 133, countryName: "سوئد" },
    { id: 134, countryName: "سوئیس" },
    { id: 135, countryName: "قبرس" },
    { id: 136, countryName: "قرقیزستان" },
    { id: 137, countryName: "میانمار(برمه)" },
    { id: 138, countryName: "سوریه" },
    { id: 139, countryName: "آذربایجان" },
    { id: 140, countryName: "جمهوری چک" },
    { id: 141, countryName: "ازبکستان" },
    { id: 142, countryName: "صربستان" },
    { id: 143, countryName: "یونان" },
    { id: 144, countryName: "ساحل عاج" },
    { id: 145, countryName: "اسکاتلند" },
    { id: 146, countryName: "جزایر قناری" },
  ]);

  const [typesOfIdentityCode, setTypesOfIdentityCode] = useState([
    { id: 0, type: "ندارد" },
    { id: 1, type: "کارت ملی" },
    { id: 2, type: "کارت اقامت" },
    { id: 3, type: "گذرنامه" },
    { id: 4, type: "کارت کار" },
    { id: 5, type: "گواهینامه رانندگی" },
    { id: 6, type: "بیمه" },
    { id: 7, type: "کد ثبت" },
    { id: 8, type: "سایر" },
  ]);

  const validate = () => {
    let errorsData = {};

    //fullName
    errorsData.fullName = [];
    // fullName can't be blank
    if (!identityState.fullName) {
      errorsData.fullName.push("نام و نام خانوادگی را پر کنید.");
    }
  };

  const isValid = () => {
    let valid = true;
    for (let element in errors) {
      if (errors[element].length > 0) {
        valid = false;
      }
    }
    return valid;
  };

  const [dirty, setDirty] = useState({
    fullName: false,
  });

  const [message, setMessage] = useState();

  const onRegisterClick = async () => {
    let dirtyData = dirty;
    Object.keys(dirty).forEach((element) => {
      dirtyData[element] = true;
    });
  };

  const ChoosePersianCalendar = () => {};

  return (
      <div className="row identity">
        <div className=" col-md-8">
          <div className="card border-primary shadow">
            <div className="card-body border-primary">
              <h4 className="component-title">مشخصات مشتری</h4>
              {/* kindOfCustomer || نوع مشتری */}
              <div className="row mb-1">
                <div className="col-lg-9">
                  <select
                    id="kindOfCustomer"
                    name="kindOfCustomer"
                    className="form-control"
                    value={identityState.kindOfCustomer}
                    onChange={(e) =>
                      setIdentityState({ ...identityState, [e.target.name]: e.target.value })
                    }
                  >
                    {kindOfCustomers.map((res) => (
                      <option key={"kindOfCustomer" + res.id} vlaue={res.id}>
                        {res.kind}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="col-lg-3" htmlFor="kindOfCustomer">
                  <span style={{ color: "red" }}>*</span> نوع مشتری
                </label>
              </div>

              {/* fullName  || نام کامل */}
              <div className="row mb-1">
                <div className="col-lg-9">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="form-control"
                    value={identityState.fullName}
                    onChange={(e) =>
                      setIdentityState({ ...identityState, [e.target.name]: e.target.value })
                    }
                    onBlur={(e) => {
                      setDirty({ ...dirty, [e.target.name]: true });
                      validate();
                    }}
                  />
                  <div className="text-danger">
                    {dirty["fullName"] && errors["fullName"][0]
                      ? errors["fullName"]
                      : ""}
                  </div>
                </div>

                <label className="col-lg-3" htmlFor="fullName">
                  <span style={{ color: "red" }}>*</span> نام کامل
                </label>
              </div>

              {/* fatherName || نام پدر */}
              <div className="row mb-1 form">
                <div className="col-lg-9">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="form-control"
                    value={identityState.fullName}
                    onChange={(e) =>
                      setIdentityState({ ...identityState, [e.target.name]: e.target.value })
                    }
                    onBlur={(e) => {
                      setDirty({ ...dirty, [e.target.name]: true });
                      validate();
                    }}
                  />
                  <div className="text-danger">
                    {dirty["fullName"] && errors["fullName"][0]
                      ? errors["fullName"]
                      : ""}
                  </div>
                </div>
                <label className="col lg-3" htmlFor="fatherName">
                  نام پدر
                </label>
              </div>

              {/* nationality || ملیت  */}
              <div dir="ltr" className="row mb-1 form">
                <div className="col-lg-9">
                  <select
                    id="nationality"
                    name="nationality"
                    className="form-control"
                    value={identityState.nationality}
                    onChange={(e) =>
                      setIdentityState({ ...identityState, [e.target.name]: e.target.value })
                    }
                  >
                    {nationalities.map((res) => (
                      <option key={"nationality" + res.id} vlaue={res.id}>
                        {res.countryName}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="col-lg-3" htmlFor="kindOfCustomer">
                  ملیت
                </label>
              </div>

              {/* typeOfIdentityCode || نوع کدشناسایی */}
              <div dir="ltr" className="row mb-1 form">
                <div className="col-lg-9">
                  <select
                    id="typeOfIdentityCode"
                    name="typeOfIdentityCode"
                    className="form-control"
                    value={identityState.typeOfIdentityCode}
                    onChange={(e) =>
                      setIdentityState({ ...identityState, [e.target.name]: e.target.value })
                    }
                  >
                    {typesOfIdentityCode.map((res) => (
                      <option
                        key={"typeOfIdentityCode" + res.id}
                        vlaue={res.id}
                      >
                        {res.type}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="col-lg-3" htmlFor="typeOfIdentityCode">
                  نوع کد شناسایی
                </label>
              </div>

              {/* placeOfIssue || محل صدور  */}
              <div dir="ltr" className="row mb-1 form">
                <div className="col-lg-9">
                  <select
                    id="placeOfIssue"
                    name="placeOfIssue"
                    className="form-control"
                    value={identityState.placeOfIssue}
                    onChange={(e) =>
                      setIdentityState({ ...identityState, [e.target.name]: e.target.value })
                    }
                  >
                    {placesOfIssue.map((res) => (
                      <option key={"nationality" + res.id} vlaue={res.id}>
                        {res.countryName}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="col-lg-3" htmlFor="placeOfIssue">
                  محل صدور
                </label>
              </div>

              {/* identityCode || کد شناسایی */}
              <div className="row mb-1 form">
                <div className="col-lg-9">
                  <input
                    id="identityCode"
                    name="identityCode"
                    type="text"
                    className="form-control"
                    value={identityState.identityCode}
                    onChange={(e) =>
                      setIdentityState({ ...identityState, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <label className="col lg-3" htmlFor="identityCode">
                  کد شناسایی
                </label>
              </div>

              {/* cardExpirationDate || انقضای کارت */}
              <div className="row mb-1 form">
                <button
                  className="btn btn-primary calendar-button"
                  onClick={ChoosePersianCalendar}
                >
                  تاریخ شمسی
                </button>

                <div className="col-lg-7 ">
                  <input
                    id="cardExpirationDate"
                    name="cardExpirationDate"
                    type="date"
                    className="form-control"
                    value={identityState.cardExpirationDate}
                    onChange={(e) =>
                      setIdentityState({ ...identityState, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <label className="col-lg-3" htmlFor="cardExpirationDate">
                  انقضای کارت
                </label>
              </div>

              {/* birthDay || تاریخ تولد*/}
              <div className="row mb-1  form">
                <button
                  className="btn btn-primary calendar-button"
                  onClick={ChoosePersianCalendar}
                >
                  تاریخ شمسی
                </button>

                <div className="col-lg-7 ">
                  <input
                    id="birthDay"
                    name="birthDay"
                    type="date"
                    className="form-control"
                    value={identityState.birthDay}
                    onChange={(e) =>
                      setIdentityState({ ...identityState, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <label className="col-lg-3" htmlFor="birthDay">
                  تاریخ تولد
                </label>
              </div>

              {/* valueTaxNumber || شماره مالیاتی ارزش */}
              <div className="row mb-1 form">
                <div className="col-lg-9">
                  <input
                    id="valueTaxNumber"
                    name="valueTaxNumber"
                    type="text"
                    className="form-control"
                    value={identityState.valueTaxNumber}
                    onChange={(e) =>
                      setIdentityState({ ...identityState, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <label className="col lg-3" htmlFor="valueTaxNumber">
                  شماره مالیاتی ارزش
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CustomerIdentity;
