const posts = [
  { name: "Post 1", kullanıcı: "Kullanıcı 1" },
  { name: "Post 2", kullanıcı: "Kullanıcı 2" },
  { name: "Post 3", kullanıcı: "Kullanıcı 3" },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.name);
  });
};

listPosts();

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    reject("Bir hata oluştu!");
  });
  return promise1;
};

async function showPosts() {
  try {
    await addPost({ name: "Post 4", kullanıcı: "Kullanıcı 4" });
    listPosts();
  } catch (err) {
    console.log(err);
  }
}

showPosts()