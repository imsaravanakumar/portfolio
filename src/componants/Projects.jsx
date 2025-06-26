import hosimg from '../assets/hospital.png';
import bus from '../assets/busweb.jpg';

export default function Projects() {
    const details = {
        project: [
            {
                p_name: "Hospital Management Page",
                image: hosimg,
                info: "Responsive HTML/CSS Layout For Hospital Management using HTML, CSS, JS"
            },
            {
                p_name: "Bus Management Page",
                image: bus,
                info: "Responsive HTML/CSS Layout For Bus Management using HTML, CSS, JS"
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
                                <a href="">Live Preview</a>
                            </button>
                            <button className='px-4 py-2 rounded-full border text-nowrap border-gray-500 text-white text-xs md:text-sm hover:bg-gray-700'>
                                <a href="">Check on GitHub</a>
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
