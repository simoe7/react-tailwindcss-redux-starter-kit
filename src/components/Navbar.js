import React from 'react';

function Navbar() {

    return (
      <nav className="p-4 sticky bg-gray-100">
        <div className="flex justify-between items-center">
          <div className="">
            React Tailwindcss
          </div>

          <div className="flex items-center justify-center">
            <div>
              <button className="bg-primary p-2 mx-2 rounded-md  text-white">
                Login
              </button>
            </div>
            <div>
              <button className="bg-primary p-2 mx-2 rounded-md  text-white">
                Register
              </button>
            </div>
           
            
            
          </div>

        </div>
      </nav>
    
     );
}

export default Navbar
