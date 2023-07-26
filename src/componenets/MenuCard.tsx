import burgerPic from '../assets/amirali-mirhashemian-sc5sTPMrVfk-unsplash.png'

const MenuCard: React.FC = () => {
    return (
        <li className='flex flex-col items-center gap-3 p-4 hover:outline outline-1 rounded-lg outline-success-500'>
            <img src={burgerPic} alt="" className='w-[140px]' />
            <div className='text-center flex flex-col'>
                <p className='font-bold text-lg'>Salmon Burger</p>
                <small>beef topped with our homemade sauce, lettuce and tomato</small>
            </div>
            <p className='text-primary-500 font-bold'>$19.99</p>

            <button className='rounded-full text-sm bg-primary-500 text-white px-6 py-2 '>
                Add to Cart
            </button>
        </li>
    )
}

export default MenuCard