import axios_instance from "../index";
import { PostService } from "./constants";

export const get_posts = () => axios_instance.get(PostService.getPosts());

export const get_comments = (postId) =>
  axios_instance.get(PostService.getPostComments(postId));
