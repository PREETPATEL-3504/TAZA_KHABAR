import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const UpdateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=1fd6810b6c9d463781d8246f65b3b04e&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(parsedata.articles)
    settotalResults(parsedata.settotalResults)
    setloading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    UpdateNews();
  },[])

  return (
    <div>
      <div className="container my-4">
        <h1 className="text-center my-5">Taza Khabar - Top news</h1>
        {loading && <Spinner />}
       
        <div className="row">
          {!loading && articles.map((news, index) => {
            return <div className="col-md-4" key={index.url}>
              <Newsitem title={news.title} discription={news.description} imgurl={news.urlToImage} url={news.url} author={news.author} date={news.publishedAt} />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default News
