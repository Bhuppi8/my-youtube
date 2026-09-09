import React, { useState } from 'react'

const categories = [
'All', 'Gaming', 'Live', 'Music', 'Podcasts', 'React', 'Web Development', 'Gadgets', 'Programming', 'UX Design'
]
const ButtonList = () => {
  const [activeCategory, setActiveCategory] = useState('All')  

  return (
    <div className="flex overflow-x-auto gap-3 px-4 py-3 whitespace-nowrap scrollbar-none">
        {
            categories.map((category) => (
                <button 
                    key={category}
                    onClick={()=> setActiveCategory(category)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        activeCategory === category
                        ? 'bg-[#f1f1f1] text-[#0f0f0f]'
                        : 'bg-[#272727] text-[#f1f1f1] hover:bg-[#3f3f3f]'
                    }`}
                >
                    {category}
                </button>
            ))
        }
    </div>
  )
}

export default ButtonList