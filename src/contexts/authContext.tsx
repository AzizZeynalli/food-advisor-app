import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

type TUser  = {
    username: string;
    email: string;
    avatar: string;
    token: string;
}

interface AuthContextType {
  user: null | TUser; 
  setUser: React.Dispatch<React.SetStateAction<null | TUser>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: (user: TUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<null | TUser>(null); 
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const token = Cookies.get('userToken');
        if (token) {
            axios.get('http://localhost:3003/api/users/details', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setUser(response.data);
                setLoading(false);
            }).catch(error => {
                console.error('Error fetching user details:', error);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    const login = (user: TUser) => {
        Cookies.set('userToken', user.token);
        setUser(user);
    };

    const logout = () => {
        Cookies.remove('userToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}