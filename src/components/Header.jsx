import dp from '../assets/profile.jpg'
export default function Header() {
  return (
    <div className="bg-blue-950">
      <div className="container mx-auto px-2 h-14 flex justify-between items-center text-white ">
        <div className="flex gap-4">
          <h1>Dashboard</h1>
          <h1>Master Price</h1>
        </div>
        <div>
          <img
            className="h-8 w-8 rounded-full"
            src={dp}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
