const getPosts = () => {
    
    let fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts");
    let allPostsTitle = '';

    fetchPosts.then((response)=>{
        response.json().then((jsonData) =>{
            // console.log(jsonData);

            for (let i=0; i<jsonData.length; i++){
                post = jsonData[i];
                allPostsTitle = allPostsTitle + ` Title: ${post.title}<br><hr>`;
            }

            document.querySelector("#allPosts").innerHTML = allPostsTitle;
        });
    });

}
