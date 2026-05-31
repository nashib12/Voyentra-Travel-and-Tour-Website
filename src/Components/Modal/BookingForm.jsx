import React, { useContext, useEffect } from 'react'
import { createPortal } from 'react-dom'
import DataContext from '../../Context/DataContext'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

const BookingForm = () => {
    const { modal, setModal, packages, selectedPackage, setSelectedPackage, detailType, activities, setDetailType } = useContext(DataContext);
    const { register, reset, handleSubmit, formState:{errors} } = useForm({ 
        defaultValues:{
            package : '',
            fName : '',
            arrival_date : '',
            contact : '',
            email : '',
            no_guest : 1,
            expected_time : 1,
        }
    });

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        }
    }, [modal]);

    useEffect(() => {
        reset({
            package : selectedPackage ?? '',
            fName : '',
            arrival_date : '',
            contact : '',
            email : '',
            no_guest : 1,
            expected_time : 1,
        });
    }, [selectedPackage]);

    if (!modal) return null;

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/booking', data);
            if (response.status === 200) {
                toast.success(response.data.message);
                reset();
                setModal(false);
                setSelectedPackage(null);
            }
        } catch (error) {
            console.log(error);
        }
    }

  return createPortal((
    <section className='fixed inset-0 bg-black/60 z-999 flex items-center justify-center'>
        <div className='bg-[var(--neutral-100)] h-fit w-full max-w-xl px-10 py-10 rounded-xl shadow-xl'>
            <h4 className='text-[var(--neutral-900)] mb-6'>Book package</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-6'>
                    <label htmlFor="package" className='block mb-2 text-[var(--neutral-700)]'>Select a package <span className='text-red-600'>*</span></label>
                    <select id="package" {...register('package', { required: 'Please Select a package'})} className='outline-none border rounded-sm px-2 h-10 w-full cursor-pointer'>
                        <option value="" hidden>-- Select a option --</option>
                        { detailType === 'activity' ? activities.map(item => (
                            <option key={item.id} className='text-[var(--neutral-700)]  hover:bg-[var(--primary-100)]' value={item.title} >{ item.title }</option>
                        )) : packages.map(item => (
                            <option key={item.id} className='text-[var(--neutral-700)]  hover:bg-[var(--primary-100)]' value={item.title} >{ item.title }</option>
                        )) }
                    </select>
                    { errors.package && <span className='block text-red-600 mt-2'>* {errors.package.message}</span>}
                </div>
                <div className='grid grid-cols-2 gap-4 mb-6'>
                    <div>
                        <label htmlFor="fName" className='block mb-2 text-[var(--neutral-700)]'>Enter your full name <span className='text-red-600'>*</span></label>
                        <input id='fName' type="text" className='outline-none border rounded-sm px-2 h-10 w-full' placeholder='e.g. Jhon Doe'
                            {...register('fName', { required: "Please enter your full name."})} />
                        { errors.fName && <span className='block text-red-600 mt-2' >* {errors.fName.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="arrivalDate" className='text-[var(--neutral-700)] block mb-2'>Excpted arrival date <span className='text-red-600'>*</span></label>
                        <input id='arrivalDate' type="date" className='outline-none border rounded-sm h-10 w-full px-2' placeholder='Address'
                            {...register('arrival_date', { required: 'Please select a date'})} />
                        { errors.arrival_date && <span className='text-red-600 block mt-2'>* {errors.arrival_date.message}</span>}
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mb-6'>
                    <div>
                        <label htmlFor="contact" className='block mb-2 text-[var(--neutral-700)]'>Contact info. <span className='text-red-600'>*</span></label>
                        <input type="text" className='outline-none border rounded-sm h-10 w-full px-2' placeholder='+977 980-0000000'
                            {...register('contact', { required: 'Please enter your contact details.'})} />
                        { errors.contact && <span className='block mt-2 text-red-600'>* {errors.contact.message}</span>}
                    </div>
                    <div >
                        <label htmlFor="email" className='block mb-2 text-[var(--neutral-700)]'>E-mail Address <span className='text-red-600'>*</span></label>
                        <input type="email" id='email' className='h-10 w-full px-2 outline-none border rounded-sm' placeholder='example@example.com' 
                        {...register('email', { required: 'Please enter your email address'})} />
                        { errors.email && <span className='block mt-2 text-red-600'>* {errors.email.message} </span>}
                    </div>
                </div>
                <div className='mb-6 grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="guest" className='text-[var(--neutral-700)] block mb-2'>No. of guest <span className='text-red-600'>*</span></label>
                        <input type="text" id='guets' className='px-2 h-10 w-full outline-none border rounded-sm' placeholder='e.g. 1, 2'
                            {...register('no_guest', { required: 'Please enter total no. of guest.'})} />
                        { errors.no_guest && <span className='text-red-600 mt-2 block'>* {errors.no_guest.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="days" className='text-[var(--neutral-700)] block mb-2'>Excpted stay days <span className='text-red-600'>*</span></label>
                        <input type="text" id='guets' className='px-2 h-10 w-full outline-none border rounded-sm' placeholder='e.g. 1, 2'
                            {...register('expected_time', { required: 'Please enter excpetd stay day.'})} />
                        { errors.expected_time && <span className='text-red-600 mt-2 block'>* {errors.expected_time.message}</span>}
                    </div>
                </div>
                <div className='mb-6'>
                    <input type="checkbox" id='terms' />
                    <label htmlFor="terms" className='text-[var(--neutral-700)] ml-2'> I have read and agree to all <a className='text-[var(--primary-500)] cursor-pointer'>Terms and condition</a></label>
                </div>
                <div className='flex items-center gap-4 w-full'>
                    <button onClick={() => {
                        setModal(false);
                        reset();
                        setSelectedPackage(null);
                        setDetailType('');
                    }} type='button' className='h-11 flex-1 text-[var(--primary-500)] bg-[var(--neutral-100)] border border-[var(--neutral-900)] cursor-pointer rounded-sm'>Cancel</button>
                    <button type='submit' className='h-11 flex-1 bg-[var(--primary-500)] text-[var(--neutral-100)] cursor-pointer rounded-sm'>Book my package</button>
                </div>
            </form>
        </div>
    </section>
  ), document.getElementById('modalRoot'))
}

export default BookingForm

// import React, { useContext, useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import DataContext from '../../Context/DataContext';
// import { useForm } from 'react-hook-form';
// import emailjs from '@emailjs/browser';
// import { toast } from 'react-toastify';

// const BookingForm = () => {

//     const {
//         modal,
//         setModal,
//         packages,
//         selectedPackage,
//         setSelectedPackage
//     } = useContext(DataContext);

//     const {
//         register,
//         reset,
//         handleSubmit,
//         formState: { errors }
//     } = useForm({
//         defaultValues: {
//             package: '',
//             fName: '',
//             arrival_date: '',
//             contact: '',
//             email: '',
//             no_guest: 1,
//             expected_time: 1,
//         }
//     });

//     useEffect(() => {

//         if (modal) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = '';
//         }

//         return () => {
//             document.body.style.overflow = '';
//         };

//     }, [modal]);

//     useEffect(() => {

//         reset({
//             package: selectedPackage ?? '',
//             fName: '',
//             arrival_date: '',
//             contact: '',
//             email: '',
//             no_guest: 1,
//             expected_time: 1,
//         });

//     }, [selectedPackage, reset]);

//     if (!modal) return null;

//     const onSubmit = async (data) => {

//         const templateParams = {
//             full_name: data.fName,
//             package: data.package,
//             arrival_date: data.arrival_date,
//             contact: data.contact,
//             email: data.email,
//             no_guest: data.no_guest,
//             expected_time: data.expected_time,
//             time: new Date().toLocaleString(),
//         };

//         try {

//             await emailjs.send(
//                 'service_p57khyd',
//                 'template_xthls0e',
//                 templateParams,
//                 'uWnt9KHIxTaoZKQIl'
//             );

//             toast.success('Booking request sent successfully.');

//             reset();

//             setModal(false);

//             setSelectedPackage(null);

//         } catch (error) {

//             console.log(error);

//             toast.error('Failed to send booking request.');

//         }
//     };

//     return createPortal(

//         <section className='fixed inset-0 bg-black/60 z-[999] flex items-center justify-center px-4'>

//             <div className='bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden'>

//                 {/* Header */}
//                 <div className='bg-[var(--primary-500)] px-10 py-6'>
//                     <h2 className='text-2xl font-semibold text-white'>
//                         Book Your Package
//                     </h2>

//                     <p className='text-white/80 mt-2 text-sm'>
//                         Fill in the form below to confirm your travel booking.
//                     </p>
//                 </div>

//                 {/* Form */}
//                 <form
//                     onSubmit={handleSubmit(onSubmit)}
//                     className='px-10 py-8'
//                 >

//                     {/* Package */}
//                     <div className='mb-6'>

//                         <label
//                             htmlFor='package'
//                             className='block mb-2 text-sm font-medium text-gray-700'
//                         >
//                             Select Package
//                             <span className='text-red-600'> *</span>
//                         </label>

//                         <select
//                             id='package'
//                             className='outline-none border border-gray-300 rounded-lg px-3 h-11 w-full focus:border-[var(--primary-500)]'
//                             {...register('package', {
//                                 required: 'Please select a package'
//                             })}
//                         >

//                             <option value='' hidden>
//                                 -- Select a package --
//                             </option>

//                             {packages.map((item) => (
//                                 <option
//                                     key={item.id}
//                                     value={item.title}
//                                 >
//                                     {item.title}
//                                 </option>
//                             ))}

//                         </select>

//                         {errors.package && (
//                             <span className='text-red-600 text-sm mt-2 block'>
//                                 * {errors.package.message}
//                             </span>
//                         )}

//                     </div>

//                     {/* Name + Date */}
//                     <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-6'>

//                         <div>

//                             <label
//                                 htmlFor='fName'
//                                 className='block mb-2 text-sm font-medium text-gray-700'
//                             >
//                                 Full Name
//                                 <span className='text-red-600'> *</span>
//                             </label>

//                             <input
//                                 id='fName'
//                                 type='text'
//                                 placeholder='e.g. John Doe'
//                                 className='outline-none border border-gray-300 rounded-lg px-3 h-11 w-full focus:border-[var(--primary-500)]'
//                                 {...register('fName', {
//                                     required: 'Please enter your full name'
//                                 })}
//                             />

//                             {errors.fName && (
//                                 <span className='text-red-600 text-sm mt-2 block'>
//                                     * {errors.fName.message}
//                                 </span>
//                             )}

//                         </div>

//                         <div>

//                             <label
//                                 htmlFor='arrivalDate'
//                                 className='block mb-2 text-sm font-medium text-gray-700'
//                             >
//                                 Arrival Date
//                                 <span className='text-red-600'> *</span>
//                             </label>

//                             <input
//                                 id='arrivalDate'
//                                 type='date'
//                                 className='outline-none border border-gray-300 rounded-lg px-3 h-11 w-full focus:border-[var(--primary-500)]'
//                                 {...register('arrival_date', {
//                                     required: 'Please select arrival date'
//                                 })}
//                             />

//                             {errors.arrival_date && (
//                                 <span className='text-red-600 text-sm mt-2 block'>
//                                     * {errors.arrival_date.message}
//                                 </span>
//                             )}

//                         </div>

//                     </div>

//                     {/* Contact + Email */}
//                     <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-6'>

//                         <div>

//                             <label
//                                 htmlFor='contact'
//                                 className='block mb-2 text-sm font-medium text-gray-700'
//                             >
//                                 Contact Number
//                                 <span className='text-red-600'> *</span>
//                             </label>

//                             <input
//                                 id='contact'
//                                 type='text'
//                                 placeholder='+977 9800000000'
//                                 className='outline-none border border-gray-300 rounded-lg px-3 h-11 w-full focus:border-[var(--primary-500)]'
//                                 {...register('contact', {
//                                     required: 'Please enter contact number'
//                                 })}
//                             />

//                             {errors.contact && (
//                                 <span className='text-red-600 text-sm mt-2 block'>
//                                     * {errors.contact.message}
//                                 </span>
//                             )}

//                         </div>

//                         <div>

//                             <label
//                                 htmlFor='email'
//                                 className='block mb-2 text-sm font-medium text-gray-700'
//                             >
//                                 Email Address
//                                 <span className='text-red-600'> *</span>
//                             </label>

//                             <input
//                                 id='email'
//                                 type='email'
//                                 placeholder='example@example.com'
//                                 className='outline-none border border-gray-300 rounded-lg px-3 h-11 w-full focus:border-[var(--primary-500)]'
//                                 {...register('email', {
//                                     required: 'Please enter email address'
//                                 })}
//                             />

//                             {errors.email && (
//                                 <span className='text-red-600 text-sm mt-2 block'>
//                                     * {errors.email.message}
//                                 </span>
//                             )}

//                         </div>

//                     </div>

//                     {/* Guests + Days */}
//                     <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-6'>

//                         <div>

//                             <label
//                                 htmlFor='guest'
//                                 className='block mb-2 text-sm font-medium text-gray-700'
//                             >
//                                 Number of Guests
//                                 <span className='text-red-600'> *</span>
//                             </label>

//                             <input
//                                 id='guest'
//                                 type='number'
//                                 min='1'
//                                 placeholder='e.g. 2'
//                                 className='outline-none border border-gray-300 rounded-lg px-3 h-11 w-full focus:border-[var(--primary-500)]'
//                                 {...register('no_guest', {
//                                     required: 'Please enter number of guests'
//                                 })}
//                             />

//                             {errors.no_guest && (
//                                 <span className='text-red-600 text-sm mt-2 block'>
//                                     * {errors.no_guest.message}
//                                 </span>
//                             )}

//                         </div>

//                         <div>

//                             <label
//                                 htmlFor='days'
//                                 className='block mb-2 text-sm font-medium text-gray-700'
//                             >
//                                 Expected Stay Days
//                                 <span className='text-red-600'> *</span>
//                             </label>

//                             <input
//                                 id='days'
//                                 type='number'
//                                 min='1'
//                                 placeholder='e.g. 5'
//                                 className='outline-none border border-gray-300 rounded-lg px-3 h-11 w-full focus:border-[var(--primary-500)]'
//                                 {...register('expected_time', {
//                                     required: 'Please enter expected stay days'
//                                 })}
//                             />

//                             {errors.expected_time && (
//                                 <span className='text-red-600 text-sm mt-2 block'>
//                                     * {errors.expected_time.message}
//                                 </span>
//                             )}

//                         </div>

//                     </div>

//                     {/* Terms */}
//                     <div className='mb-8 flex items-start gap-3'>

//                         <input
//                             type='checkbox'
//                             id='terms'
//                             className='mt-1'
                            
//                         />

//                         <label
//                             htmlFor='terms'
//                             className='text-sm text-gray-600'
//                         >
//                             I have read and agree to all
//                             <span className='text-[var(--primary-500)] cursor-pointer ml-1'>
//                                 Terms & Conditions
//                             </span>
//                         </label>

//                     </div>

//                     {/* Buttons */}
//                     <div className='flex items-center gap-4'>

//                         <button
//                             type='button'
//                             onClick={() => {
//                                 setModal(false);
//                                 reset();
//                                 setSelectedPackage(null);
//                             }}
//                             className='h-11 flex-1 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition'
//                         >
//                             Cancel
//                         </button>

//                         <button
//                             type='submit'
//                             className='h-11 flex-1 bg-[var(--primary-500)] text-white rounded-lg cursor-pointer hover:opacity-90 transition'
//                         >
//                             Book My Package
//                         </button>

//                     </div>

//                 </form>

//             </div>

//         </section>,

//         document.getElementById('modalRoot')
//     );
// };

// export default BookingForm;