import '../../assets/css/style4.css';

export const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 p-5 ">
      <div className="flex items-center justify-between ">
        <a href="/" className="navbar-logo p-2 rounded-full border-blue-700 border-solid bg-blue-300  text-xs">SR</a>
        <ul className="navbar-menu flex w-2/3 items-center justify-evenly">
          <li className=' pt-1 pr-1.5 pb-1 pl-1.5'><a href="/" className=''>Home</a></li>
          <li className=' pt-1 pr-1.5 pb-1 pl-1.5'><a href="/about">About</a></li>
          <li className=' pt-1 pr-1.5 pb-1 pl-1.5'><a href="/projects">Projet</a></li>
          <li className=' pt-1 pr-1.5 pb-1 pl-1.5'><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );

}