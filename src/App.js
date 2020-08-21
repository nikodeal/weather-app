import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Forecast from "./components/Forecast";
import StateContextP from "./context/StateContextP";
import Favorites from "./components/Favorites";

const App = () => {
  const [homePage, setHomePage] = useState(true);
  const [favPage, setFavPage] = useState(false);
  return (
    <StateContextP>
      <NavBar setHomePage={setHomePage} setFavPage={setFavPage}/>
      <main>
        {homePage && (
          <Forecast  />
        )}
        {favPage && (
          <Favorites setHomePage={setHomePage} setFavPage={setFavPage} />
        )}
      </main>
    </StateContextP>
  );
};

export default App;
