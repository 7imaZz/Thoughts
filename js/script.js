var ids = [];
var ul = document.getElementById("favo");
var mainDiv = document.getElementById("main"); 
function getElement(e){
    if(ids.indexOf(e.id)==-1 && e.id.charAt(e.id.length-1)!="y"){
        ids.push(e.id);
        var li = e.cloneNode(true);
        li.id +="y"; 
        ul.appendChild(li);
    }  
    else if(e.id.charAt(e.id.length-1)=="y"){
        
        var ele = document.getElementById(e.id); 
        ul.removeChild(e);
        ids = ids.filter(b => b !== e.id.substring(0, e.id.length - 1));
        console.log(e.id.substring(0, e.id.length - 1));
        console.log(e.id);
    }
        
}

function addPost(){
        
    var article = document.getElementById("article_body").value; 
    var title = document.getElementById("title").value; 
    
    if(article.length != 0 && title.length != 0){
    var post = document.createElement("div"); 
        post.className = "posts"; 

        var articleTitle = document.createElement("h3"); 
        articleTitle.className = "article-title";

        var articleBody = document.createElement("article"); 


        articleTitle.innerHTML = title; 
        articleBody.innerHTML = article;

        post.appendChild(articleTitle);
        post.appendChild(articleBody); 

        mainDiv.appendChild(post);

        document.getElementById("title").value = "";
        document.getElementById("article_body").value = ""; 
    }

    
    
}