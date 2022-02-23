import {
  Alert,
  Box,
  Button,
  Collapse,
  Fab,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.customers);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [position, setPosition] = useState("");

  const nameInput = (e) => {
    setName(e.target.value);
  };
  const surnameInput = (e) => {
    setSurname(e.target.value);
  };
  const positionInput = (e) => {
    setPosition(e.target.value);
  };

  const customer = {
    userName: name,
    userSurname: surname,
    userPosition: position,
    id: Date.now(),
  };

  const confirmCustomer = () => {
    if(!customer.userName || !customer.userSurname || !customer.userPosition){
      return alert('Fill all fields')
    } else {
      dispatch({ type: "ADD_CUSTOMER", payload: customer });
    }
  };
  const [open, setOpen] = useState(true);
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"50vh"}
      >
        <Typography align="center">Fill in your details</Typography>
        <Box display={"flex"} flexDirection={"column"} height={"50vh"}>
          <TextField
            onChange={nameInput}
            value={name}
            label="Name"
            variant="outlined"
            margin={"normal"}
          />
          <TextField
            onChange={surnameInput}
            value={surname}
            label="Surname"
            variant="outlined"
          />
          <InputLabel id="demo-simple-select-label">
            Position
          </InputLabel>
          <Select value={position} label="Position" onChange={positionInput}>
            <MenuItem value={"Junior FE Developer"}>
              Junior FE Developer
            </MenuItem>
            <MenuItem value={"Middle FE Developer"}>
              Middle FE Developer
            </MenuItem>
            <MenuItem value={"Senior FE Developer"}>
              Senior FE Developer
            </MenuItem>
          </Select>
        </Box>
        <Fab onClick={confirmCustomer} color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        {confirmCustomer && customers.length === 1
          ? customers.map((customer) => (
              <Collapse key={customer.id} in={open}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  Hi {customer.userSurname} {customer.userName}
                  <br />
                  We are glade to meet a new {customer.userPosition}
                </Alert>
              </Collapse>
            ))
          : false}
      </Box>
    </>
  );
};

export default Posts;
