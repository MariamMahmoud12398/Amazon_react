
export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 bg-white gap-3 sm:gap-0">
      <img
        src="/logo (1).png"
        alt="Logo"
        className="w-23 h-10 object-cover pl-5"
      />
      <input
        type="search"
        placeholder="Search"
        className="w-full sm:w-1/3 rounded-full py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-orange-400 transition"
      />
      <div className="flex gap-4 text-sm text-gray-700 items-center">
        <p>Cart 0</p>
        <a href="#" className="hover:text-orange-400">Returns & Orders</a>
      </div>
    </nav>
  );
}
