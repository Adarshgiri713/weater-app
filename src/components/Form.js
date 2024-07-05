import React, { useState } from "react";
import { Box, InputBase, Button, styled } from "@mui/material";
import { getWeather } from '../services/api';

const Container = styled(Box)({
  background: "#445A6F",
  padding: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  "@media (min-width: 600px)": {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Input = styled(InputBase)(({ theme }) => ({
  color: "#FFF",
  margin: theme.spacing(1),
  marginRight: 20,
  marginBottom: 20,
  "& input": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "10px 12px",
    borderRadius: 5,
    minWidth: 200,
    "&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  },
  "@media (min-width: 600px)": {
    marginBottom: 0,
  },
}));

const GetButton = styled(Button)({
  background: "#e67e22",
  marginTop: 20,
  minWidth: 150,
});

const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: "", country: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getWeatherInfo = async () => {
    let response = await getWeather(data.city, data.country);
    setResult(response);
  };

  return (
    <Container>
      <Input placeholder="City" onChange={(e) => handleChange(e)} name="city" />
      <Input
        placeholder="Country"
        onChange={(e) => handleChange(e)}
        name="country"
      />
      <GetButton variant="contained" onClick={() => getWeatherInfo()}>
        Get Weather
      </GetButton>
    </Container>
  );
};

export default Form;
