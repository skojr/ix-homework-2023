import "./App.css";
import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookPage from "./components/book/BookPage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { auth } from "./firebase/firebase";
import Navbar from "./components/common/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import RequireAuth from "./components/common/RequireAuth";
import Spinner from "./components/common/Spinner";

function App() {
  const [user, setUser] = useState(null);
  const [isUserUpdated, setIsUserUpdated] = useState(false);;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsUserUpdated(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      {isUserUpdated ? (
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth user={user}>
                <BookPage user={user} />
              </RequireAuth>
            }
          ></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      ) : (
        <div className="mt-5 text-center">
          <Spinner />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
