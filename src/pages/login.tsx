import React from "react";
import styled from "styled-components";
import { Container, Stack, Typography, Button, TextField, Box, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment, FilledInput, Input, Grid } from "@mui/material";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// here is an example of a 'styled component'
const Login = () => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #FFF;
  `;

  const BrandButton = (props: { children:React.ReactElement<any, string | React.JSXElementConstructor<any>>}) =>(
    <IconButton
      size = "large"
      sx={{
        border: "1px solid grey"
      }}>
      {props.children}
    </IconButton>
  );

  const Line = () => (
    <hr
        style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 1,
            width: "100%"
        }}
    />
);

const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  return (
    // TODO: edit this page
    // <div>
    //   <Title>Login</Title>
    // </div>
      <Grid container direction="column" alignItems="center" justifyContent="center" sx={{height: "100%", width: "100%", textAlign: "center", paddingTop: "7%"}}>
      <Grid item>
      <Stack direction="column" spacing={2.5} width="350px">
        <Box sx={{paddingBottom: "40%"}}>
          <Stack direction="column">
            <Typography fontWeight={600}>Log in</Typography>
            <Typography fontWeight={600} color="text.secondary">Hi! Welcome</Typography>
          </Stack>
        </Box>
        <TextField
          id="standard-required"
          label="Email"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />

        <FormControl variant="standard">
          <InputLabel shrink={true}>Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button size="large" variant = "contained" sx={{borderRadius: "25px"}}>Log in</Button>
        <Typography>Forgotten your password?</Typography>
        <Stack direction="row" justifyContent="space-between">
          <Line />
          <Typography fontSize ={12} color="text.secondary" sx={{width: "300px"}}>Or sign in with</Typography>
          <Line />
        </Stack>
        <Stack direction="row" justifyContent="space-around">
          <BrandButton>
            <FaApple size={50} color="black"/>
          </BrandButton>
          <BrandButton>
            <FcGoogle size={50} color="black"/>
          </BrandButton>
          <BrandButton>
            <FaFacebookF size={50} color="#1877F2"/>
          </BrandButton>
        </Stack>
        <Box>
          <Typography fontSize={12} color="text.secondary" > Don't have an account?</Typography>
          <Typography fontSize={12} fontWeight={600}>Create an account</Typography>
        </Box>
      </Stack>
      </Grid>
      </Grid>

  );
};

export default Login;
