const express = require("express");
const Posts = require("../schemas/posts");
const router = express.Router();

const posts = [
    {
      title: "1",
      name: "홍길동1",
      contents:
        "홍길동ㅎㅇㅎㅇ",
      date: "2022-12-11",
      pw: '1234',
    },
    {
        title: "2",
        name: "홍길동2",
        contents:
          "홍길동2ㅎㅇㅎㅇ",
        date: "2022-12-12",
        pw: '1234',
      },
      {
        title: "3",
        name: "홍길동3",
        contents:
          "홍길동3ㅎㅇㅎㅇ",
        date: "2022-12-13",
        pw: '1234',
      },
      {
        title: "4",
        name: "홍길동4",
        contents:
          "홍길동4ㅎㅇㅎㅇ",
        date: "2022-12-14",
        pw: '1234',
      },
    ];


router.get("/posts" , (req, res) =>{
    res.status(200).json({posts})
})

 router.get("/posts/:name", (req,res) => {
    const {name} = req.params;
    const [result] = posts.filter((post) => String(name) === post.name);
    res.status(200).json({detail : result});
});

// const Posts = require("../schemas/posts");
router.post("/posts", async (req, res) => {
	const {name, title,contents, date, pw } = req.body;

  const posts = await Posts.find({ name });
  if (posts.length) {
    return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
  }                                                             

  const createdPosts= await Posts.create({ name,title, contents, date, pw });

  res.json({ posts: createdPosts });
});

router.get("/posts/:name", async (req, res) => {
  const post = await Post.find();
  const names = post.map((post) => post.name);

  const posts = await Posts.find({ name: names });

  const results = posts.map((post) => {
		return {
			posts: posts.find((item) => item.name === post.name)
		};
  });
  console.log(results)
  res.json({
    name: results
  });
  console.log(results)
});





module.exports = router;
