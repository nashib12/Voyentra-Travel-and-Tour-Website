import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";

const DataContext = createContext();

export function ContextProvider({ children }) {
    const [ packages, setPackages ] = useState([]);
    const [ blogs, setBlogs ] = useState([]);
    const [ destinations, setDestinations] = useState([]);
    const [ gallery, setGallery ] = useState([]);
    const [ activities, setActivities] = useState([]);
    const [ testimonials, setTestimonials ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ blogCategory, setBlogCategory ] = useState([]);
    const [ modal, setModal] = useState(false);
    const [ selectedPackage, setSelectedPackage ] = useState(null);
    const [ activityCategory, setActivityCategory ] = useState([]);
    const [ detailType, setDetailType ] = useState('');

    useEffect(() => {
      async function fetchData () {
        setLoading(true);
        const response = await Promise.allSettled([
          axios.get('http://127.0.0.1:8000/api/package'),
          axios.get('http://127.0.0.1:8000/api/blog'),
          axios.get('http://127.0.0.1:8000/api/destination'),
          axios.get('http://127.0.0.1:8000/api/gallery'),
          axios.get('http://127.0.0.1:8000/api/activity-category'),
          axios.get('http://127.0.0.1:8000/api/testimonials'),
          axios.get('http://127.0.0.1:8000/api/blog-category'),
          axios.get('http://127.0.0.1:8000/api/activity')
        ]);

        const [ packageRes, blogRes, destinationRes, galleryRes, activityCatRes, testimonialRes, categoryRes, activityRes ] = response;
        if ( packageRes.status === "fulfilled") setPackages(packageRes.value.data.data.data);
        if (blogRes.status === "fulfilled") setBlogs(blogRes.value.data.data.data);
        if (destinationRes.status === "fulfilled") setDestinations(destinationRes.value.data.data);
        if (galleryRes.status === "fulfilled") setGallery(galleryRes.value.data.data.data);
        if(activityCatRes.status === "fulfilled") setActivityCategory(activityCatRes.value.data.data);
        if(testimonialRes.status === "fulfilled") setTestimonials(testimonialRes.value.data.data.data);
        if(categoryRes.status === "fulfilled") setBlogCategory(categoryRes.value.data.data);
        if (activityRes.status === "fulfilled") setActivities(activityRes.value.data.data.data);
        setLoading(false);
      };
      fetchData();
    }, []);

    if (loading) return <Loader/>;
    return (
      <DataContext.Provider value={{ packages, blogs, destinations, gallery, activities, testimonials, blogCategory,
        modal, setModal, selectedPackage, setSelectedPackage, activityCategory, detailType, setDetailType, setLoading,
       }}>
        {" "}
        {children}{" "}
      </DataContext.Provider>
    );
}
export default DataContext;
