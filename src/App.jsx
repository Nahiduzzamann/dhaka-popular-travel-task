import { useState } from "react";
import Header from "./components/Header";
import FlightSearchForm from "./components/SearchForm";
import { data } from "./data/data";

function App() {
  // to set exact data
  const flightRoutesData = data.flightOffer;

  const [searchResult, setSearchResult] = useState([]);

  // set search result
  const handleSearch = (result) => {
    setSearchResult(result);
  };

  console.log(searchResult);

  return (
    <div>
      <Header></Header>
      <div className="shadow-md">
        <div className="container px-2 mx-auto text-xl font-medium">
          Master Price
        </div>
      </div>
      <div className="container px-2 mx-auto">
        <div className="flex justify-center py-6">
          <div className="px-2 py-1 border border-blue-800 text-sm font-semibold">
            Round Trip
          </div>
          <div className="px-2 py-1 border border-blue-800 text-white bg-blue-800 text-sm font-semibold">
            Round Trip
          </div>
          <div className="px-2 py-1 border border-blue-800 text-sm font-semibold">
            Round Trip
          </div>
        </div>
        {/* search form  */}
        <FlightSearchForm
          flightRoutes={flightRoutesData}
          onSearch={handleSearch}
        ></FlightSearchForm>
      </div>
    </div>
  );
}

export default App;
