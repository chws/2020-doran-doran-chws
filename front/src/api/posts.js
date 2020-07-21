import axios from "axios";

const client = axios.create({
  baseURL: "http://3.34.2.114:8080/posts",
});
export const createPost = (content, location) =>
  client.post("", content, location);
export const loadPost = (postId) => client.get(`/${postId}`);
export const loadPosts = () => client.get("");
export const deletePost = (postId) => client.delete(`/${postId}`);