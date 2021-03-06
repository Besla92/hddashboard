import { useState, createContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

//Wenn die Komponente initial mountet,
//checken, ob es einen token gibt
//wenn nein setIsAutheticated zu false setzen
//wenn ja,  req and die api schicken, setIsAutheticated zu true

export const UserContext = createContext();

const AuthState = ({ children }) => {
const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const checkIfTokenValid = async () => {
      if (token) {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/user/verify`,
            { headers: { Authorization: token } }
          );
          if (res.status === 200) {
            setIsAuthenticated(true);
          }
          console.log('Token exist');
        } catch (error) {
          console.log(error);
        }
      } else {
        setIsAuthenticated(false);
        console.log('Token not exist');
      }
    };
    checkIfTokenValid();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;