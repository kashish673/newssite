import React,{useEffect,useState}  from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=> {
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)

   const updateNews=async ()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2f86b59d25e44937990a236a5bbae469&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data= await fetch(url);
    props.setProgress(100);
    let parsedData= await data.json();
    props.setProgress(100);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
   }

   useEffect(()=>{
    document.title=`${props.category}-Toofan Express`
      updateNews();
   },[])

    const fetchMoreData= async ()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2f86b59d25e44937990a236a5bbae469&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data=await fetch(url);
    let parsedData=await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults); 
  }

  return (
      <>
        <h2 className="text-center" style={{marginTop:'120px'}}>Toofan Express-Top Headlines</h2>
        {/*{loading && <Spinner/>}*/}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        {articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} Newsurl={element.url} author={element.author} publish={element.publishedAt}/>
            </div>
        })}    
        </div>
        </div>
        </InfiniteScroll>
    </>
    )
}     
News.defaultProps = {
  country:'in',
  pageSize:8,
  category: 'General',
}
News.propTypes = {
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}
export default News;

