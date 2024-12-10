import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between bg-yellow-300 p-5'>
        <div>
            <a href="" className='font-bold'>{`<AshBorea/>`}</a>
        </div>
        <nav className='flex gap-4'>
            <a href="">Connexion</a>
            <a href="">Inscription</a>
        </nav>
    </header>
  )
}

export default Navbar