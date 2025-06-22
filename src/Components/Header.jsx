
const Header = () => {
  return (
    <header className="w-full px-8 py-6  fixed top-0 left-0 right-0  flex  justify-around  items-center z-50 ">
      <h2 className="text-4xl font-bold font-sans max-sm:hidden text-slate-100" >Yadhidya</h2>
     
      <nav>
        <ul className="flex flex-wrap gap-9 text-xl  md:text-xl max-md:hidden font-medium text-gray-200">
          <li><a href="#about_me" className="hover:text-gray-500 transition">About me</a></li>
          <li><a href="#skills" className="hover:text-gray-500 transition">Skills</a></li>
          <li><a href="#CareerHighlights" className="hover:text-gray-500 transition">Career Highlights</a></li>
          <li><a href="#Achievements" className="hover:text-gray-500 transition">Achievements</a></li>
          <li><a href="#education" className="hover:text-gray-500 transition">Education</a></li>
          <li><a href="#contact_me" className="hover:text-gray-500 transition">Contact me</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
