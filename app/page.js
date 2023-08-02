'use client';
import React from 'react';
import { useState, useEffect } from 'react'; 
import Loading from './loading';
import Courses from '@/components/Courses';
import CourseSearch from '@/components/CourseSearch';


const HomePage = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    }

    fetchCourses();

  }, []);

  if(loading) {
    return <Loading />
  }
  return (
    <div>
      <h1>Welcome to Litty.Dev</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)}/>
      <Courses courses={courses}/>
    </div>
  )
}

export default HomePage;
