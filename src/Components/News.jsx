import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
 

  constructor() {
    super();
    this.state = {
      article: [],
      loading:true,
      page:1
    };
  }

 async componentDidMount()
  {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=24c7d016d78f417e95496ea0dd3a16a3&page=${this.state.page}`
    let Data = await fetch(url);
    let parsedData =  await Data.json();
    this.setState({article : parsedData.articles,loading:false})

  }
  
  handleOnNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=24c7d016d78f417e95496ea0dd3a16a3&page=${this.state.page}`
    let Data = await fetch(url);
    let parsedData =  await Data.json();
    this.setState({article : parsedData.articles,loading:false,page:this.state.page+1})
    }
   handleOnPrevious =  ()=>{
    //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=24c7d016d78f417e95496ea0dd3a16a3&page=${page}`
    // let Data = await fetch(url);
    // let parsedData =  await Data.json();
    // this.setState({article : parsedData.articles,loading:false,pag})
    }


  render() {
 
    if(this.state.loading)
    {
      return (
        <div class="spinner-border" role="status" style={{margin:'50px 0 0 50vw'}}>
          <span class="visually-hidden">Loading...</span>
        </div>
      );
    }
    else{
      
    return (
      <div>
       
        <div className="container-fluid ">
        <h1 style={{textAlign:'center'}}>NewsMonkey Headlines</h1>
          <div className="row" >
            {this.state.article?.map((e) => {
              return <NewsItem key={e.url} title={e.title} description={e.description} urlToImage={e.urlToImage} url={e?.url}/>;
            })}
          </div>
        </div>

         <div className="container d-flex justify-content-between my-3">
           <div className="btn btn-dark" onClick={this.handleOnPrevious}> &larr; Previous</div>
           <div className="btn btn-dark" onClick={this.handleOnNext}>Next &rarr;</div>
         </div>
      </div>
    );

    }



  }
}
