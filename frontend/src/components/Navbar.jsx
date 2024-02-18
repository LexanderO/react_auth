import {useState} from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
const [showMenu, setShowMenu] = useState(false);

const handleMenu = () => {
    setShowMenu(!showMenu);
}

const links = [
    {id: 1, text: "home"},
    {id: 2, text: "register"},
    {id: 3, text: "login"},
    {id: 4, text: "logout"},
];

    return (
        <div className='bg-black flex justify-between items-center h-24 w-full mx-auto text-white'>
            <h1 className='w-full text-3xl font-bold text-white p-1'>Auth</h1>
            <ul className='hidden md:flex'>
            {links.map((link) => (
                <li key={link.id} className='p-4'>
                    <NavLink to={`/${link.text}`}>{link.text}</NavLink>
                </li>
                ))}
            </ul>
        </div>
    )
};
export default Navbar;