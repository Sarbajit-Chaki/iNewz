import { useEffect } from "react"
import { useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
    },[category])

    
  return (
    <div>
      <div className="heading flex justify-center items-center gap-x-1 mt-2">
        <h1 className=" text-3xl font-semibold text-white">Latest20</h1>
        <h2 className=" text-2xl font-bold text-white bg-red-600 px-3 py-1 rounded-lg">News</h2>
      </div>

      <div className="newses flex flex-wrap justify-center gap-4 mt-4 mb-4">
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
      </div>

    </div>
  )
}

export default NewsBoard
