import React, { useEffect, useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Image from "../../public/Images/Travel/everest-base-camp.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from 'dompurify';
import DataContext from "../Context/DataContext";
import Loader from "../Components/Loader";

function BlogDetails() {
  const { slug } = useParams();
  const [ data, setData ] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/blog/${slug}`);
        if (response.status === 200) {
          setData(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [slug]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month : 'long'});
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }

   if (!data || data.length === 0) return (
        <div className='px-6 sm:px-12 lg:px-24 py-12 lg:py-24 h-screen'>
            <Loader />
        </div>
    );

  return (
    <div>
      <BreadCrumb title={`${data.ittle}`} />
      <section
        id="blog-details"
        className="px-6 sm:px-12 lg:px-24 py-12 lg:py-24"
      >
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2">
            <img
              src={data.image_url}
              alt={data.ittle}
              className="h-120 w-full rounded-xl mb-6"
            />
            <h3 className="text-[var(--neutral-900)] mb-3">
              { data.ittle}
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <p className="text-[var(--neutral-700)]">
                Blog | {formatDate(data.created_at)} | <strong>By - { data.user?.name}</strong>
              </p>
              {data.categories?.map(item => (
                <button key={item.id} className="bg-[var(--secondary-500)] text-[var(--neutral-100)] h-8 px-4 w-fit rounded-sm">
                  {item.title}
                </button>
              ))}
            </div>
            <div className="text-[var(--neutral-700)]" dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(data.description)}}  />
          </div>
          <div className="flex justify-center">
                <div className="h-fit w-80 px-4 py-6 text-center bg-[var(--primary-100)] rounded-lg shadow-md sticky top-6">
                    <h5 className="text-[var(--neutral-900)] mb-1">Are you planning for a vaccation?</h5>
                    <p className="text-[var(--neutral-700)] mb-3">Let's plan your vaccation together with us.</p>
                    <Link to={'/contact-us'}>
                      <button className="h-12 w-fit px-4 bg-[var(--neutral-900)] text-[var(--neutral-100)] cursor-pointer rounded-md">Contact Us</button>
                    </Link>
                </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetails;
