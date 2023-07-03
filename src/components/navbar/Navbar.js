import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-right ">
            <div className="container-fluid ustify-content-end">
                <a className="navbar-brand" href="#">حسابان</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav">
                        <li className="nav-item active"> <a className="nav-link " href="#">خروج از سیستم</a> </li>
                        <li className="nav-item dropdown" id="myDropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">سرویس ها</a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li> <a className="dropdown-item" href="#">&laquo;    سرویس موبایل </a>
                                    <ul className="submenu dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="#">اخبار جدید</a></li>
                                        <li><a className="dropdown-item" href="#">فعالسازی ورود مشتری</a></li>
                                        <li><a className="dropdown-item" href="#">تنظیمات سرویس</a></li>
                                    </ul>
                                </li>
                                <li> <a className="dropdown-item" href="#">&laquo;    سرویس پیام رسانی </a>
                                    <ul className="submenu dropdown-menu dropdown-menu-end messaging-service">
                                        <li><a className="dropdown-item" href="#">تنظیمات سرویس</a></li>
                                        <li><a className="dropdown-item" href="#">تاریخچه ارسال</a></li>
                                        <li><a className="dropdown-item" href="#">ارسال پیام</a></li>
                                        <li><a className="dropdown-item" href="#">ارسال مانده حسابها</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="#">Email</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown" id="myDropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">مدیریت سیستم</a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li> <a className="dropdown-item" href="#">  &laquo;      مدیریت کل</a>
                                    <ul className="submenu dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="#">مشخصات شرکت</a></li>
                                        <li><a className="dropdown-item" href="#">افتتاح سال مالی جدید</a></li>
                                        <li><a className="dropdown-item" href="#">ارزهای عملیاتی</a></li>
                                        <li><a className="dropdown-item" href="#">Trading View Rates</a></li>
                                        <li><a className="dropdown-item" href="#">امینت ارتباط</a></li>
                                        <li><a className="dropdown-item" href="#">دوره های مالی</a></li>
                                        <li><a className="dropdown-item border-down" href="#">حسابهای محرمانه</a></li>
                                        <li><a className="dropdown-item border-down" href="#">(Back-up) فایل پشتیبان </a></li>
                                        <li><a className="dropdown-item disabled" href="#">فعالسازی (لایسنس)</a></li>
                                        <li><a className="dropdown-item" href="#">اتصالات دیتابیس</a></li>
                                        <li><a className="dropdown-item border-down" href="#">جلسات کاری</a></li>
                                        <li><a className="dropdown-item" href="#">تغییر زیان سیستم</a></li>
                                        <li><a className="dropdown-item" href="#">Google Authenticator</a></li>
                                    </ul>
                                </li>
                                <li> <a className="dropdown-item " href="#">&laquo;    مدیریت شعبه</a>
                                    <ul className="submenu dropdown-menu dropdown-menu-end branch-management">
                                        <li><a className="dropdown-item" href="#">تنظیمات شعبه</a></li>
                                        <li><a className="dropdown-item" href="#">کاربران شعبه</a></li>
                                        <li><a className="dropdown-item" href="#">تاریخ و ساعت</a></li>
                                        <li><a className="dropdown-item" href="#">تاییدیه فکس های دریافتی</a></li>
                                        <li><a className="dropdown-item" href="#">شماره گذاری حوالجات</a></li>
                                        <li><a className="dropdown-item" href="#">تنظیمات ارتباط بین شعب</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="#">تغییر پسوورد</a></li>
                                <li><a className="dropdown-item" href="#">کشورها و شهرها</a></li>
                                <li> <a className="dropdown-item" href="#">سند ورود حسابها به سیستم</a></li>
                                <li> <a className="dropdown-item" href="#">&laquo;    شخصی سازی</a>
                                    <ul className="submenu dropdown-menu dropdown-menu-end personalization">
                                        <li><a className="dropdown-item" href="#">تصویر پس زمینه</a></li>
                                        <li> <a className="dropdown-item " href="#">&laquo;    تغییر پوسته نرم افزار </a>
                                            <ul className="submenu dropdown-menu dropdown-menu-end branch-management">
                                                <li><a className="dropdown-item" href="#">classic </a></li>
                                                <li><a className="dropdown-item" href="#">default </a></li>
                                                <li><a className="dropdown-item" href="#">blue</a></li>
                                                <li><a className="dropdown-item" href="#">gray</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="#">شخصی سازی تولبار</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown" id="myDropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">گزارش ها</a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li> <a className="dropdown-item" href="#">دفتر کل</a></li>
                                <li> <a className="dropdown-item" href="#">دفتر روزانه</a></li>
                                <li> <a className="dropdown-item" href="#">خلاصه معاملات ارزی</a></li>
                                <li> <a className="dropdown-item" href="#">سود روزانه ارز فروخته شده</a></li>
                                <li> <a className="dropdown-item" href="#">&laquo;   سود و زیان  </a>
                                    <ul className="submenu dropdown-menu dropdown-menu-end benefit-loss">
                                        <li><a className="dropdown-item" href="#">سود و زیان کلی</a></li>
                                        <li><a className="dropdown-item" href="#">سود و زیان ماهانه</a></li>
                                        <li><a className="dropdown-item" href="#">گزارش تقسیم سود و زیان بین شرکا</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="#">سرمایه</a></li>
                                <li><a className="dropdown-item" href="#">تراز آزمایشی</a></li>
                                <li><a className="dropdown-item" href="#">تراز نامه</a></li>
                                <li> <a className="dropdown-item" href="#">&laquo;   بدهکاران و بستانکاران  </a>
                                    <ul className="submenu dropdown-menu dropdown-menu-end debtors-creditors">
                                        <li><a className="dropdown-item" href="#">لیست بدهکاران و بستانکاران</a></li>
                                        <li><a className="dropdown-item" href="#">مجموع بدهکاران و بستانکاران</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="#">تغییرات مانده حسابها</a></li>
                                <li><a className="dropdown-item" href="#">لیست مشتریان</a></li>
                                <li><a className="dropdown-item" href="#">گزارش هزینه ها و درآمد</a></li>
                                <li><a className="dropdown-item border-down" href="#">مانده حسابهای مرتبط</a></li>
                                <li><a className="dropdown-item" href="#">دریافت و پرداخت های روزانه</a></li>
                                <li><a className="dropdown-item border-down" href="#">مانده بانک ها و صندوق ها</a></li>
                                <li><a className="dropdown-item" href="#">گزارش عملکرد نمایندگان</a></li>
                                <li><a className="dropdown-item" href="#">گزارش فعالیت کاربران</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown " id="myDropdown">
                            <a className="nav-link dropdown-toggle disabled " href="#" data-bs-toggle="dropdown">عملیات نفت</a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li> <a className="dropdown-item" href="#">آیتم درون‌ریزی ۱</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown" id="myDropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">پروسه ها</a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li> <a className="dropdown-item" href="#">داشبورد کاربر</a></li>
                                <li> <a className="dropdown-item" href="#">لیست معاملات روزانه</a></li>
                                <li> <a className="dropdown-item" href="#">صورت حساب</a></li>
                                <li> <a className="dropdown-item" href="#">مانده حساب</a></li>
                                <li> <a className="dropdown-item" href="#">چک های دریافتی</a></li>
                                <li> <a className="dropdown-item" href="#">&laquo;    چک های پرداختی </a>
                                    <ul className="submenu dropdown-menu dropdown-menu-end payed-cheque">
                                        <li><a className="dropdown-item" href="#">چکهای صادر شده</a></li>
                                        <li><a className="dropdown-item" href="#">وضعیت دسته چک ها</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="#">بازبینی اسناد</a></li>
                                <li><a className="dropdown-item" href="#">لیست دستورات پرداخت</a></li>
                                <li><a className="dropdown-item" href="#">پرداخت های به جای ما</a></li>
                                <li><a className="dropdown-item" href="#">TT حواله های </a></li>
                                <li><a className="dropdown-item border-down" href="#">Pending Vouchers</a></li>
                                <li> <a className="dropdown-item" href="#">&laquo;      صدور حواله ها </a>
                                    <ul className="submenu dropdown-menu dropdown-menu-end issue-list">
                                        <li><a className="dropdown-item" href="#">صدور لیست جدید</a></li>
                                        <li><a className="dropdown-item" href="#">لیستهای صادر شده</a></li>
                                    </ul>
                                </li>
                                <li> <a className="dropdown-item border-down" href="#">&laquo;      دریافت حواله ها </a>
                                    <ul className="submenu dropdown-menu dropdown-menu-end recieve-list">
                                        <li><a className="dropdown-item" href="#">دریافت لیست حدید</a></li>
                                        <li><a className="dropdown-item" href="#">لیست های دریافت شده</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="#">حواله های ارسالی</a></li>
                                <li><a className="dropdown-item border-down" href="#">حواله های دریافتی</a></li>
                                <li><a className="dropdown-item" href="#">واریزهای بانکی مشتریان</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown" id="myDropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">سند جدید</a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li> <a className="dropdown-item" href="#">نقد و چک</a></li>
                                <li> <a className="dropdown-item" href="#">عملیات بانکی</a></li>
                                <li> <a className="dropdown-item" href="#">انتقال به حساب</a></li>
                                <li> <a className="dropdown-item border-down" href="#">انتقال (پرداخت به جای ما)</a></li>
                                <li> <a className="dropdown-item" href="#">خرید و فروش</a></li>
                                <li> <a className="dropdown-item" href="#">خریپ و فروش دوگانه</a></li>
                                <li> <a className="dropdown-item" href="#">ارسال حواله</a></li>
                                <li> <a className="dropdown-item" href="#">دریافت حواله</a></li>
                                <li> <a className="dropdown-item" href="#">(TT) ارسال حواله </a></li>
                                <li> <a className="dropdown-item border-down" href="#">خرید و فروش نقدی</a></li>
                                <li> <a className="dropdown-item" href="#">سند روزنامه</a></li>
                                <li> <a className="dropdown-item" href="#">دستور پرداخت</a></li>
                                <li> <a className="dropdown-item" href="#">کمیسیون همکار</a></li>
                                <li> <a className="dropdown-item border-down disabled" href="#" >خرید و فروش دوگانه نفت</a></li>
                                <li> <a className="dropdown-item" href="#">خرید و فروش طلا</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown" id="myDropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">معرفی ها</a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li> <a className="dropdown-item" href="#">&laquo;   حساب جدید </a>
                                    <ul className="submenu dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="#">مشتری</a></li>
                                        <li><a className="dropdown-item" href="#">صرافی</a></li>
                                        <li><a className="dropdown-item" href="#">بانک</a></li>
                                        <li><a className="dropdown-item" href="#">صندوق کاربر</a></li>
                                        <li><a className="dropdown-item" href="#">خزانه</a></li>
                                        <li><a className="dropdown-item" href="#">سایر حسابها</a></li>
                                        <li><a className="dropdown-item" href="#">کارکنان و کارمندان</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="#">دسته چک جدید </a></li>
                                <li><a className="dropdown-item" href="#">گروه بندی مشتریان</a></li>
                                <li><a className="dropdown-item" href="#">نرخ های پیش فرض</a></li>
                                <li><a className="dropdown-item" href="#">حسابهای مرتبط</a></li>
                            </ul>
                        </li>
                        <li className="nav-item active"> <a className="nav-link " href="#">داشبورد کاربر</a> </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;