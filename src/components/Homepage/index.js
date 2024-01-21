import React, {useEffect, useState} from "react"
import ProductsCarousel from "../Products/ProductsCarousel"
import axios from "axios"

const Index = () => {
  const urls = [
    `https://auth-task-app.up.railway.app/api/products/search/fashion`,
    `https://auth-task-app.up.railway.app/api/products/search/laptop`,
    `https://auth-task-app.up.railway.app/api/products/search/laptop`,
  ]
  const [categoryData, setCategoryData] = useState([])
  const handleURL = async () => {
    try {
      const response = await Promise.all(urls.map((url) => axios.get(url)))
      const data = response.map((res) => res.data)
      setCategoryData(data)
    } catch (error) {}
  }
  useEffect(() => {
    handleURL()
  }, [])

  return categoryData?.map((val, index) => {
    return <ProductsCarousel data={val} key={index} />
  })
}

export default Index
