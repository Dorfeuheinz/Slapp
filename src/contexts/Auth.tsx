import React, { createContext, useState, useContext } from 'react';

interface AuthContextType {
    access_token: string | null;
    login: (access_token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [access_token, setAccess_token] = useState<string | null>(() => localStorage.getItem('access_token'));

    const login = (newAccess_token: string) => {
        setAccess_token(newAccess_token);
        localStorage.setItem('access_token', newAccess_token);
    };

    const logout = () => {
        setAccess_token(null);
        localStorage.removeItem('access_token');
    };

    return (
        <AuthContext.Provider value={{ access_token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
