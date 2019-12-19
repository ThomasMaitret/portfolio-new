import posts from "./blog/_posts.js";

const contents = JSON.stringify(
  posts.slice(0, 5).map(post => {
    return {
      title: post.title,
      slug: post.slug,
      date: post.date
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
