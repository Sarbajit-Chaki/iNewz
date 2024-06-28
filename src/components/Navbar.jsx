import { useRef } from "react"


const Navbar = ({setCategory}) => {
  const toggle = useRef();

  return (
    <nav className=' text-white flex gap-5 max-sm:px-3 px-5 py-3 bg-[#2a2a2a] justify-between items-center sticky top-0 '>
        <div className="logo cursor-pointer">
            <span className=' font-bold text-xl bg-slate-50 text-black px-2 py-1 rounded-md'>iNewz</span>
        </div>
        
        <div ref={toggle} className="categories p-1 flex gap-x-4 text-lg text-gray-400 font-semibold  ">
          <div className="cursor-pointer hover:underline " onClick={()=>setCategory("business")}>Business</div>
          <div className="cursor-pointer hover:underline " onClick={()=>setCategory("entertainment")}>Entertainment</div>
          <div className="cursor-pointer hover:underline " onClick={()=>setCategory("sports")}>Sports</div>
          <div className="cursor-pointer hover:underline " onClick={()=>setCategory("health")}>Health</div>
          <div className="cursor-pointer hover:underline " onClick={()=>setCategory("technology")}>Technology</div>
        </div>
        
        <span onClick={()=>{toggle.current.style.visibility=="visible"?toggle.current.style.visibility="hidden":toggle.current.style.visibility="visible"}} className="menu material-symbols-outlined cursor-pointer sm:hidden">arrow_drop_down</span>
        
        
    </nav>
  )
}

export default Navbar
