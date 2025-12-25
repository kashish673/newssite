import React from 'react';
const Newsitem=(props)=> {
    let {title,description,imageurl,Newsurl,author,publish}=props;
    return (
      <div className="my-2">
        <div className="card" >
            <img src={!imageurl?"https://s.yimg.com/ny/api/res/1.2/nKrVGvZF4OSq6hY5IQly.w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/c0538bc0-bbcb-11ee-b3cf-d8253016fd89":imageurl
          }/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {publish}</small></p>
            <a rel="noreferrer" href={Newsurl} target="_blank" className="btn btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
}
export default Newsitem;

