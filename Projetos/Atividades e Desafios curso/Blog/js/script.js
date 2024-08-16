const posts = [];
let currentPostId = null;

function renderPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';
    posts.forEach((post, index) => {
        const postItem = document.createElement('div');
        postItem.className = 'post-item';
        postItem.innerHTML = `<h3>${post.title}</h3><p>${post.summary}</p>`;
        postItem.onclick = () => showPostDetail(index);
        postList.appendChild(postItem);
    });
}

function showPostDetail(index) {
    currentPostId = index;
    const post = posts[index];
    document.getElementById('postDetail').style.display = 'block';
    document.getElementById('postContent').innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>Publicado em:</strong> ${post.date}</p>
        <p>${post.content}</p>
    `;
    renderComments();
}

function renderComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';
    if (currentPostId !== null) {
        const comments = posts[currentPostId].comments || [];
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.innerHTML = `
                <p><strong>${comment.author}</strong></p>
                <p>${comment.text}</p>
            `;
            commentsList.appendChild(commentDiv);
        });
    }
}

function addPost() {
    const title = document.getElementById('newPostTitle').value;
    const content = document.getElementById('newPostContent').value;
    const date = new Date().toLocaleDateString();
    if (title && content) {
        posts.push({
            title,
            content,
            date,
            summary: content.substring(0, 100) + '...',
            comments: []
        });
        document.getElementById('newPostTitle').value = '';
        document.getElementById('newPostContent').value = '';
        renderPosts();
    }
}

function addComment() {
    const author = document.getElementById('commentAuthor').value;
    const text = document.getElementById('commentText').value;
    if (currentPostId !== null && author && text) {
        posts[currentPostId].comments.push({
            author,
            text
        });
        document.getElementById('commentAuthor').value = '';
        document.getElementById('commentText').value = '';
        renderComments();
    }
}


posts.push({
    title: 'Meu Youtube!',
    content: 'Pesquise lá no Youtube por VictorHq e você me encontra.',
    date: new Date().toLocaleDateString(),
    summary: 'Um ótimo canal de jogos!',
    comments: [
        { author: 'João', text: 'Incrivel!' }
    ]
});
renderPosts();