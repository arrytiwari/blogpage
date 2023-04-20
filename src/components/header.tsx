import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-xl font-bold text-white">My Blog</div>
        <nav>
          <ul className="flex space-x-4 text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <form className="ml-4">
          <input type="text" className="rounded-l-lg px-4 py-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Search..." />
          <button className="px-4 py-2 border rounded-r-lg bg-gray-600 border-gray-200 text-white font-bold">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
