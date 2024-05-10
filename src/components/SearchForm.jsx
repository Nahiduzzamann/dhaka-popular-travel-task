import React, { useState } from "react";

const FlightSearchForm = ({ flightRoutes, onSearch }) => {
  const [passengerCount, setPassengerCount] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [errors, setErrors] = useState({});
  const validateForm = () => {

    const errors = {};
    if (!passengerCount) {
      errors.passengerCount = "Passenger count is required";
    } else if (isNaN(passengerCount) || passengerCount <= 0) {
      errors.passengerCount = "Passenger count must be a positive number";
    }
    if (!fromLocation) {
      errors.fromLocation = "From location is required";
    }
    if (!toLocation) {
      errors.toLocation = "To location is required";
    }
    if (!journeyDate) {
      errors.journeyDate = "Journey date is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform search based on input values
      const searchResult = flightRoutes.filter((route) => {
        // Check if the flight has available seats for the given passenger
        const availableSeats = parseInt(route.seat[0]);
        if (availableSeats < passengerCount) return false;

        // Check if the departure and arrival locations match the given criteria
        const departureLocation =
          route.itineraries[0].segments[0].departure.iataCode;
        const arrivalLocation =
          route.itineraries[0].segments[
            route.itineraries[0].segments.length - 1
          ].arrival.iataCode;
        if (
          departureLocation !== fromLocation.toUpperCase() ||
          arrivalLocation !== toLocation.toUpperCase()
        )
          return false;

        // Check if the journey date matches
        const departureDateTime = new Date(
          route.itineraries[0].segments[0].departure.at
        );
        const journeyDateTime = new Date(journeyDate);
        if (departureDateTime.toDateString() !== journeyDateTime.toDateString())
          return false;
        return true; // If all criteria match, include the flight in the results
      });
      onSearch(searchResult);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSearch}>
        <div className="border-blue-500 border-t border-b py-2 flex gap-2 justify-center">
          <div className=" flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fromLocation"
              >
                From Location
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.fromLocation ? "border-red-500" : ""
                }`}
                id="fromLocation"
                type="text"
                placeholder="From Location"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                required
              />
              {errors.fromLocation && (
                <p className="text-red-500 text-xs italic">
                  {errors.fromLocation}
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="toLocation"
              >
                To Location
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.toLocation ? "border-red-500" : ""
                }`}
                id="toLocation"
                type="text"
                placeholder="To Location"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                required
              />
              {errors.toLocation && (
                <p className="text-red-500 text-xs italic">
                  {errors.toLocation}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="journeyDate"
            >
              Journey Date
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.journeyDate ? "border-red-500" : ""
              }`}
              id="journeyDate"
              type="date"
              placeholder="Journey Date"
              value={journeyDate}
              onChange={(e) =>
                setJourneyDate(e.target.value)
              }
              required
            />
            {errors.journeyDate && (
              <p className="text-red-500 text-xs italic">
                {errors.journeyDate}
              </p>
            )}
          </div>
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="passengerCount"
            >
              Passenger Count
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.passengerCount ? "border-red-500" : ""
              }`}
              id="passengerCount"
              type="number"
              placeholder="Passenger Count"
              value={passengerCount}
              onChange={(e) => setPassengerCount(e.target.value)}
              required
            />
            {errors.passengerCount && (
              <p className="text-red-500 text-xs italic">
                {errors.passengerCount}
              </p>
            )}
          </div>
        </div>
        <div className="border-blue-500 border-b py-3 flex justify-between items-center">
          <div className="option flex items-center">
            <input type="checkbox" id="extraOption" className="mr-2" />
            <label htmlFor="extraOption" className="text-sm font-semibold">
              Extra Option
            </label>
          </div>

          <div className="option flex items-center">
            <p className="text-sm font-semibold mr-2">Environment</p>
            <input type="radio" id="dummy" name="choice" className="mr-2" />
            <label htmlFor="dummy" className="text-sm font-semibold mr-4">
              Dummy
            </label>
            <input type="radio" id="pdt" name="choice" className="mr-2" />
            <label htmlFor="pdt" className="text-sm font-semibold">
              PDT
            </label>
          </div>

          <button
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightSearchForm;
