export default function FlightDataShow({ data }) {
  return (
    <tr className="bg-gray-100 border-b border-red-400">
      <td className="">
        {data?.itineraries[0].segments[0].marketingCarrier}{" "}
        {data?.itineraries[0].segments[0].flightNumber} <br />
        {data?.itineraries[0].segments[1].marketingCarrier}{" "}
        {data?.itineraries[0].segments[1].flightNumber}
      </td>
      <td className="">
        {data?.itineraries[0].segments[0].aircraft} <br />{" "}
        {data?.itineraries[0].segments[1].aircraft}
      </td>
      <td className="">
        {data?.class[0][0]} <br />
        {data?.class[0][1]}
      </td>
      <td className="">
        {data?.fareBasis[0][0]} <br />
        {data?.fareBasis[0][1]}
      </td>
      <td className="">
        {data?.itineraries[0].segments[0].departure.iataCode}-
        {data?.itineraries[0].segments[0].arrival.iataCode} <br />
        {data?.itineraries[0].segments[1].departure.iataCode}-
        {data?.itineraries[0].segments[1].arrival.iataCode}
      </td>
      <td className="">
        {data?.itineraries[0].segments[0].departure.at} <br />
        {data?.itineraries[0].segments[1].departure.at}
      </td>
      <td className="">
        {data?.itineraries[0].segments[0].departure.at} <br />
        {data?.itineraries[0].segments[1].departure.at}
      </td>

      <td className="">
        <div className="flex flex-col gap-4 h-full justify-between">
          <div className="flex gap-4 items-center">
            <div className="h-[1px] w-6 bg-gray-400"></div>
            <p>{data?.itineraries[0].duration}</p>
          </div>
          <div className="h-2">
            <div className="h-[1px] w-6 bg-gray-400"></div>
          </div>
        </div>
      </td>
      <td className="flex flex-col justify-center">
        <p>{data?.price}</p>
        <div className="text-center py-1 text-white text-sm font-light bg-blue-900">
          SELECT
        </div>
      </td>
    </tr>
  );
}
