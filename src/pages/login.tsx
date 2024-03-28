import { Box, Button, Container, IconButton, Input, InputAdornment, Stack, Typography} from "@mui/material";
import React from "react";
import { MdOutlineVisibility,MdOutlineVisibilityOff  } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const MainContainerStyle =(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
  <Container 
    component="main" 
    maxWidth="xs" 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      height: '100vh', 
      justifyContent: 'center' 
    }}>
    {props.children}
  </Container>
);

const LightSubText =(props: { children: string; }) => (
  <Typography 
    fontSize="14px" 
    color="text.secondary"
    sx={{ 
      px: 2
    }}
  >
    {props.children} 
  </Typography>
);

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <MainContainerStyle>
      <Typography fontWeight="600" fontSize="22px" lineHeight="22px">Log in</Typography>
      <Typography color="text.secondary" fontSize="22px">Hi! Welcome</Typography>
      <Box component="form" sx={{mt: 20, width:"100%"}}>
        <Typography fontSize="14px">Email Address</Typography>
        <Input fullWidth id="email" placeholder="Enter email" name="email"/>
        <Typography fontSize="14px" mt={2}>Password</Typography>
        <Input fullWidth id="password" placeholder="Enter password" name="email" type={showPassword ? 'text' : 'password'} 
          endAdornment={<InputAdornment position="end"> <IconButton onClick={handleClickShowPassword}> 
          {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />} </IconButton> </InputAdornment>}
        />
      </Box>
      <Button fullWidth variant="contained" sx={{ paddingTop: "18px", paddingBottom: "18px", mt: 4, mb: 4, borderRadius:"35px", textTransform: 'none'}}>Log In</Button>
      <Typography fontSize="14px">Forgotten your password?</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', my: 2 }}>
        <Box sx={{ flexGrow: 1, height: '2px', backgroundColor: 'black' }}/>
        <LightSubText>Or sign in with</LightSubText>
        <Box sx={{ flexGrow: 1, height: '2px', backgroundColor: 'black' }}/>
      </Box>
      <Stack direction = "row" justifyContent="space-evenly" sx={{width:"100%", mt:8, mb:3}}>
        <IconButton sx={{border:"1px solid grey"}}><FaApple size = "50px" color = "#000000"/></IconButton>
        <IconButton sx={{border:"1px solid grey"}}><FcGoogle size = "50px"/></IconButton>
        <IconButton sx={{border:"1px solid grey"}}><FaFacebookF size = "50px" color = "#1877F2"/></IconButton>
      </Stack>
      <LightSubText>Don't have an account?</LightSubText>
      <Typography fontSize="14px">Create an Account</Typography>
    </MainContainerStyle>
  );
};

export default Login;
