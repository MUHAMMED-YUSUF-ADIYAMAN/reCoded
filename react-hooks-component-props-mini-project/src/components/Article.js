import React from "react";

function Article({title,date,preview,minutes}) {
    
  return (
    <article>
        <h3>{title}</h3>
        <small>{date ? date : "January 1, 1970"}<span> {minutes} min read</span></small>
        <p>{preview}</p>
        
    </article>
        
    
  );
}

export default Article;
