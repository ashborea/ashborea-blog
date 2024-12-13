import React from 'react'
import Comment from './SingleComment'

const Comments = () => {
  return (
    <div className="flex flex-col gap-4 ">
        <h1 className="text-xl text-gray-500 underline">Commentaires</h1>
        <div className="flex items-center justify-between gap-8 w-full">
            <textarea name="" id="" placeholder="Lacher un com's" className='w-full rounded-xl p-4' />
            <button className='bg-blue-800 px-4 py-3 text-white font-medium rounded-xl'>Envoyer</button>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
  )
}

export default Comments