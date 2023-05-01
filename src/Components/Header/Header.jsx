import React, {useRef} from 'react'
import './Header.css'


const nav__items = [
    {
        path: "",
        display: "Home"
    },
    {
        path: "about",
        display: "About"
    },
    {
        path: "portfolio",
        display: "Portfolio"
    },
    {
        path: "contact",
        display: "Contact"
    },
]

function Header() {

    const menuRef = useRef(null)
    const menuToggler = () => {
        menuRef.current.classList.toggle("active-menu")
    }

    return ( 
        <div className='header  py-4 bg-[color:var(--card-color)]'>
            <div className="container mx-auto px-4 flex justify-between text-[color:#fff]">
                <div className="flex text-sm md:text-lg">
                    <div className="flex items-center justify-center
                            bg-[color:var(--primary-color-two)] rounded-full w-12 h-12 font-semibold">
                        M
                    </div>
                    <div className="ps-2">
                        <p className='font-bold'>Mohammad</p>
                        <p>personal</p>
                    </div>
                </div>
                <div className="nav__links md:flex md:items-center bg-[color: var(--bg-color)]"
                    ref={menuRef}
                    > 
                    <ul className='flex items-start gap-6 m-0 bg-[color: var(--bg-color)]'>
                        <li className="text-end text-2xl self-end cursor-pointer block md:hidden "
                            onClick={menuToggler}>
                            <i className="ri-close-fill"></i>
                        </li>
                        {
                            nav__items.map((item, index) => (
                                <li key={index} className='text-sm sm:text-lg tarnsition ease-out 
                                    hover:text-[color:var(--primary-color-two)]'>
                                    <a 
                                        className='no-underline'
                                        href={`#${item.path} `}
                                        onClick={menuToggler}>
                                        {item.display}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-2 block md:hidden'>
                    <div className="menu_toggler cursor-pointer rounded border
                        border-white py-1 px-2"
                        onClick={menuToggler}>
                        <i class="ri-menu-line px-2"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header