import React, { useState } from "react";
import { AuthType } from "containers/Auth";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormHelperText, Typography } from "@mui/material";
import TypographyJoy from '@mui/joy/Typography';

type YoureMyType = {
	changePage: () => void;
	passwordError: string;
	handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	validatePassword: (password: string) => boolean;
}

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://tinymesh.com/">
        Tinymesh
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const Signup: React.FC<Partial<AuthType> & YoureMyType> = ({
	username,
	setUsername,
	password,
	handleSignup,
	email,
	setEmail,
	changePage,
	passwordError,
	handlePasswordChange,
	validatePassword
}) => {

	const [disableSubmit, setDisableSubmit] = useState(true);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		if (validatePassword(password!) && email!.length !== 0 && username!.length !== 0) {
			handleSignup!();
		} else {
			return;
		}
	};

	const disableSubmitEvent = (): void => {
		setDisableSubmit(!disableSubmit);
	};


	return (
	<>
		<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
			<LockOutlinedIcon onClick={changePage} style={{ cursor: "pointer" }} />
		</Avatar>
		<Typography component="h1">
			Sign up
		</Typography>
		<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
			<Grid container spacing={2}>
			<Grid item xs={12}>
				<TextField
				autoComplete="given-name"
				name="userName"
				required
				fullWidth
				id="userName"
				label="User Name"
				value={username}
				onChange={(e) => setUsername!(e.target.value)}
				autoFocus
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				value={email}
				onChange={(e) => setEmail!(e.target.value)}
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
				required
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="new-password"
				value={password}
				onChange={handlePasswordChange}
				error={!!passwordError && password!.length !== 0}
				helperText={password!.length !== 0 ? passwordError: ''}
				/>
			</Grid>
			<Grid item xs={12}>
				<FormHelperText>
					<TypographyJoy level="body-sm">
					Read our <Link href="#link">terms and conditions</Link>.
					</TypographyJoy>
				</FormHelperText>
				<FormControlLabel
				control={<Checkbox value="allowExtraEmails" color="primary" onClick={disableSubmitEvent} />}
				label="I have read & agree to all the terms & conditions as specified above"
				/>
			</Grid>
			</Grid>
			<Button
			type="submit"
			fullWidth
			variant="contained"
			sx={{ mt: 3, mb: 2 }}
			disabled={disableSubmit}
			>
			Sign Up
			</Button>
			<Grid container justifyContent="flex-end">
			<Grid item>
				<Link onClick={changePage} variant="body2">
				Already have an account? Login
				</Link>
			</Grid>
			</Grid>
		</Box>
	</>
	);
}

const Login: React.FC<Partial<AuthType> & YoureMyType> = ({
	password,
	handleLogin,
	email,
	setEmail,
	changePage,
	passwordError,
	handlePasswordChange,
	validatePassword
}) => {

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		if (validatePassword(password!) && email!.length !== 0) {
			handleLogin!();
		} else {
			return;
		}
	};

	return (
	<>
		<Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
			<LockOpenIcon onClick={changePage} style={{ cursor: "pointer" }} />
		</Avatar>
		<Typography component="h1" >
			Login
		</Typography>
		<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
			<Grid container spacing={2}>
			<Grid item xs={12}>
				<TextField
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				value={email}
				onChange={(e) => setEmail!(e.target.value)}
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField 
				required
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="new-password"
				value={password}
				onChange={handlePasswordChange}
				error={!!passwordError && password!.length !== 0}
				helperText={password!.length !== 0 ? passwordError: ''}
				/>
			</Grid>
			</Grid>
			<Button
			type="submit"
			fullWidth
			variant="contained"
			sx={{ mt: 3, mb: 2 }}
			disabled={passwordError.length !== 0}
			>
			Login
			</Button>
			<Grid container justifyContent="flex-end">
			<Grid item>
				<Link onClick={changePage} variant="body2">
				New here? Sign Up
				</Link>
			</Grid>
			</Grid>
		</Box>
	</>
	);
}


const defaultTheme = createTheme();

const Auth: React.FC<AuthType> = ({
	username,
	setUsername,
	password,
	setPassword,
	handleLogin,
	handleSignup,
	email,
	setEmail,
}) => {
	const [page, setPage] = useState(false);
	const [passwordError, setPasswordError] = useState('');


	const validatePassword = (password: string): boolean => {
		if (password.length < 6) {
			setPasswordError("Password must be at least 6 characters long.");
			return false;
		}
		if (!/\d/.test(password)) {
			setPasswordError("Password must contain at least one number.");
			return false;
		}
		if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
			setPasswordError("Password must contain at least one special character.");
			return false;
		}
		setPasswordError('');
		return true;
	};
  
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void  => {
		setPassword(e.target.value);
		validatePassword(e.target.value);
	};

	const changePage = () => {
		setPage(!page);
	}

	const video = require('assets/video5.mp4');

  	return (
   <>
	<div className="auth-div">
	<video className="videoAuth" src={String(video)}  muted autoPlay loop ></video>	
	<div  style={{ height: "100vh", paddingTop: "5%" }}>
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				
				}}
				>
					{page? 
						<Signup
							username={username}
							setUsername={setUsername}
							password={password}
							setPassword={setPassword}
							handleSignup={handleSignup}
							email={email}
							setEmail={setEmail}
							changePage={changePage}
							passwordError={passwordError}
							handlePasswordChange={handlePasswordChange}
							validatePassword={validatePassword}
						/>: 
						<Login
							password={password}
							setPassword={setPassword}
							handleLogin={handleLogin}
							email={email}
							setEmail={setEmail}
							changePage={changePage}
							passwordError={passwordError}
							handlePasswordChange={handlePasswordChange}
							validatePassword={validatePassword}
						/>
					}
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	</div>
    </div>	
	</>
  	);
};

export default Auth;