const express = require("express");
const Posts = require("../../models/Posts");

const AddPosts = async (req, res) => {
    try {

        const {paperName,publicationLink} = req.body;

        if (!paperName || !publicationLink) {
            return res.status(400).json({ message: 'Title, and link are required.' });
        }

        const newPost = new Posts({ title:paperName, link:publicationLink });
        await newPost.save();

        res.status(201).json({
            message: 'Paper Uploaded successfully!',
            post: newPost,
        });

    }catch(error) {
        console.error("Paper Creation:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
            error
        });
    }
}

const getAllPosts = async(req,res) => {
    try {
        const posts = await Posts.find().sort({ createdAt: -1 });
        res.status(200).json(posts);

    }catch(error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: 'Server error while fetching posts' });
    }
}

const getPostById = async(req,res) => {
    try {
        const post = await Posts.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Paper not found' });
        res.status(200).json(post);
    } catch (error) {
        console.error('Error fetching Paper:', error);
        res.status(500).json({ message: 'Server error while fetching Paper' });
    }
}

const deletePost = async (req,res) => {
    try {
        const deletedPost = await Posts.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: 'Paper not found' });
        res.status(200).json({ message: 'Paper deleted successfully' });
    } catch (error) {
        console.error('Error deleting Paper:', error);
        res.status(500).json({ message: 'Server error while deleting Paper' });
    }
}

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title,link } = req.body;

    // Check if the post exists
    const post = await Posts.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Update fields only if provided
    if (title) post.title = title;
    if (link) post.link = link;

    // Update the "updated_at" timestamp manually
    post.metadata.updated_at = Date.now();

    // Save updated post
    const updatedPost = await post.save();

    res.status(200).json({
      message: "Paper updated successfully!",
      post: updatedPost,
    });

  } catch (error) {
    console.error("Error updating Paper:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating post",
      error,
    });
  }
};

module.exports = {AddPosts,getAllPosts, getPostById, deletePost, updatePost};


