import React from 'react'

const Head = () => {
  return (
    <div>
        <header className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
      
            {/* Left section */}
            <div className="flex items-center gap-5">
                
                {/* Menu */}
                <img
                src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/svgs/solid/bars.svg"
                alt="menu"
                className="w-6 h-6"
                />

                {/* YouTube Logo */}
                <img
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/3840px-Logo_of_YouTube_%282015-2017%29.svg.png"
                alt="youtube-logo"
                className="w-24 h-7"
                />
            </div>


            {/* Search section */}
            <div className="flex items-center w-1/2">
                
                <input
                type="text"
                placeholder="Search"
                className="
                    w-full
                    px-4
                    py-2
                    border
                    border-gray-300
                    rounded-l-full
                    outline-none
                    focus:border-blue-500
                "
                />

                <button
                className="
                    px-6
                    py-2
                    border
                    border-l-0
                    border-gray-300
                    rounded-r-full
                    bg-gray-100
                    hover:bg-gray-200
                "
                >
                Search
                </button>

            </div>


            {/* User */}
            <div>
                <img
                src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/svgs/solid/user.svg"
                alt="user"
                className="w-7 h-7"
                />
            </div>

            </header>
    </div>
  )
}

export default Head