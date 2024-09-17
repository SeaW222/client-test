import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { publicRouter } from "./router/router";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          {publicRouter.map((item, index) => {
            const Page = item.element;
            return item.layout ? (
              <Route
                key={index + "publicRoute"}
                path={item.path}
                element={
                  <item.layout type={item?.type}>
                    <Page />
                  </item.layout>
                }
              />
            ) : (
              <Route
                key={item?.path + index}
                path={item?.path}
                element={<Page />}
              />
            );
          })}

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
