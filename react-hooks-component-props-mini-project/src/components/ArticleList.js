import React from "react";
import Article from "./Article"

function ArticleList({posts}) {
    
       
  return (
    <main className="App main">
       {posts.map((e)=>
        <Article title={e.title} date={e.date} preview={e.preview} minutes={e.minutes}/>
    )}
    </main>
  );
}

export default ArticleList;
