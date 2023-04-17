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
        <div className='header'>
            <div className="container py-4">
                <div className="logo d-flex">
                    <div className="logo__img d-flex align-items-center px-3">
                        M
                    </div>
                    <div className="ps-2">
                        <p className='fw-bold'>Mohammad</p>
                        <p>personal</p>
                    </div>
                </div>
                <div className="nav__links"
                    ref={menuRef}
                    >
                    <ul className='d-flex align-items-start px-3'>
                        <li className="text-end align-self-end d-block d-md-none"
                            onClick={menuToggler}>
                            <i className="ri-close-fill"></i>
                        </li>
                        {
                            nav__items.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={`#${item.path}`}
                                        onClick={menuToggler}>
                                        {item.display}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='header__button d-flex align-items-center gap-2 d-block d-md-none'>
                    {/* <button>
                        <i class="ri-send-plane-line pe-1"></i>
                        Let's Talk
                    </button> */}
                    <div className="menu_toggler"
                        onClick={menuToggler}>
                        <i class="ri-menu-line px-1"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header