import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { useContext } from "react";
import { ContactContext } from "./ContactContextState";

const CustomerContact = () => {
  const [contactState, setContactState] = useContext(ContactContext);

  const [activeTab, setActiveTab] = useState("tab2");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const [nationalities, setnationalities] = useState([
    { id: 0, countryName: " (اختیاری) انتخاب کنید" },
    { id: 1, countryName: "ایران" },
    { id: 2, countryName: "چین" },
    { id: 3, countryName: "هندوستان" },
    { id: 4, countryName: "امارات متحده عربی" },
    { id: 5, countryName: "اتریش" },
    { id: 6, countryName: "استرالیا" },
    { id: 7, countryName: "ترکیه" },
    { id: 8, countryName: "افغانستان" },
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

  const [paymentLimits, setPaymentLimits] = useState([
    { id: 0, kind: " (اختیاری) انتخاب کنید" },
    { id: 1, kind: "اعمال شود" },
    { id: 2, kind: "اعمال نشود" },
  ]);

  const [groupings, setgroupings] = useState([
    { id: 0, kind: "انتخاب کنید (اختیاری)" },
    { id: 1, kind: "عادی" },
    { id: 2, kind: "ویژه" },
    { id: 3, kind: "خیلی ویژه" },
  ]);

  return (
    <div className="customer">
      <h4 className="component-title">تماس </h4>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === "tab1" ? "active" : ""}
            onClick={() => toggleTab("tab1")}
          >
            محدودیت سقف پرداخت
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={activeTab === "tab3" ? "active" : ""}
            onClick={() => toggleTab("tab3")}
          >
            تماس
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "tab2" ? "active" : ""}
            onClick={() => toggleTab("tab2")}
          >
            آدرس فعلی
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        {/* محدودیت سقف پرداخت */}
        <TabPane tabId="tab1">
          <div className="row">
            <div className=" ml-auto">
              {" "}
              {/*col-lg-4  col-md-7*/}
              <div className="card border-primary shadow">
                {/*my-3*/}
                <div className="card-body border-primary">
                  {/* اعمال محدودیت */}
                  <div className="row mb-1 form">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                      <select
                        id="Limting"
                        name="Limting"
                        className="form-control"
                        value={contactState.Limting}
                        defaultValue={paymentLimits[0].kind}
                        onChange={(e) =>
                          setContactState({
                            ...contactState,
                            [e.target.name]: e.target.value,
                          })
                        }
                      >
                        {paymentLimits.map((res) => (
                          <option
                            key={"Limiting" + res.id}
                            value={res.kind}
                            selected={res.id === 0}
                            disabled={res.id === 0}
                          >
                            {res.kind}
                          </option>
                        ))}
                      </select>
                    </div>

                    <label className="col-lg-3" htmlFor="paymentLimit">
                      اعمال محدودیت
                    </label>
                  </div>
                  {/* AllowedAmountCurrency  || مقدار مجاز به ارز مرجع */}
                  <div className="row mb-1 form">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                      <input
                        id="AllowedAmountCurrency"
                        name="AllowedAmountCurrency"
                        type="text"
                        placeholder="وارد کنید (اختیاری)"
                        style={{ textAlign: "right" }}
                        className="form-control"
                        value={
                          contactState.AllowedAmountCurrency === 0
                            ? ""
                            : contactState.AllowedAmountCurrency
                        }
                        onChange={(e) =>
                          setContactState({
                            ...contactState,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>

                    <label className="col-lg-3" htmlFor="AllowedAmountCurrency">
                      مقدار مجاز به ارز مرجع
                    </label>
                  </div>
                  {/* گروه بندی */}
                  <div className="row mb-1 form">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                      <select
                        id="grouping"
                        name="grouping"
                        className="form-control"
                        value={contactState.grouping}
                        onChange={(e) =>
                          setContactState({
                            ...contactState,
                            [e.target.name]: e.target.value,
                          })
                        }
                      >
                        {groupings.map((res) => (
                          <option
                            key={"grouping" + res.id}
                            value={res.kind}
                            selected={res.id === 0}
                            disabled={res.id === 0}
                          >
                            {res.kind}
                          </option>
                        ))}
                      </select>
                    </div>

                    <label className="col-lg-3" htmlFor="grouping">
                      گروه بندی
                    </label>
                  </div>
                  <div className="row mb-1 form">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>

        {/* آدرس فعلی */}
        <TabPane tabId="tab2">
          <div className="row">
            <div className="mx-auto">
              {/*col-lg-4  col-md-7*/}
              <div className="card border-primary shadow">
                {/*my-3*/}
                <div className="card-body border-primary">
                  {/* country  || کشور */}
                  <div className="row mb-1 form">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                      <select
                        id="Country"
                        name="Country"
                        className="form-control"
                        value={contactState.Country}
                        onChange={(e) =>
                          setContactState({
                            ...contactState,
                            [e.target.name]: e.target.value,
                          })
                        }
                      >
                        {nationalities.map((res, index) => (
                          <option
                            key={"Country" + res.id}
                            value={res.countryName}
                            selected={index === 0}
                            disabled={index === 0}
                          >
                            {res.countryName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <label className="col-lg-3" htmlFor="country">
                      کشور
                    </label>
                  </div>

                  {/* city  || شهر */}
                  <div className="row mb-1 form">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                      <input
                        id="City"
                        name="City"
                        type="text"
                        placeholder="وارد کنید (اختیاری)"
                        style={{ textAlign: "right" }}
                        className="form-control"
                        value={contactState.City}
                        onChange={(e) =>
                          setContactState({
                            ...contactState,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>

                    <label className="col-lg-3" htmlFor="City">
                      شهر
                    </label>
                  </div>

                  {/* address  || آدرس */}
                  <div className="row mb-1 form">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                      <input
                        id="Address"
                        name="Address"
                        type="text"
                        placeholder="وارد کنید (اختیاری)"
                        style={{ textAlign: "right" }}
                        className="form-control"
                        value={contactState.Address}
                        onChange={(e) =>
                          setContactState({
                            ...contactState,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>

                    <label className="col-lg-3" htmlFor="Address">
                      آدرس
                    </label>
                  </div>

                  {/* postalCode  || کدپستی */}
                  <div className="row mb-1 form">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                      <input
                        id="PostalCode"
                        name="PostalCode"
                        placeholder="وارد کنید (اختیاری)"
                        style={{ textAlign: "right" }}
                        type="text"
                        className="form-control"
                        value={
                          contactState.PostalCode === 0
                            ? ""
                            : contactState.PostalCode
                        }
                        onChange={(e) =>
                          setContactState({
                            ...contactState,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>

                    <label className="col-lg-3" htmlFor="PostalCode">
                      کد پستی
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        {/* تماس */}
        <TabPane tabId="tab3">
          <div className="row">
            <div className=" mx-auto">
              {/*col-lg-4  col-md-7*/}
              <div className="card border-primary shadow">
                {/*my-3*/}
                <div className="card-body border-primary">
                  {/* mobilePhoe  || موبایل */}
                  <div className="row mb-1 form">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                      <input
                        id="MobilePhone"
                        name="MobilePhone"
                        type="text"
                        placeholder="وارد کنید (اختیاری)"
                        style={{ textAlign: "right" }}
                        className="form-control"
                        value={contactState.MobilePhone}
                        onChange={(e) =>
                          setContactState({
                            ...contactState,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                    <label className="col-lg-3" htmlFor="MobilePhone">
                      موبایل
                    </label>
                  </div>

                  {/* landingPhone  || تلفن ثابت */}
                  <div className="row mb-1 form">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                      <input
                        id="LandingPhone"
                        name="LandingPhone"
                        type="text"
                        placeholder="وارد کنید (اختیاری)"
                        style={{ textAlign: "right" }}
                        className="form-control"
                        value={contactState.LandingPhone}
                        onChange={(e) =>
                          setContactState({
                            ...contactState,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>

                    <label className="col-lg-3" htmlFor="LandingPhone">
                      تلفن ثابت
                    </label>
                  </div>

                  {/* email  || ایمیل*/}
                  <div className="row mb-1 form">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                      <input
                        id="Email"
                        name="Email"
                        type="text"
                        placeholder="وارد کنید (اختیاری)"
                        style={{ textAlign: "right" }}
                        className="form-control"
                        value={contactState.Email}
                        onChange={(e) =>
                          setContactState({
                            ...contactState,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>

                    <label className="col-lg-3" htmlFor="Email">
                      ایمیل
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default CustomerContact;
