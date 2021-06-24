{
    'use strict';
    const baseURL = 'https://apis.scrimba.com/jsonplaceholder';

    fetch(`${baseURL}/posts`,)
        .then(res => res.json())
        .then(data => {
            const posts = data.slice(0, 10);
            let html = '';
            console.log(posts);

            for (const { title, body } of posts) {
                html += `
                    <article class="post">
                        <h3>${title}</h3>
                        <p>${body}</p>
                    </article>
                    <hr>
                `;
            }

            document.getElementById('atricles').innerHTML = html;
        });
}