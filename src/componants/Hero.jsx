
import Myimg from '../assets/saravana.png'



export default function Hero() {
    const hero = {
        heroname: "Hello,I'm Saravana Kumar",
        developer: "Fullstack Developer",
        discription: `BCA Graduate Crafting Fullstack Web-apps With clean design,solid backend,and a passion for code.`
    }
    return (
        <section id='hero' className='flex flex-col lg:flex-row  py-40 bg  md:justify-center overflow-hidden'>
            <div className='herotext w-full lg:w-1/2 text-white text-center lg:text-start'>
                <div>
                    <h1 className='text-2xl  md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500
                bg-clip-text text-transparent mt-5 shadow-current'>{hero.heroname} </h1>
                    <h1 className='text-2xl md:text-4xl py-2'>{hero.developer}</h1>
                    <p className='w-3/4 mx-auto lg:mx-0'>{hero.discription}</p>
                    <button className='hidden lg:block py-3 px-6 font-medium shadow-btn custom-shadow my-6'><a href="https://drive.google.com/file/d/1owWEDeIozRcomh9H30Ybr5hNPATO_87O/view?usp=drivesdk">Download CV</a></button>
                </div>               
            </div>
            <img className='heroimg w-1/2 mx-auto lg:w-1/3 xl:w-1/5  my-10 lg:m-0 rounded-full custom-shadow' src={Myimg} alt='Saravana Image' />
            <button className='block lg:hidden w-1/2 py-3 px-6  my-6 mx-auto font-medium text-nowrap text-white shadow-btn custom-shadow'><a href="https://drive.google.com/file/d/1owWEDeIozRcomh9H30Ybr5hNPATO_87O/view?usp=drivesdk">Download CV</a> </button>
        </section>
    )
}
