import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    }
]

const Navbar = () => {

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="px-5 py-4">
                <div className="container flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <a className="text-emerald-700 font-semibold tackeing-widest text-2xl uppercase sm:text-3xl">
                            V-STORE</a>
                    </div>
                    <div className="hidden lg:block">
                            <ul className="flex justify-between items-center gap-4 font-semibold">
                                {
                                    MenuLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link}> {data.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>      
                    <div className="flex justify-between items-left gap-4">
                        <Link to="/cart">
                            <button>
                                <FaShoppingCart />
                            </button>
                        </Link>
                    </div>          
                </div>
            </div>
        </div>
    )

};

export default Navbar