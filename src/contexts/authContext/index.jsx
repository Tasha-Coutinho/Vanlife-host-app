
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    // Retrieve the initial state from local storage, if available
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [userLoggedIn, setUserLoggedIn] = useState(() => {
    // Retrieve the initial state from local storage, if available
    const storedLoggedIn = localStorage.getItem("userLoggedIn");
    return storedLoggedIn === "true";
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setUserLoggedIn(!!user);
      setLoading(false);

      // Persist user and logged-in state in local storage
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("userLoggedIn", user ? "true" : "false");
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userLoggedIn,
    loading,
    setUserLoggedIn, // Optional: for manual updates
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
