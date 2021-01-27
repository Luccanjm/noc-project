import React, {
    createContext,
    useCallback,
    useState,
    useContext,
  } from 'react';
  
  import api from '../services/api';
  
  
  const AuthContext = createContext({});
  
  const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
      const tecnico = localStorage.getItem('@NOC:tecnico');
  
      if (tecnico) {
        return { tecnico: JSON.parse(tecnico) };
      }
  
      return {};
    });
  
    return (
      <AuthContext.Provider
        value={{ tecnico: data.tecnico }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  function useAuth() {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
  }
  
  export { AuthProvider, useAuth };