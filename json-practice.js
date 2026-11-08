const postsJson = `[
    {"id":1,"title":"Welcome","likes":12,"published":true},
    {"id":2,"title":"Draft Ideas","likes":0,"published":false},
    {"id":3,"title":"Week 4 recap","likes":30,"published":true},
    {"id":4,"title":"JavaScript Basics","likes":20,"published":true}
]


const posts = JSON.parse(postsJson);
console.log(posts);


const publishedPosts = posts.filter(post => post.published);
console.log(publishedPosts);


const sortedPosts = [...publishedPosts].sort((a, b) => b.likes - a.likes);
console.log(sortedPosts);


const postTitles = sortedPosts.map(post
 => `${post.title} (${post.likes}
     likes)`);

console.log(postTitles);


const backToText = JSON.stringify(sortedPosts, null, 2);
console.log(backToText);