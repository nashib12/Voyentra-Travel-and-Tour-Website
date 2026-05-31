import React, { useContext, useEffect, useState } from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import DataContext from '../Context/DataContext'
import ClockImg from '../../public/Icons/clock.png'
import LocationImg from '../../public/Icons/location.png'
import StarImg from '../../public/Icons/star-fil.png'
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const Packages = () => {
    const { packages, detailType, setDetailType } = useContext(DataContext);
    const [searchParams] = useSearchParams();
    const [ options, setOptions] = useState(packages);

    const destinationId = searchParams.get('destination_id');
    const travelId = searchParams.get('travel_id');
    const categoryId = searchParams.get('category_id');

    useEffect(() => {
        async function fetchData() {
            try {
                const params = {};
                if (travelId) params.travel_id = travelId;
                if (destinationId) params.destination_id = destinationId;
                if (categoryId) params.category_id = categoryId;
                const response = await axios.get( detailType === 'package' ? 'http://127.0.0.1:8000/api/package' : 'http://127.0.0.1:8000/api/activity', { params });
                // console.log(response);
                if (response.status === 200) {
                    setOptions(response.data.data.data);
                }
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [destinationId, travelId, categoryId, detailType]);


  return (
    <div>
        <BreadCrumb title={detailType === "package" ? 'Packages' : 'Activities'} />
        <section className='px-6 sm:px-12 lg:px-24 py-12 lg:py-24'>
            <div className='grid md:grid-cols-3 gap-y-6 gap-x-0 md:gap-6'>
                { options.length === 0 ? (
                    <h2 className='text-[var(__neutral-900)] text-center'>No data found</h2>
                ) : options.map(item => (
                    <div key={item.id}>
                        <Link to={`/package-details/${item.slug}`} onClick={() => {
                            detailType === "package" ? setDetailType('package') : setDetailType('activity');
                        }}>
                            <div className='rounded-xl bg-[var(--neutral-100)] overflow-hidden h-fit w-fit'>
                                <div className='cursor-pointer overflow-hidden'>
                                    <img src={item.image_url} alt="image" className='h-60 w-120 object-cover transition-transform duration-300 ease-in-out hover:scale-110' />
                                </div>
                                <div className='px-4 md:px-6 py-6'>
                                    {detailType === "package" ? (
                                        <div className='flex items-center gap-2 mb-3'>
                                            <img src={LocationImg} alt="location icon" className='h-5 w-5 object-contain' />
                                            <span className='text-[var(--secondary-500)]'>{item.destinations?.destination}</span>
                                        </div>
                                    ) : (
                                        <div className='flex items-center flex-wrap gap-2 mb-3'> 
                                            <button className='h-9 px-4 rounded-sm bg-[var(--secondary-500)] text-[var(--primary-100)]' >{item.categories?.title}</button>                                       
                                        </div>
                                    )}
                                    <h5 className='text-[var(--neutral-900)] mb-3 transition-colors duration-300 ease-in-out hover:text-[var(--secondary-500)]'>{item.title}</h5>
                                    <div className='flex items-center gap-2 mb-3'>
                                        <img src={StarImg} alt="star icon" className='h-4 w-4 md:h-5 md:w-5 object-contain' />
                                        <span className='text-[var(--secondary-500)]'>4.9 (100 reviews)</span>
                                    </div>
                                    <div className='flex items-center flex-wrap gap-2 mb-6'> 
                                        { item.travels?.map(i => (
                                            <div key={i.id} className='px-2 h-fit w-fit py-1 rounded-xs bg-[var(--primary-100)] text-[var(--primary-500)]'><span>{i.category}</span></div>
                                        ))}
                    
                                    </div>
                                    <div className='border-t-2 border-[var(--primary-500)] rounded-t-xl pt-3 flex justify-between px-2'>
                                        { detailType === "package" && <div className='flex gap-2 items-center'>
                                            <span className='text-[var(--secondary-500)]'>From:</span>
                                            <h6 className='text-[var(--neutral-900)]'>${item.base_price}<span>/Person</span></h6>
                                        </div>}
                                        <div className='flex items-center gap-2'>
                                            <img src={ClockImg} alt="clock icon" className='h-4 w-4 md:h-5 md:w-5 object-conatin' />
                                            {detailType === "package" ? (
                                                <span className='text-[var(--secondary-500)]'>{item.no_days}D/{item.no_nights}N</span>
                                            ) : (
                                                <span className='text-[var(--secondary-500)]'>{item.duration}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Packages