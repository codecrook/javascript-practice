{
    'use strict';
    const baseURL = 'https://apis.scrimba.com/jsonplaceholder';

    fetch(`${baseURL}/posts`,)
        .then(res => res.json())
        .then(data => {
            const posts = data.slice(0, 10);
            let html = posts.map(({ title, body }) => (
                `<article class="post">
                    <h3>${title}</h3>
                    <p>${body}</p>
                </article>
                <hr>`
            )).join('');

            document.getElementById('atricles').innerHTML = html;
        });

    document.getElementById('new-blog').addEventListener('submit', e => {
        e.preventDefault();
        const postTitle = document.getElementById('post-title').value;
        const postBody = document.getElementById('post-body').value;
        const data = { title: postTitle, body: postBody };

        console.log(data);
    });
}