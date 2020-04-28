const posts = [
  {
    title: "Hello World",
    slug: "hello-world",
    date: "28/04/20",
    html: `
			<p>Hello World !</p>
		`,
  },
];

posts.forEach((post) => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
