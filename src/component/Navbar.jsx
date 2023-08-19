import Link from "next/link";

const navLinks=[
    {
        path:'/',
        title:'Home',
        
    },
    {
        path:'/about',
        title:'About',

    },
    {
        path:'/profile',
        title:'Profile',

    },
    {
        path:'/blogs',
        title:'Blogs',

    },
    {
        path:'/dashboard',
        title:'Dashboard',

    },
]

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between container">
           <h1 className="text-3xl font-semibold">Learn Next</h1> 
           <ul className="flex items-center justify-center">
            {
                navLinks.map(({path, title})=><li  key={path}>
                    <Link className="mx-3" href={path}>{title}</Link>
                </li>)
            }
           </ul>
        </nav>
    );
};

export default Navbar;