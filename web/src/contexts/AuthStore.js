import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();
const restoreUserFromLocalStorage = () => {
  const user = localStorage.getItem('clientUser');
  if (user) {
    return JSON.parse(user);
  } else {
    return undefined;
  }
}

function AuthStore({ children }) {
  const [user, setUser] = useState(restoreUserFromLocalStorage());
  const navigate = useNavigate();

  const handleUserChange = (user) => {
    console.log('Updating user context', user);
    if (!user) {
      localStorage.removeItem('user-access-token');
      localStorage.removeItem('clientUser');
    } else {
      localStorage.setItem('user-access-token', user.token);
      localStorage.setItem('clientUser', JSON.stringify(user));
    }
    setUser(user);
  }

  const logout = () => {
    handleUserChange();
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, onUserChange: handleUserChange, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthStore as default, AuthContext}