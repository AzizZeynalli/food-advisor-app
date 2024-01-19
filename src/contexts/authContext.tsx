import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { set } from 'react-hook-form';

type TUser  = {
    username: string;
    email: string;
    avatar: string;
    token: string;
    likedRecipes: Meal[];
}

type Meal = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
};

interface AuthContextType {
  user: null | TUser; 
  setUser: React.Dispatch<React.SetStateAction<null | TUser>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: (user: TUser) => void;
  logout: () => void;
  likeRecipe: (meal: Meal) => void;
  unlikeRecipe: (mealId: string) => void;
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
            axios.get('https://fooderra-api.vercel.app/api/users/details', {
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

    const likeRecipe = (meal: Meal) => {
        axios.patch('https://fooderra-api.vercel.app/api/users/like', {
            meal
        }, {
            headers: {
                Authorization: `Bearer ${user?.token}`
            }
        }).then(response => {
            setUser(response.data);
        }).catch(error => {
            console.error('Error liking recipe:', error);
        });
    }

    const unlikeRecipe = (mealId : string) => {
        axios.patch('https://fooderra-api.vercel.app/api/users/removelike', {
            mealId
        }, {
            headers: {
                Authorization: `Bearer ${user?.token}`
            }
        }).then(response => {
            setUser(response.data);
        }).catch(error => {
            console.error('Error unliking recipe:', error);
        });
    }

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, login, logout, likeRecipe, unlikeRecipe }}>
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