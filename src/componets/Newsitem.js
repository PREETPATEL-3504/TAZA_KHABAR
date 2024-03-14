import React from 'react'

const Newsitem = (props) => {

  let { title, discription, imgurl, url, author, date } = props;

  return (
    <div>
      <div className="card overflow-hidden " style={{ height: "450px", marginBottom: "20px" }}>
        <img src={imgurl} className="card-img-top" alt="Not Found" style={{ height: "200px" }} />
        <div className="card-body">
          <h5 className="card-title ellipsis1 ">{title}</h5>
          <p className="card-text ellipsis" >{discription}...</p>
          <p className="card-text "><small className="text-muted ">By {!author ? "Unknow" : author} on {date}</small></p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary position-absolute bottom-0 start-0 my-2 mx-3">Detail News</a>

        </div>
      </div>
    </div>

  )

}

export default Newsitem
