// import Home from "./components/home/Home";
// import Login from "./components/login/Login";
import Register from "./components/register/Register";
import './sass/styles.scss';
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";


function App() {
  // const { currentUser } = useContext(AuthContext);

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;

  return (
    <Register/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/">
    //       <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
    //       <Route path="login" element={<Login />} />
    //       <Route path="register" element={<Register />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
