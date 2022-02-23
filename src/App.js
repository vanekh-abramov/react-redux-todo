// // import { Table } from "@mui/material";
import { Route, Link, Routes } from "react-router-dom";
import Bank from "./Pages/Bank";
import Posts from "./Pages/Posts";
import Todo from "./Pages/Todo";

// function App() {
//   return (
//     <>
//       <Table>
//         <Link to="/">Posts</Link>
//         <Link to="/todo">Todo</Link>
//         <Link to="/bank">Bank</Link>
//       </Table>
//       <Routes>
//         <Route path="/" element={<Posts />} />
//         <Route path="/todo" element={<Todo />} />
//         <Route path="/bank" element={<Bank />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Breadcrumbs } from "@mui/material";
import { useSelector } from "react-redux";

const pages = ["posts", "bank", "todo"];

function App() {

  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container style={{ padding: '0px', height: '100vh' }}>
      <AppBar position="static">
        <Container maxWidth="xl" >
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <Link key={page} to={page !== "posts" ? `/${page}` : "/"}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography key={page} textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Breadcrumbs>
                {pages.map((page) => (
                  <Link key={page} to={page !== "posts" ? `/${page}` : "/"}>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
              </Breadcrumbs>

            </Box>
            {customers.length ? <Typography>{customers[0].userName} {customers[0].userSurname}</Typography> : false}
            <Typography > $ {cash}</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/bank" element={<Bank />} />
      </Routes>
    </Container>
  );
}

export default App;
