import { createContext, useContext, useState, ReactNode } from "react";

export interface UserProps {
  name: string;
  image: string;
}

interface AuthContextProps {
  user?: UserProps;
  setUser: (user: UserProps) => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  setUser: () => {},
});

interface AuthProviderProps {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
