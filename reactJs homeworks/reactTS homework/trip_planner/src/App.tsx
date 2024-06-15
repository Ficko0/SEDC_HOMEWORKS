import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import ContinentPage from "./components/ContinentPage";
import { ICountry } from "./common/types/country.interface";
import country from "./database/data.json";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route
          path="/continent/:continentName"
          element={<ContinentPage country={country as ICountry[]} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
