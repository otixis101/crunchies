import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo_2.png'


const Navbar = () => {
    return (
        <nav className='flex justify-between py-4 px-4 md:px-24 items-center text-sm'>
            <ul className='flex'>
                <li><img src={logo} alt="log-image" /></li>
            </ul>
            <ul className='hidden md:flex justify-center gap-12 grow text-primary-700 font-medium'>
                <li>Home</li>
                <li>Menu</li>
                <li>Offers</li>
                <li>Fan Club</li>
                <li>Careers</li>
                <li>News</li>
                <li>Order Now</li>
            </ul>

            <ul className='hidden md:flex justify-between gap-6 items-center text-primary-700'>
                <li><button>Sign In</button></li>
                <li><button className='text-xs bg-primary-500 rounded-full text-white px-6 py-3'>Order Now</button></li>
                <li><button><MagnifyingGlassIcon className='w-5 h-5' /></button></li>
            </ul>

            <button className='md:hidden'>
                <Bars3Icon className='w-7 h-7' />
            </button>
        </nav>
    )
}

export default Navbar