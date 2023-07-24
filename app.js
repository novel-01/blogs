const express = require('express');
const app = express();
app.use(express.json());

let blogs = [];
let id = 1;

app.post('/blogs', (req, res) => {
    const blog = {
        id: id++,
        title: req.body.title,
        content: req.body.content,
        views: 0
    };
    blogs.push(blog);
    res.status(201).send(blog);
});

app.get('/blogs', (req, res) => {
    res.send(blogs);
});

app.get('/blogs/:id', (req, res) => {
    const blog = blogs.find(b => b.id === parseInt(req.params.id));
    if (!blog) return res.status(404).send('Blog not found');
    blog.views++;
    res.send(blog);
});

app.put('/blogs/:id', (req, res) => {
    const blog = blogs.find(b => b.id === parseInt(req.params.id));
    if (!blog) return res.status(404).send('Blog not found');
    blog.title = req.body.title;
    blog.content = req.body.content;
    res.send(blog);
});

app.delete('/blogs/:id', (req, res) => {
    const blogIndex = blogs.findIndex(b => b.id === parseInt(req.params.id));
    if (blogIndex === -1) return res.status(404).send('Blog not found');
    const deletedBlog = blogs.splice(blogIndex, 1);
    res.send(deletedBlog);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
