import React from 'react'
import Image from './Image'

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-2">
      <div className="flex items-center gap-4">
        <Image src="default-image.jpg" className="w-10 h-10 rounded-full object-cover" w="40" />
        <span className='font-semibold'>John Doe</span>
        <span className='text-sm text-gray-500'>Date</span>
      </div>
      <div className="mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi repellendus numquam magni alias, accusantium dolorum consequatur, quod ratione temporibus cupiditate a labore culpa ducimus amet ipsa doloremque aperiam nihil.</p>
      </div>
    </div>
  )
}

export default Comment