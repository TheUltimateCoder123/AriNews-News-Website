// import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState } from "react";
import { useEffect } from "react";

function News(props) {
  const noImage="https://images.unsplash.com/photo-1557411732-1797a9171fcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const upperCaseFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.substring(1);
  };
  document.title = `ArihantNews-${upperCaseFirst(props.category)}`;

  const fetchMoreData = async () => {
    props.setProgress(0);
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}}`;
    props.setProgress(20);
    setLoading(true);
    props.setProgress(40);
    let data = await fetch(url);
    props.setProgress(60);
    let parsedData = await data.json();
    props.setProgress(100);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };
  useEffect(() => {
   
    fetchMoreData();

    
  }
   // eslint-disable-next-line
   , []);

  return (
    <div className="container">
      <h1 className="my-3 text-center">
        ArihantNews : News On {upperCaseFirst(props.category)}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
        scrollableTarget="scrollableDiv"
      >
        <div className="container">
          <div className="row ">
            {articles.map((element) => {
              return (
                <div className="col-md-6 col-lg-4  my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgUrl={element.urlToImage!==null?element.urlToImage:noImage}
                    newsUrl={element.url}
                    author={!element.author ? "unknown" : element.author}
                    date={new Date(element.publishedAt).toGMTString()}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "technology",
 
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
