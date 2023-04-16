import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider, UserContext } from "./utilis/utilis";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <UserContext.Consumer>
                {(context) =>
                  context.currUser ? <Home /> : <Navigate to="/login" />
                }
              </UserContext.Consumer>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
