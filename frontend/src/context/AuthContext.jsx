import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("jasu_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password, role) => {
    // This is a temporary login function
    // Later this will be replaced with Firebase authentication
    const userData = {
      email,
      role,
      name: role === "student" ? "Student User" : role === "consultant" ? "Consultant User" : "Admin User",
    };
    
    setUser(userData);
    localStorage.setItem("jasu_user", JSON.stringify(userData));
    
    // Redirect to appropriate dashboard
    if (role === "student") {
      navigate("/dashboard/student");
    } else if (role === "consultant") {
      navigate("/dashboard/consultant");
    } else if (role === "admin") {
      navigate("/dashboard/admin");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("jasu_user");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
