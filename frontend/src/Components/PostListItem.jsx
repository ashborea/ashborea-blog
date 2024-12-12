import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 items-center">
        <div className="md:hidden xl:block xl:w-1/3">
            <Image src="default-image.jpg" alt="shrek" className="rounded-2xl object-cover" />
        </div>
        <div className="flex flex-col gap-1 xl:w-2/3">
            <Link to="/" className='text-4xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Link>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
                <span>Par: </span>
                <Link className='text-blue-800 mr-4'>Marjorie</Link>
                <span>Catégorie: </span>
                <Link className='text-blue-800 mr-4'>Chat</Link>
                <span>12/12/2024</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat temporibus cupiditate, corporis corrupti tempora cumque nihil quod, aliquid incidunt magnam culpa possimus voluptatum placeat mollitia minima numquam modi explicabo vel.</p>
            <Link className='underline text-blue-800 text-sm'>Lire l'article</Link>
        </div>
    </div>
  )
}

export default PostListItem