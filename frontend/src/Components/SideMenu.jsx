import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
        <h1 className='mb-1 text-sm font-medium'>Recherche</h1>
        <Search />
        <h1 className='mb-1 mt-5 text-sm font-medium'>Filtres</h1>
        <div className="flex flex-col gap-2 text-sm">
            <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name="sort" value="new-articles" className='appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 rounded-sm checked:bg-blue-800'/>
                Récents
            </label>
            <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name="sort" value="popular" className='appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 rounded-sm checked:bg-blue-800'/>
                Populaires
            </label>
            <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name="sort" value="old-articles" className='appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 rounded-sm checked:bg-blue-800'/>
                Anciens
            </label>
        </div>
        <h1 className='mb-1 mt-8 text-sm font-medium'>Catégories</h1>
        <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/article?cat=all">Tous les articles</Link>
            <Link className="underline" to="/article?cat=journal-de-bord">Journal de bord</Link>
            <Link className="underline" to="/article?cat=ressources">Ressources</Link>
            <Link className="underline" to="/article?cat=dev-personnel">Développement personnel</Link>
            <Link className="underline" to="/article?cat=decouvertes">Découvertes</Link>
            <Link className="underline" to="/article?cat=loisirs">Loisirs</Link>
        </div>
    </div>
  )
}

export default SideMenu