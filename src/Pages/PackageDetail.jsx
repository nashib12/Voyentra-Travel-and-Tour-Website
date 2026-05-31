import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb';
import DOMPurify from 'dompurify';
import LocationIcon from '../../public/Icons/location.png'
import CheckIcon from '../../public/Icons/check.png'
import RemoveIcon from '../../public/Icons/remove.png'
import ClockIcon from '../../public/Icons/clock.png'
import DataContext from '../Context/DataContext';
import DownBtnIcon from '../../public/Icons/Button Icons/down-chevron.png';
import Loader from '../Components/Loader';

const PackageDetail = () => {
    const { slug } = useParams();
    const { setModal, setSelectedPackage, detailType, setDetailType } = useContext(DataContext);
    const [ data, setData] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    useEffect(() => {
        async function fetchData () {
            try {
                const response = await axios.get(
                    detailType === "package" ? `http://127.0.0.1:8000/api/package/${slug}` : 
                    `http://127.0.0.1:8000/api/activity/${slug}`);
                if (response.status === 200) {
                    setData(response.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [slug, detailType]);

    if (!data || data.length === 0) return (
        <div className='px-6 sm:px-12 lg:px-24 py-12 lg:py-24 h-screen'>
            <Loader />
        </div>
    );
  return (
    <div>
        <BreadCrumb title={data.title} />
        <section className='px-6 sm:px-12 lg:px-24 py-12 lg:py-24'>
            <div className='md:grid grid-cols-3 gap-6'>
                <div className='col-span-2'>
                    <img src={data.image_url} alt={data.title} className='w-full h-120 rounded-xl object-cover mb-8' />
                    <h3 className='text-[var(--neutral-900)] mb-3'>{data.title}</h3>
                    <div className='flex items-center gap-6 mb-6'>
                        <div className='flex gap-2'>
                            <img src={ClockIcon} alt="clock icon" className='h-5 w-5 object-contain' />
                             { detailType === 'package' ? (<span className='text-[var(--secondary-500)]'>{ data.no_days} Days / ${data.no_nights} Nights</span>) : 
                             (<span className='text-[var(--secondary-500)]'>{ data.duration }</span>) }
                        </div>
                        { detailType === 'package' && (
                            <div className='flex gap-2'>
                                <img src={LocationIcon} alt="location icon" className='h-5 w-5 object-contain' />
                                <span className='text-[var(--secondary-500)]' >{data.destinations?.destination}</span>
                            </div>
                        )}
                    </div>
                    <div className='text-[var(--neutral-700)] w-full prose' dangerouslySetInnerHTML={{ __html : DOMPurify.sanitize(data.description)}} />
                    <div>
                        <h3 className='text-[var(--neutral-900)] mb-6'>Itinerary</h3>
                        {data.itinerary?.map((item, index )=> {
                           return (
                           <div key={item.id} className={`${selectedIndex === index ? 'h-fit' : 'h-18 overflow-hidden'}  transition-all duration-300 ease-in-out border rounded-md mb-6`}>
                                    <div className='h-18 flex items-center justify-between px-6 py-3 cursor-pointer' onClick={() => setSelectedIndex(curr => curr === index ? '' : index)}>
                                        <h5 className='text-[var(--primary-500)]'>{item.title}</h5>
                                        <img src={DownBtnIcon} alt="down button icon" className={`${selectedIndex === index ? 'rotate-180' : 'rotate-0'} h-8 w-8 object-contain transition-all duration-300 ease-in-out`} />
                                    </div>
                                    <div className="border-t prose w-full px-6 py-6" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.description)}} />
                            </div>
                        )})}
                    </div>
                </div>
                <div className='sticky top-6 h-fit'>
                    <div className='border-2 border-[var(--primary-500)] px-4 py-6 rounded-lg'>
                        <div className='mb-6'>
                            <div className='flex items-start gap-4 mb-2'>
                                <div className='h-8 w-3 bg-[var(--primary-500)] mt-2 rounded-xs' />
                                <h4 className='text-[var(--neutral-900)]'>{data.title}</h4>
                            </div>
                            <span className='text-[var(--neutral-700)]'>To help you plan your trip, we have put together a list of what's included and what's not included in your tour package.</span>
                        </div>
                        <div className='ml-4 mb-6'> 
                            <h5 className='text-[var(--primary-500)] underline mb-2'>What is included?</h5>
                            <div className='text-[var(--neutral-700)] prose' dangerouslySetInnerHTML={{ __html : DOMPurify.sanitize(data.included)}} />
                        </div>
                        <div className='ml-4 mb-6'> 
                            <h5 className='text-[var(--primary-500)] underline mb-2'>What is excluded?</h5>
                            <div className='text-[var(--neutral-700)] prose' dangerouslySetInnerHTML={{ __html : DOMPurify.sanitize(data.excluded)}} />
                        </div>
                        <div className='mb-6'>
                            <h5 className='text-[var(--primary-500)] mb-2 underline'>How much it cost?</h5>
                            <table className='table-auto w-full'>
                                <thead>
                                    <tr className='h-11 bg-[var(--primary-300)] text-[var(--neutral-100)] border border-black'>
                                        <th className='border-r border-black'>S.N.</th>
                                        <th className='border-r border-black'>Group Size</th>
                                        <th>Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.pricing.length === 0 ? <tr className='h-10 bg-[var(--primary-100)] text-[var(--neutral-700)] border-b border-x border-black text-center'>
                                        <td colSpan={3}>No data found</td>
                                    </tr> : data.pricing.map( (item, index) => (
                                        <tr key={item.id} className='h-8 bg-[var(--primary-100)] text-[var(--neutral-700)] border-b border-x border-black text-center'>
                                            <td className='border-r border-black '>{index + 1}</td>
                                            <td className='border-r border-black '> {` ${item.min_no_people}
                                            ${item.max_no_people !== null ? '-' : ''} ${item.max_no_people === null ? "and above" : item.max_no_people}`} Person</td>
                                            <td>${item.price_per_person}/Person</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <button onClick={() => {
                            setModal(true);
                            setSelectedPackage(data.title);   
                            detailType === 'package' ? setDetailType('package') : setDetailType('activity');
                        }} className='h-12 w-full rounded-sm cursor-pointer bg-[var(--primary-500)] text-[var(--neutral-100)]'>Book Now</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default PackageDetail