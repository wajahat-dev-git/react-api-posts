export const PostService = Object.freeze({
  getPosts: () => "/posts",
  getPostComments: (post_id) => `posts/${post_id}/comments`,
});
