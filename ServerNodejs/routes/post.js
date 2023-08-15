const express = require('express');
const router = express.Router();
const authenticateToken = require('../authenticate');
const Post = require('../models/Post');
const multer = require('multer');

const admin = require('firebase-admin');
const serviceAccount = require('../civicfeeds-15f12-firebase-adminsdk-3u59e-26d0dfc2c5.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://civicfeeds-15f12.appspot.com', 
});

const storage = admin.storage();
const upload = multer();
// Create a new post
// router.post('/create', authenticateToken, async (req, res) => {
//   try {
//     const { content } = req.body;
//     const userId = req.userId;

//     const newPost = new Post({ userId, content });
//     const savedPost = await newPost.save();

//     res.status(201).json({ message: 'Post created successfully', post: savedPost });
//   } catch (error) {
//     console.error('Error creating post:', error);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });
router.post('/create', authenticateToken, upload.array('media', 5), async (req, res) => {
  try {
    const content  = req.body.body;
    const userId = req.userId;
    const mediaUrls = [];

    // Upload each media file to Firebase Storage
    if(req.files){
      for (const file of req.files) {
        const buffer = file.buffer;
        const fileExtension = file.mimetype.split('/')[1];
        const filename = `media_${Date.now()}.${fileExtension}`;
        const bucket = storage.bucket();

        const fileRef = bucket.file(filename);
        await fileRef.save(buffer, { metadata: { contentType: file.mimetype } });

        const url = await fileRef.getSignedUrl({
          action: 'read',
          expires: '03-09-2491', // Replace with a far future date
        });

        mediaUrls.push(url[0]);
      }
    }

    const newPost = new Post({ userId, content, media: mediaUrls });
    const savedPost = await newPost.save();

    res.status(201).json({ message: 'Post created successfully', post: savedPost });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});
// Get all posts
router.get('/getAllPost', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(201).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Edit a post
router.put('/edit/:postId', authenticateToken, async (req, res) => {
    try {
      const { postId } = req.params;
      const { content } = req.body;
      const userId = req.userId;
  
      const post = await Post.findById(postId);
  
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      if (post.userId.toString() !== userId) {
        return res.status(403).json({ error: 'Unauthorized to edit this post' });
      }
  
      const updatedPost = await Post.findOneAndUpdate(
        { _id: postId },
        { content },
        { new: true }
      );
  
      res.json({ message: 'Post updated successfully', post: updatedPost });
    } catch (error) {
      console.error('Error updating post:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
router.delete('/delete/:postId', authenticateToken, async (req, res) => {
try {
    const { postId } = req.params;
    const userId = req.userId;

    const post = await Post.findById(postId);

    if (!post) {
    return res.status(404).json({ error: 'Post not found' });
    }

    if (post.userId.toString() !== userId) {
    return res.status(403).json({ error: 'Unauthorized to delete this post' });
    }
    console.log("post",post)
    await Post.findByIdAndDelete(postId);
    res.json({ message: 'Post deleted successfully' });
} catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Something went wrong' });
}
});
    

// Delete a post


module.exports = router;
