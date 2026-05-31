import React, { useContext } from "react";
import Img from "../../../public/Images/Travel/everest-base-camp.jpg";
import TagIcon from "../../../public/Icons/tag.png";
import CalendarIcon from "../../../public/Icons/calendar.png";
import UserIcon from "../../../public/Icons/user.png";
import CommentIcon from "../../../public/Icons/comment.png";
import DataContext from '../../Context/DataContext';
import DOMPurify from 'dompurify';
import { Link } from "react-router-dom";

function BlogSection() {
  const { blogs } = useContext(DataContext);
   const [ firstpost, ...otherPosts] = blogs;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString('en-US', { month : 'long'}),
      year: date.getFullYear(),
    };
  }

  const { day, month, year } = formatDate(firstpost?.created_at);
 
  return (
    <section
      id="blog-section"
      className="px-6 sm:px-12 lg:px-24 py-12 md:py-24"
    >
      <span className="text-[var(--secondary-500)] ">Blog Posts</span>
      <h3 className="text-[var(--neutral-900)] mt-1 md:mt-3 mb-3">
        Travel Stories, Insights & Guides
      </h3>
      <p className="text-[var(--neutral-700)] mb-6 md:mb-12">
        Stories, Insights and travel inspirations from across the Asia shared by
        our team and community.
      </p>
      <div className="hidden lg:grid grid-cols-2 gap-12">
        <div className="cursor-pointer group bg-[var(--neutral-100)] shadow-md overflow-hidden rounded-2xl">
          <img src={firstpost?.image_url} alt={firstpost?.ittle} className="h-90 w-full object-cover" />
          <div className="flex flex-col gap-3 py-6 px-6">
            <div className="flex justify-between">
              <div className="flex gap-2">
              {firstpost?.categories.map(item => (
                <div key={item.id} className="flex gap-2 items-center">
                  <img
                    src={TagIcon}
                    alt="tag icon"
                    className="h-5 w-5 object-contain"
                  />
                  <span className="text-[var(--secondary-500)]">{item.title}</span>
                </div>
              ))}
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src={CalendarIcon}
                  alt="tag icon"
                  className="h-5 w-5 object-contain"
                />
                <span className="text-[var(--secondary-500)]">
                  {`${day} ${month}, ${year}`}
                </span>
              </div>
            </div>
            <Link to={`/blog-details/${firstpost?.slug}`}>
            <h4 className="text-[var(--neutral-900)]">
              {firstpost?.ittle}
            </h4>
            </Link>
            <p className="text-[var(--neutral-700)] line-clamp-2" dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(firstpost?.description)}} />
              
            <div className="flex justify-between mt-6">
              <div className="flex items-center gap-2 justify-end w-full">
                <p>Author -</p>
                <span className="text-[var(--secondary-500)]">{ firstpost?.user.name}</span>
              </div>
      
            </div>
          </div>
        </div>
        { /* large screen */}
        <div className="grid grid-cols-2 gap-6">
          {otherPosts.map((item) => {
              const { day, month} = formatDate(item.created_at);
            return (<div
              key={item.id}
              className="cursor-pointer group bg-[var(--neutral-100)] shadow-md overflow-hidden rounded-xl relative"
            >
              <div className="absolute bg-[var(--neutral-900)] top-0 right-2 h-fit w-12 rounded-b-md flex flex-col items-center justify-center py-1">
                  <h6 className="text-[var(--primary-100)]">{day}</h6>
                  <p className="text-[var(--neutral-100)]">{month}</p>
              </div>
              <img src={item.image_url} alt={item.ittle} className="h-40 w-full object-cover" />
              <div className="flex flex-col gap-3 py-3 px-3">
                <div className="flex items-center gap-2">
                    { item.categories?.map(i => (
                      <div key={i.id} className="flex gap-1 items-center">
                        <img
                          src={TagIcon}
                          alt="tag icon"
                          className="h-4 w-4 object-contain"
                        />
                        <span className="text-[var(--secondary-500)]">{i.title}</span>
                      </div>
                    ))}
                </div>
                <Link to={`/blog-details/${item.slug}`}>
                <h6 className="text-[var(--neutral-900)]">
                  { item.ittle}
                </h6>
                </Link>
                <div className="flex gap-2">
                  <div className="flex items-center justify-end w-full gap-2">
                   <p>Author - </p>
                    <span className="text-[var(--secondary-500)]">{ item.user?.name}</span>
                  </div>
                </div>
              </div>
            </div> );
          })}
        </div>
      </div>
      {/* mobile view */}
      <div className="lg:hidden">
        {blogs.map((item) => {
          const { day, month , year} = formatDate(item.created_at);
          return (
          <div
            key={item.id}
            className="cursor-pointer group bg-[var(--neutral-100)] shadow-md overflow-hidden rounded-xl mb-3"
          >
            <img src={item.image_url} alt="" className="h-50 w-full object-cover" />
            <div className="flex flex-col gap-3 py-6 px-3">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  {item.categories?.map(i => (
                    <div key={i.id} className="flex gap-2 items-center">
                      <img
                        src={TagIcon}
                        alt="tag icon"
                        className="h-5 w-5 object-contain"
                      />
                      <span className="text-[var(--secondary-500)]">{ i.title}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 items-center">
                  <img
                    src={CalendarIcon}
                    alt="tag icon"
                    className="h-5 w-5 object-contain"
                  />
                  <span className="text-[var(--secondary-500)]">
                    {`${day} ${month}, ${year}`}
                  </span>
                </div>
              </div>
              <Link to={`/blog-details/${item.slug}`} >
              <h5 className="text-[var(--neutral-900)]">
                { item.ittle}
              </h5>
              </Link>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--neutral-900)] flex items-center justify-center">
                    <img
                      src={UserIcon}
                      alt="user icon"
                      className="h-3 w-3 object-contain invert"
                    />
                  </div>
                  <span className="text-[var(--secondary-500)]">{ item.user?.name}</span>
                </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}

export default BlogSection;
