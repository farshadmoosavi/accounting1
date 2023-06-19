import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Fragment } from 'react';

const pages = ['خروج از سیستم', 'سرویس ها', 'مدیریت سیستم', 'گزارش ها', 'پروسه ها', 'سند جدید', 'معرفی ها'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const defaultTheme = createTheme({
        typography: {
            fontFamily: '"Noto Sans Arabic", sans-serif',
        },
    });

    // creating sub menu for معرفی = Introduction
    const subMenuIntroductions = ['حساب جدید', 'دسته چک جدید', 'گروه بندی مشتریان', 'نرخ های پیش فرض', 'حساب های مرتبط'];
    const [anchorElSubMenuIntroduction, setAnchorElSubMenuIntroduction] = useState(null);
    const handleCloseSubMenuIntroduction = () => {
        setAnchorElSubMenuIntroduction(null);
    };
    const handleOpenSubMenuIntroduction = (event) => {
        setAnchorElSubMenuIntroduction(event.currentTarget);
    };

    //  creating sub menu for سند جدید = newDocument
    const subMenuNewDocument = ['نقد و چک', 'عملیات بانکی', 'انتقال به حساب', 'انتقال (پرداخت به جای ما)', 'خرید و فروش',
        'خرید و فروش دوگانه', 'ارسال حواله', 'دریافت حواله', 'TTارسال حواله', 'خرید و فروش نقدی', 'سند روزنامه', 'دستور پرداخت', 'کمیسیون همکار', 'خرید و فروش دوگانه نفت', 'خرید و فروش طلا'];
    const [anchorElSubMenuNewDocument, setAnchorElSubMenuNewDocument] = useState(null);
    const handleCloseSubMenuNewDocument = () => {
        setAnchorElSubMenuNewDocument(null);
    };
    const handleOpenSubMenuNewDocument = (event) => {
        setAnchorElSubMenuNewDocument(event.currentTarget);
    };
 //  creating sub menu for پروسه ها = Processes
 const subMenuProcesses = ['داشبورد کاربر', 'لیست معاملات روزانه', 'لیست معاملات دوگانه', 'صورت حساب', 'مانده حساب',
        'چک های دریافتی', 'چک های پرداختی', 'بازبینی اسناد', 'لیست دستورات پرداخت', 'پرداخت های بجای ما', 'TT حواله های', 'Pending vouchers', 'صدور حواله ها', 'دریافت حواله ها', 'حواله های ارسالی', 'حواله های دریافتی', 'واریزهای بانکی مشتریان'];
    const [anchorElSubMenuProcesses, setAnchorElSubMenuProcesses] = useState(null);
    const handleCloseSubMenuProcesses = () => {
        setAnchorElSubMenuProcesses(null);
    };
    const handleOpenSubMenuProcesses = (event) => {
        setAnchorElSubMenuProcesses(event.currentTarget);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters >
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 85,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.0rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            حسابان
                        </Typography>

                        {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 3 }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="right">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (

                                <Fragment key={page}>
                                    {page === 'معرفی ها' ? (
                                        <Fragment>
                                            <Button onClick={(event) => handleOpenSubMenuIntroduction(event, page)} sx={{ my: 1, color: 'white', display: 'block' }}>
                                                {page}
                                            </Button>
                                            <Menu
                                                id="submenu-appbar"
                                                anchorEl={anchorElSubMenuIntroduction}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'left',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                }}
                                                open={Boolean(anchorElSubMenuIntroduction)}
                                                onClose={handleCloseSubMenuIntroduction}
                                            >
                                                {subMenuIntroductions.map((item) => (
                                                    <MenuItem key={item} onClick={handleCloseNavMenu}>
                                                        <Typography className='subMenu' >{item}</Typography>
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </Fragment>
                                    ) : page === 'سند جدید' ? (
                                        <Fragment>
                                            <Button onClick={(event) => handleOpenSubMenuNewDocument(event, page)} sx={{ my: 1, color: 'white', display: 'block' }}>
                                                {page}
                                            </Button>
                                            <Menu
                                                id="submenu-document-appbar"
                                                anchorEl={anchorElSubMenuNewDocument}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                open={Boolean(anchorElSubMenuNewDocument)}
                                                onClose={handleCloseSubMenuNewDocument}
                                            >
                                                {subMenuNewDocument.map((item) => (
                                                    <MenuItem key={item} onClick={handleCloseNavMenu}>
                                                        <Typography className='subMenu'>{item}</Typography>
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </Fragment>
                                    ) : page === 'پروسه ها' ? (
                                        <Fragment>
                                            <Button onClick={(event) =>  handleOpenSubMenuProcesses(event, page)} sx={{ my: 1, color: 'white', display: 'block' }}>
                                                {page}
                                            </Button>
                                            <Menu
                                                id="submenu-document-appbar"
                                                anchorEl={anchorElSubMenuProcesses}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                open={Boolean(anchorElSubMenuProcesses)}
                                                onClose={handleCloseSubMenuProcesses}
                                            >
                                                {subMenuProcesses.map((item) => (
                                                    <MenuItem key={item} onClick={handleCloseNavMenu}>
                                                        <Typography className='subMenu'>{item}</Typography>
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </Fragment>
                                    ) : (
                                        <Button onClick={handleCloseNavMenu} sx={{ my: 1, color: 'white', display: 'block' }}>
                                            {page}
                                        </Button>
                                    )}
                                </Fragment>

                            ))}
                            
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="right">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default ResponsiveAppBar;