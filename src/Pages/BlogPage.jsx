import React, { useContext, useEffect, useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import TagIcon from "../../public/Icons/tag.png";
import CalendarIcon from "../../public/Icons/calendar.png";
import UserIcon from "../../public/Icons/user.png";
import CommentIcon from "../../public/Icons/comment.png";
import SearchIcon from '../../public/Icons/Button Icons/search.png'
import DataContext from "../Context/DataContext";
import { Link } from "react-router-dom";

function BlogPage() {
  const { blogs, blogCategory } = useContext(DataContext);
  const [ fliteredBlogs,setFilteredBlogs ] = useState(blogs);
  const [ filterId, setFilterId ] = useState(null);

  useEffect(() => {
    if (!filterId) {
      setFilteredBlogs(blogs)
    } else {
      const data = blogs.filter(blog => blog.categories.some(category => category.id === filterId));
      setFilteredBlogs(data);
    }
  }, [filterId, blogs]);
  
  const handleDateSubmit = (data) => {
    const date = new Date(data);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-us', { month: "long"}),
      year: date.getFullYear(),
    };
  };

  return (
    <div>
      <BreadCrumb title="Travel Blogs" />
      <section id="blog-page" className="px-6 sm:px-12 lg:px-24 py-12 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-0 md:gap-6 lg:gap-12">
          <div className="col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-0 lg:gap-x-6 lg:gap-y-12">
              { fliteredBlogs.length === 0 ? <h3 className="text-center">No related posts.</h3> : fliteredBlogs.map((item) => {
                const { day, month } = handleDateSubmit(item.created_at);
      
                return (<div key={item.id}>
                  <Link to={`/blog-details/${item.slug}`}>
                    <div
                      className="cursor-pointer group bg-[var(--neutral-100)] shadow-md overflow-hidden rounded-2xl relative"
                    >
                      <div className="absolute top-0 right-4 h-fit w-12 rounded-b-md bg-[var(--neutral-900)] text-[var(--primary-100)] p-2 flex flex-col justify-center items-center gap-0.5 ">
                        <h6>{day}</h6> <span>{month}</span>
                      </div>
                      <img src={item.image_url} alt={item.ittle} className="h-60 w-full object-cover" />
                      <div className="flex flex-col gap-3 py-6 px-4">
                          <div className="flex gap-4 flex-wrap">
                            {item.categories?.map(item => (
                              <div key={item.id} className="flex gap-1 items-center">
                                <img
                                  src={TagIcon}
                                  alt="tag icon"
                                  className="h-5 w-5 object-contain"
                                />
                                <span className="text-[var(--secondary-500)]">
                                  {item.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        <h5 className="text-[var(--neutral-900)]">
                          {item.ittle}
                        </h5>
                        <div className="flex justify-between">
                          <div className="flex items-center justify-end w-full gap-2 ">
                            <p> Author -</p>
                            <span className="text-[var(--secondary-500)]">
                              {item.user?.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>);
              })}
            </div>

          </div>
          <div className="sticky top-10 h-fit bg-[var(--nautral-100)] rounded-xl border-2 border-[var(--primary-300)] px-6 py-6 flex flex-col gap-6 md:gap-8">
            <div >
              <h5 className="text-[var(--neutral-900)] mb-3">Search</h5>
              <div className="grid grid-cols-[1fr_auto] h-12 w-full border border-[var(--nautral-900)] rounded-sm overflow-hidden">
                <input type="text" className="outline-none px-2 h-full text-[var(--neutral-700)]" placeholder="Search..." />
                <button className="h-full w-12 flex items-center justify-center cursor-pointer border-l border-[var(--neutral-900)]"> <img src={SearchIcon} alt="search buttn icon" className="h-6 w-6 object-contain" /> </button>
              </div>
            </div>
            <div>
                <h5 className="text-[var(--neutral-900)] mb-6">Related Posts</h5>
                <div className="flex flex-col gap-3">
                    {blogs.map(item => {
                      const { day, month, year} = handleDateSubmit(item.created_at);
                      return (   
                        <div key={item.id}>
                          <Link to={`/blog-details/${item.slug}`}>
                            <div className="flex gap-4">
                                <img src={item.image_url} alt={item.ittle} className="h-26 w-26 object-cover rounded-md" />
                                <div>
                                    <h6 className="text-[var(--neutral-700)] mb-1.5">{item.ittle}</h6>
                                    <div className="flex gap-1">
                                        <img src={CalendarIcon} alt="calendar icon" className="h-5 w-5 object-contain" />
                                        <span className="text-[var(--secondary-500)]">{month} {day}, {year}</span>
                                    </div>
                                </div>
                            </div>
                          </Link>
                        </div>    
                    )}
                    )}
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between mb-6">
                  <h5 className="text-[var(--neutral-900)]">Filter By Tag</h5>
                  { filterId && (
                    <button onClick={() => {
                      setFilterId('');
                      window.scrollTo({ top: 0, left:0, behavior:'instant'})
                    }} className="h-8 w-fit px-2 cursor-pointer border rounded-sm">Clear filter</button>
                  )}
                </div>
                <div className="flex gap-2 flex-wrap">
                    {blogCategory.map((item) => (
                    <button onClick={() => {
                      setFilterId(item.id);
                      window.scrollTo({ top: 0, left:0, behavior:'instant'})
                    }} key={item.id} className={`h-10 w-fit px-2 cursor-pointer border border-[var(--neutral-700)] rounded-sm  transition-colors duration-300 ease-in-out ${filterId === item.id ? 'bg-[var(--primary-500)] text-[var(--neutral-100)]' : 'text-[var(--neutral-900)] hover:bg-[var(--primary-500)] hover:text-[var(--neutral-100)]'}`}>{item.title}</button>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
