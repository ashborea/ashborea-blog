import { useUser } from '@clerk/clerk-react'
import React from 'react'
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from 'react-quill-new';

const WriteArticle = () => {
    const {isLoaded, isSignedIn} = useUser(false)
    
    if(!isLoaded) <div>Loading...</div>
    if(isLoaded && !isSignedIn) <div>Pour raconter ta vie, il faut te connecter !!</div>

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
        <h1 className='text-xl font-light'>Ecrire un article</h1>
        <form action="" className='flex flex-col gap-4 flex-1 mb-6'>
            <button className='p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white w-max'>Image principale</button>
            <input type="text" placeholder="Titre de l'article" className='text-4xl font-semibold bg-transparent outline-none' />
            <div className=" flex items-center gap-4">
                <label htmlFor="" className='text-sm'>Choisir une catégorie</label>
                <select name="cat" id="" className='p-2 rounded-xl bg-white shadow-md'>
                    <option value="general">Général</option>
                    <option value="journal-de-bord">Journal de bord</option>
                    <option value="ressources">Ressources</option>
                    <option value="developpement-personnel">Développement personnel</option>
                    <option value="decouvertes">Découvertes</option>
                    <option value="loisirs">Loisirs</option>
                </select>
            </div>
            <textarea name="description" id="" placeholder='Description' className='p-2 rounded-xl bg-white shadow-md' />
            <ReactQuill theme='snow' className='flex-1 rounded-xl bg-white shadow-md' />
            <button className='bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36'>Publier</button>
        </form>

    </div>
  )
}

export default WriteArticle