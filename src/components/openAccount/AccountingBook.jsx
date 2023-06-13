import React from "react";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { TableContainer } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const AccountingBook = () => {
  const [paymentLimits, setPaymentLimits] = useState([
    { id: 0, kind: "اعمال شود" },
    { id: 1, kind: "اعمال نشود" },
  ]);

  const [groupings, setgroupings] = useState([
    { id: 0, kind: "عادی" },
    { id: 1, kind: "ویژه" },
    { id: 2, kind: "خیلی ویژه" },
  ]);

  const [state, setState] = useState({
    accountNumber: "",
    accountState: "",
    email: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    paymentLimit: null,
    allowedAmountOfReference: "",
    grouping: "",
  });

  const columns = [
    { id: "name", label: "مانده بستانکار", minWidth: 70 },
    { id: "code", label: "مانده بدهکار", minWidth: 70, format: (value) => value.toLocaleString("en-US") },
    {
      id: "population",
      label: "ارز",
      minWidth: 70,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  function createData(name, code, population) {
    return { name, code, population };
  }

  const rows = [
    createData("India", 2357022, "€"),
    createData("China", 223499, 14035003651),
    createData("Italy", 6844958, 6048397340),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Noto Sans Arabic, Arial, sans-serif",
    },
  });

  return (
    <div className="customer justify-content-end">
      <div className="row">
        <div className=" ml-auto">
          <div className="card border-primary shadow">
            <div className="card-body border-primary">
              <h4 className="component-title">دفتر حساب</h4>
              {/* accountNumber  || شماره حساب */}
              <div className="row mb-2 form ">
                <div className="col-lg-2"></div>
                <div className="col-lg-7">
                  {/* <input
                    id="accountNumber"
                    name="accountNumber"
                    type="text"
                    className="form-control"
                    value={state.accountNumber}
                    onChange={(e) =>
                      setState({
                        ...state,
                        [e.target.name]: e.target.value,
                      })
                    }
                  /> */}
                </div>
                <label className="col-lg-3" htmlFor="accountNumber">
                  شماره حساب
                </label>
              </div>

              {/* accountState  || وضعیت حساب*/}
              <div className="row mb-2 form ">
                <div className="col-lg-2"></div>
                <div className="col-lg-7">
                  {/* <input
                    id="landingPhone"
                    name="landingPhone"
                    type="text"
                    className="form-control"
                    value={state.landingPhone}
                    onChange={(e) =>
                      setState({
                        ...state,
                        [e.target.name]: e.target.value,
                      })
                    }
                  /> */}
                </div>

                <label className="col-lg-3" htmlFor="accountState">
                  وضعیت حساب
                </label>
              </div>

              {/* email  || ایمیل*/}
              <div className="row mb-2 form">
                <div className="col-lg-2"></div>
                <div className="col-lg-7">
                  {/* <input
                    id="email"
                    name="email"
                    type="text"
                    className="form-control"
                    value={state.email}
                    onChange={(e) =>
                      setState({
                        ...state,
                        [e.target.name]: e.target.value,
                      })
                    }
                  /> */}
                </div>

                <label className="col-lg-3" htmlFor="email">
                  تاریخ افتتاح
                </label>
              </div>
              <hr className="blue-line" />
              {/* -------------------------------------------- */}
              <ThemeProvider theme={theme}>
                <Paper className="table-container">
                  <TableContainer
                    className="custom-table-container"
                    sx={{ maxHeight: 440 }}
                  >
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                      typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage="تعداد ردیف در هر صفحه:"
                  />
                </Paper>
              </ThemeProvider>
              {/* -------------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingBook;
