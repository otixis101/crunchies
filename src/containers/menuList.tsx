
import MenuCard from '../componenets/MenuCard';

const MenuList = () => {
    const numbers = [1, 2, 3, 4];
    return (
        <div className='md:px-64 px-4'>
            <ul className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-2 grid-rows-1">
                {numbers.map((number) => (
                    <MenuCard key={number} />
                ))}
            </ul>
        </div>
    )
}

export default MenuList