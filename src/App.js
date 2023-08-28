import NavBar from './Components/NavBar';
import './App.css';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserToken, removeUserToken, validateUser } from './Api/api';

function App() {
  const [userToken, setUserToken] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [user, setUser] = useState(null);
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    const token = getUserToken();
    const email = localStorage.getItem('email'); // Retrieve email
    if (token) {
      setUserToken(token);
      if (email) setUser(email);
      
      const verifyUser = async () => {
        const verifyResult = await validateUser(token);
        setIsVerified(verifyResult.success);
      };
      verifyUser();
    } else {
      setUserToken(null);
      setIsVerified(false);
      setUser(null);
    }
  }, [refreshToken]);

  return (
    <div className="App">
      <NavBar user={user} isVerified={isVerified} setRefreshToken={setRefreshToken} />
      <Outlet context={{ setRefreshToken }} />
    </div>
  );
}

export default App;
