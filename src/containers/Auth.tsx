import React, { Dispatch, SetStateAction, useState } from "react";
import Self from "components/Auth";
import axios from 'axios';
import { useAuth } from "contexts/Auth";

export type AuthType = {
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    handleLogin: () => void;
    handleSignup: () => void;
}


export default function Auth() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const auth = useAuth();

    const handleSignup = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/register/', { 
                username: username,
                email: email,
                password: password 
            });
            alert('User registered successfully!');
        } catch (error) {
            console.error('Signup error:', error);
        }
    };
    
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/login/', { 
                email: email,
                password: password 
            });
            auth.login(response.data.token);
            alert('Logged in successfully!');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return(
        <Self
            username={username} 
            setUsername={setUsername} 
            password={password} 
            setPassword={setPassword} 
            handleLogin={handleLogin} 
            handleSignup={handleSignup} 
            email={email}
            setEmail={setEmail}
        />
    );
}