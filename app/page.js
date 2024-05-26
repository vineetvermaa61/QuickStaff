"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import {Hero2 }from "./_components/Hero2";
import CategoryList from "./_components/CategoryList";
import BusinessList from "./_components/BusinessList";
import NewsLetter from "./_components/NewsLetter";
import Contact from "./_components/Contact";
import Slider from "./_components/Slider";




export default function Home() {

  const [categoryList,setCategoryList]=useState([]);
  const [businessList,setBusinessList]=useState([]);
  useEffect(()=>{
    getCategoryList();
    getAllBusinessList();
  },[])

  /**
   * Used to get All Category List
   */
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
    })
  }

  /**
   * Used to get All Business List
   */
  const getAllBusinessList=()=>{
    GlobalApi.getAllBusinessList().then(resp=>{
      setBusinessList(resp.businessLists)
    })
  }
  return (
    <div>
      <Hero2/>
      <CategoryList categoryList={categoryList} />
      <BusinessList businessList={businessList}title={'Popular Business'} />
      <Slider/>
      <NewsLetter />
      <Contact/>
    </div>
  );
}
