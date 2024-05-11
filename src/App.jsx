import { useState } from "react";
import Header from "./components/Header";
import FlightSearchForm from "./components/SearchForm";
import { data } from "./data/data";
import FlightDataShow from "./components/FlightDataShow";

function App() {
  // to set exact data
  const flightRoutesData = data.flightOffer;

  const [searchResult, setSearchResult] = useState([]);

  // set search result
  const handleSearch = (result) => {
    setSearchResult(result);
  };
console.log(data.flightOffer);
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
        {/* search result  */}
        <div className="mt-10">
          {searchResult.length > 0 ? (
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-400">
                  <th className="">Flight</th>
                  <th className="">AIRCRAFT</th>
                  <th className="">CLASS</th>
                  <th className="">FARE</th>
                  <th className="">ROUTE</th>

                  <th className="">DEPARTURE</th>
                  <th className="">ARRIVAL</th>
                  <th className="">DURATION</th>
                  <th className="">PRICE</th>
                </tr>
              </thead>
              <tbody>
                {searchResult.map((data, i) => (
                  <FlightDataShow data={data} key={i}></FlightDataShow>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-3xl mt-4 text-center">Data Not Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
