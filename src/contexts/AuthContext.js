import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

// Criar o context
const AuthContext = React.createContext();

// Função para acessar o context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Criar o loading state
  const [loading, setLoading] = useState(true);

  // Criar o user state
  const [user, setUser] = useState(null);
  const history = useHistory();

  // Acessar user a partir da autenticação do Firebase
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // Setando estado do user
      setUser(user);
      setLoading(false);

      // Redirecionar para /chats após setar o state do user
      if (user) history.push("/chats");
    });
  }, [user, history]);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
