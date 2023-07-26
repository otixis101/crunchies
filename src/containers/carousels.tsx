import slide1 from '../assets/Web_banners_ 1.png'

const Carousels = () => {
    return (
        <div className='relative'>
            <img src={slide1} alt="slide1" className='w-full' />
            <button className='hidden md:flex px-10 py-3 bg-primary-100 rounded-full absolute bottom-5 left-24 text-sm text-primary-500 font-semibold '>BUY NOW</button>
            <div className='absolute bottom-0 w-full flex justify-center gap-4 p-4'>
                <button className='bg-white w-3 h-3 rounded-full'></button>
                <button className='bg-white/30 w-3 h-3 rounded-full'></button>
                <button className='bg-white/30 w-3 h-3 rounded-full'></button>
            </div>
        </div>
    )
}

export default Carousels