import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Bank = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"50vh"}
    >
      <Typography align="center" variant="h2" mt={5}>
        Bank
      </Typography>
      <Box justifyContent={"space-evenly"} display={"flex"}>
        <Button
          variant="contained"
          size="large"
          style={{ fontSize: "1.8rem" }}
          color="success"
          onClick={() => addCash(Number(prompt()))}
        >
          ADD
        </Button>
        <Button
          variant="outlined"
          size="large"
          style={{ fontSize: "1.8rem" }}
          onClick={() => getCash(Number(prompt()))}
        >
          GET
        </Button>
      </Box>

      <Typography align="center" variant="h3">
        Total cash: {cash}
      </Typography>
    </Box>
  );
};

export default Bank;
