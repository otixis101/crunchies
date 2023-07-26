import MenuList from "./menuList";

const Discover = () => {
  return (
    <>
      <div className="flex flex-col gap-8 py-16 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center">Discover our Menu</h1>
        <ul className="text-primary-700 text-xs items-center md:text-sm flex font-medium gap-7 md:gap-12 justify-center">
          <li className="font-bold">Burgers</li>
          <li>Deserts</li>
          <li>Drinks</li>
          <li>Pasta</li>
          <li>Pizza</li>
          <li>Sides</li>
        </ul>
        <MenuList />

        <div className="flex justify-center">
          <a className="text-xs px-7 py-3 font-bold bg-grey-200 rounded-full" href="/">VIEW ALL MENU</a>
        </div>

      </div>
    </>
  )
}

export default Discover