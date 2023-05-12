
import React, { useState, useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "react-date-picker2";
import "react-date-picker/dist/DatePicker.css";
import "./persian-datepicker.css";
import "persian-datepicker/dist/css/persian-datepicker.css";



const CustomerIdentity = () => {
  useEffect(() => {
    document.title = "افتتاح حساب مشتری";
  }, []);

  const [state, setState] = useState({
    kindOfCustomer: "",
    fullName: "",
    fatherName: "",
    nationality: "",
    typeOfIdentityCode: "",
    placeOfIssue: "",
    identityCode: "",
    cardExpirationDate: null,
    dateOfBirth: "",
    valueTaxNumber: "",
    highlightDates: [],
  });

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
    if (!state.fullName) {
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

  const ChoosePersianCalendar = () => {
    const datePickerRef = useRef(null);

    const handleDateChange = (date) => {
      setState((prevState) => ({
        ...prevState,
        cardExpirationDate: date,
      }));
    };

    useEffect(() => {
      if (datePickerRef.current) {
        datePickerRef.current.inputField.focus();
      }
    }, []);

    return (
      <DatePicker
        ref={datePickerRef}
        calendarClassName="persian-calendar"
        onChange={handleDateChange}
        value={state.cardExpirationDate}
        inputPlaceholder="تاریخ"
        locale="fa"
        shouldHighlightWeekends
        shouldHighlightToday
        highlightDates={state.highlightDates}
        inputClassName="calendar-input"
      />
    );
  };

  return (
    <div className="row">
      <div className="col-lg-6 col-md-7 mx-auto">
        <div className="card border-primary shadow my-5">
          <div className="card-header border-bottom border-primary">
            <h4
              style={{ fontSize: "40px" }}
              className="text-primary text-center"
            >
              Register
            </h4>
            {/* <ul className="text-danger">
                {Object.keys(errors).map((element) => {
                  if (dirty[element]) {
                    return errors[element].map((err) => {
                      return (
                        <li key={err}>
                          {" "}
                          ERROR {dirty.key} :{err}
                        </li>
                      );
                    });
                  } else {
                    return "";
                  }
                })}
              </ul> */}
          </div>
          <div className="card-body border-primary">
            {/* kindOfCustomer || نوع مشتری */}
            <div dir="ltr" className="row mb-1">
              <div className="col-lg-4">
                <select
                  id="kindOfCustomer"
                  name="kindOfCustomer"
                  className="form-control"
                  value={state.kindOfCustomer}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                >
                  {kindOfCustomers.map((res) => (
                    <option key={"kindOfCustomer" + res.id} vlaue={res.id}>
                      {res.kind}
                    </option>
                  ))}
                </select>
              </div>

              <label className="col-lg-4" htmlFor="kindOfCustomer">
                نوع مشتری
              </label>
            </div>

            {/* fullName  || نام کامل */}
            <div className="row mb-1">
              <div className="col-lg-4">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="form-control"
                  value={state.fullName}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                  onBlur={(e) => {
                    setDirty({ ...dirty, [e.target.name]: true });
                    validate();
                  }}
                />
                <div className="text-danger">
                  {dirty["password"] && errors["password"][0]
                    ? errors["password"]
                    : ""}
                </div>
              </div>

              <label className="col-lg-4" htmlFor="password">
                نام کامل
              </label>
            </div>

            {/* fatherName || نام پدر */}
            <div className="row mb-1">
              <div className="col-lg-4">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="form-control"
                  value={state.fullName}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
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
              <label className="col lg-4" htmlFor="fatherName">
                نام پدر
              </label>
            </div>

            {/* nationality || ملیت  */}
            <div dir="ltr" className="row mb-1">
              <div className="col-lg-4">
                <select
                  id="nationality"
                  name="nationality"
                  className="form-control"
                  value={state.nationality}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                >
                  {nationalities.map((res) => (
                    <option key={"nationality" + res.id} vlaue={res.id}>
                      {res.countryName}
                    </option>
                  ))}
                </select>
              </div>

              <label className="col-lg-4" htmlFor="kindOfCustomer">
                ملیت
              </label>
            </div>

            {/* typeOfIdentityCode || نوع کدشناسایی */}
            <div dir="ltr" className="row mb-1">
              <div className="col-lg-4">
                <select
                  id="typeOfIdentityCode"
                  name="typeOfIdentityCode"
                  className="form-control"
                  value={state.typeOfIdentityCode}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                >
                  {typesOfIdentityCode.map((res) => (
                    <option key={"typeOfIdentityCode" + res.id} vlaue={res.id}>
                      {res.type}
                    </option>
                  ))}
                </select>
              </div>

              <label className="col-lg-4" htmlFor="typeOfIdentityCode">
                نوع کد شناسایی
              </label>
            </div>

            {/* placeOfIssue || محل صدور  */}
            <div dir="ltr" className="row mb-1">
              <div className="col-lg-4">
                <select
                  id="placeOfIssue"
                  name="placeOfIssue"
                  className="form-control"
                  value={state.placeOfIssue}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                >
                  {placesOfIssue.map((res) => (
                    <option key={"nationality" + res.id} vlaue={res.id}>
                      {res.countryName}
                    </option>
                  ))}
                </select>
              </div>

              <label className="col-lg-4" htmlFor="placeOfIssue">
                محل صدور
              </label>
            </div>

            {/* identityCode || کد شناساسس */}
            <div className="row mb-1">
              <div className="col-lg-4">
                <input
                  id="identityCode"
                  name="identityCode"
                  type="text"
                  className="form-control"
                  value={state.identityCode}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <label className="col lg-4" htmlFor="identityCode">
                کد شناسایی
              </label>
            </div>

            {/* cardExpirationDate || انقضای کارت */}
            <div className="row mb-3">
              <button
                className="btn btn-primary calendar-button"
                onClick={ChoosePersianCalendar}
              >
                شمسی
              </button>

              <div className="col-lg-3 ">
                <input
                  id="cardExpirationDate"
                  name="cardExpirationDate"
                  type="date"
                  className="form-control"
                  value={state.cardExpirationDate}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <label className="col-lg-4" htmlFor="cardExpirationDate">
                انقضای کارت
              </label>
            </div>

            {/* Gender */}
            <div className="row mb-3">
              <label className="col-lg-4">Gender</label>
              <div className="col-lg-8">
                <div className="form-check">
                  <input
                    name="gender"
                    type="radio"
                    value="male"
                    id="male"
                    className="form-check-input"
                    checked={state.gender === "male" ? true : false}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.value })
                    }
                  />
                  <label htmlFor="male" className="form-check-inline">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    name="gender"
                    type="radio"
                    value="female"
                    id="female"
                    className="form-check-input"
                    checked={state.gender === "female" ? true : false}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.value })
                    }
                  />
                  <label htmlFor="female" className="form-check-inline">
                    Female
                  </label>
                </div>
                <div className="text-danger">
                  {dirty["gender"] && errors["gender"][0]
                    ? errors["gender"]
                    : ""}
                </div>
              </div>
            </div>

            {/* country */}
            <div className="row mb-3">
              <label className="col-lg-4 " htmlFor="country">
                Country
              </label>

              <div className="col-lg-8">
                <select
                  id="country"
                  name="country"
                  className="form-control"
                  value={state.country}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                >
                  {nationalities.map((res) => (
                    <option key={"countryItem" + res.id} vlaue={res.id}>
                      {res.countryName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* receive NewsLetters */}
            <div className="row mb-3">
              <label className="col-lg-4"></label>
              <div className="col-lg-8">
                <div className="form-check">
                  <input
                    name="receiveNewsLetters"
                    type="checkbox"
                    value="true"
                    id="receiveNewsLetters"
                    className="form-check-input"
                    checked={state.receiveNewsLetters === "true" ? true : false}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.value })
                    }
                  />
                  <label
                    htmlFor="receiveNewsLetters"
                    className="form-check-inline"
                  >
                    ReceiveNewsLetters
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/*footer*/}
          <div className="card-footer text-center">
            <div className="m-1">{message}</div>
            <div>
              <button className="btn btn-primary m-2" onClick={onRegisterClick}>
                Register
              </button>
            </div>
          </div>
          {/* end of footer */}
        </div>
      </div>
    </div>
  );
};

export default CustomerIdentity;
