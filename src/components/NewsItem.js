
function NewsItem(props) {

  const  button={
    marginRight: "40px",
    textDecoration:"none",
    fontSize: "15px",
    color: "#6C7686",
    textShadow: "0 1px 0 rgba(255,255,255,0.29)",
    display:"inline-block",
    fontWeight: "600",
    textAlign:"center",
    cursor: "pointer",
    transition: "all ease-in-out 100ms",
    width: "100px",
    height: "35px",
    background:" linear-gradient(-179deg, #F4F4F4 0%, #C0C0C0 100%)",
    boxShadow :" 0 5px 6px -4px rgba(0,0,0,0.22), 0 10px 13px -4px rgba(0,0,0,0.34), inset 0 30px 30px 0 rgba(255,255,255,0.35), inset 0 -30px 30px 0 rgba(0,0,0,0.10)"
  
    }
    const box={
      background:" linear-gradient(-179deg, #F4F4F4 0%, #C0C0C0 100%)",
      boxShadow :" 0 5px 6px -4px rgba(0,0,0,0.22), 0 10px 13px -4px rgba(0,0,0,0.34), inset 0 30px 30px 0 rgba(255,255,255,0.35), inset 0 -30px 30px 0 rgba(0,0,0,0.10)"
  

    }
  let {title,description,imgUrl,newsUrl, author, date}=props;
 
  return (
   
<div className="container">
                <div className="card" style={box}>
                   <img src={imgUrl} style={{width:"100%",height:"200px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0,65)}....</h5>
                        <p className="card-text">{description.slice(0,120)}....</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank"style={button} >READ MORE</a>
                        <p className="card-text my-3"><small className="text-muted"> Author is {author} and Created at {date}</small></p>
                    </div>
                </div>
      
    </div>
  )
}

export default NewsItem

