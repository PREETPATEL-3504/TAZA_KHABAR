import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';


const News = (props) => {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)



  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=34142e11932948a894777f1d9d56f48a&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setloading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])

  return (
    <div>
      <div className="container my-4">
        <h1 className="text-center my-5">Taza Khabar - Top news</h1>
        {loading && <Spinner />}
        <div className="row">
          {!loading && articles.map((news, index) => {
            return <div className="col-md-4" key={news.url}>
              <Newsitem title={news.title} discription={news.description} imgurl={news.urlToImage} url={news.url} author={news.author} date={news.publishedAt} />
            </div>
          })}
        </div>
      </div>
    </div>
  )

}

export default News
