import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, Suspense } from "react";
// COMPONENTS
import Nav from "./components/nav/Nav";
import AllTours from "./components/allTours/AllTours";
import Error from "./components/errorBoundaries/Error";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
// CONTEXT
import { LikeProvider } from "./context/LikeContext/LikeContext";
import { TotalPriceProvider } from "./context/TotalPriceContext/TotalPriceContext";

const LogIn = React.lazy(() => import("./components/logIn/LogIn.js"));
const TourPreview = React.lazy(() =>
  import("./components/SINGLE TOUR/tourPreview/TourPreview")
);

function App() {
  const [searchQuery, setSearch] = useState("");

  const saveSearchDataHandler = (enteredSearchData) => {
    console.log(enteredSearchData);
    setSearch((el) => {
      return enteredSearchData;
    });
  };

  return (
    <BrowserRouter>
      <Error>
        <Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LoadingSpinner />
            </div>
          }
        >
          <Nav />
          <LikeProvider>
            <TotalPriceProvider>
              <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/*" element={<AllTours />} />
                <Route path="/all-tours/*" element={<AllTours />} />
                <Route path="/single-tour/:id" element={<TourPreview />} />
              </Routes>
            </TotalPriceProvider>
          </LikeProvider>
        </Suspense>
      </Error>
    </BrowserRouter>
  );
}

export default App;
