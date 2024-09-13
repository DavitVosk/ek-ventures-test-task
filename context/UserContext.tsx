import { createContext, FC, useContext, useState, ReactNode } from "react";

export interface UserProps {
  name: string;
  image: string;
}

interface AuthContextProps {
  user?: UserProps;
  setUserData: (user: UserProps) => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  setUserData: () => {},
});

interface AuthProviderProps {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState();

  const setUserData = (userData: any) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
