// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import NotFound from "./NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Chat />
          }
        />
        {/* <Route
          path="/updates"
          element={
            <Layout
              header={<h1>Updates</h1>}
              main={<Updates />}
            />
          }
        /> */}
        {/* <Route
          path="/profile"
          element={
            <Layout
              header={<h1>Profile</h1>}
              main={<Profile />}
            />
          }
        /> */}

        {/* Catch-all route for 404 */}
        <Route
          path="*"
          element={
            <NotFound />
          }
        />
      </Routes>
    </Router >
  );
}

export default App;
