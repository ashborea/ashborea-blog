import {React, useState} from 'react'
import PostList from '../Components/PostList'
import SideMenu from '../Components/SideMenu'

const ArticlePage = () => {
    const [open, setOPen] = useState(false)

  return (
    <div className="">
        <h1 className="mb-8 text-2xl">Articles de la catégorie : catégorie</h1>
        <button onClick={() => setOPen(!open)} className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden">
            {open ? 'Fermer' : 'Recherche & Filtres'}
        </button>
        <div className="flex gap-8 flex-col-reverse md:flex-row">
            <div className="">
                <PostList />
            </div>
            <div className={`${open ? "block" : "hidden"} md:block`}>
                <SideMenu />
            </div>
        </div>

    </div>
  )
}

export default ArticlePage