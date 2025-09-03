import techstore from '../assets/Techstore.png';
import bus from '../assets/busweb.jpg';

export default function Projects() {
    const details = {
        project: [
            {
                p_name: "Tech Store",
                image: techstore,
                info: "Tech Items Selling E-commerce Site Using Mern-stack",
                link:"https://tech-store-frontend.onrender.com",
                githublink:"https://github.com/imsaravanakumar/Tech-Store"
            },
            {
                p_name: "Bus Management Page",
                image: bus,
                info: "Responsive HTML/CSS Layout For Bus Management using HTML, CSS, JS",
                link:"https://tech-store-frontend.onrender.com",
                githublink:"https://github.com/imsaravanakumar/Tech-Store"
            }
        ]
    };

    return (
        <section id='project' className="text-white py-32 bg overflow-hidden">
            <h1 className="font-bold text-3xl text-center mb-10">Projects</h1>

            <div className='flex flex-wrap justify-center gap-8 px-4'>

                {details.project.map((pro, index) => (
                    <div key={index} className={`${'pro'+index} bg-gray-800 border border-gray-700 p-6 w-72  sm:w-80 h-96 sm:h-auto rounded-lg `}>

                        <img className='w-96 h-44 object-cover mb-4 rounded' src={pro.image} alt={pro.p_name} />

                        <h3 className='text-xl font-semibold mb-2 text-nowrap'>{pro.p_name}</h3>
                        <p className='mb-4 text-gray-400 text-xs md:text-sm'>{pro.info}</p>

                        <div className='flex justify-between gap-4'>
                            <button className='px-4 py-2 text-xs md:text-sm text-nowrap shadow-btn'>
                                <a href={pro.link}>Live Preview</a>
                            </button>
                            <button className='px-4 py-2 rounded-full border text-nowrap border-gray-500 text-white text-xs md:text-sm hover:bg-gray-700'>
                                <a href={pro.githublink}>Check on GitHub</a>
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
