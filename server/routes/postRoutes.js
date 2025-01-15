import { Router } from "express";
import { getStoredPost, getStoredPosts, storePost } from "../controllers/postController.js";

const router = Router();

router.get('/posts', async (req, res) => {
    const storedPosts = await getStoredPosts();
    res.json({ posts: storedPosts });
});

router.get('/posts/:id', async (req, res) => {
    const storedPost = await getStoredPost(req.params.id);
    res.json({ post: storedPost });
});

router.post('/posts', async (req, res) => {
    const postData = req.body;
    await storePost(postData);
    res.json({ message: 'Post created!' });
});

export default router;