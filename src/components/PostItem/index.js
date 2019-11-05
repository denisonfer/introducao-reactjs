import React from 'react';

export default function PostItem({ author, date, comments, content }) {
  return (
    <li>
      <div className="user-post">
        <div className="container">
          <img src={author.avatar} alt="Avatar Perfil" />
          <div className="container-perfil">
            <span className="username">{author.name}</span>
            <span className="date">{date}</span>
          </div>
        </div>
        <p className="content">{content}</p>
        <hr />
        <ul className="comment-post">
          {comments.map(comment =>
            <li key={comment.id}>
              <img src={comment.author.avatar} alt="Avatar Perfil" />
              <div className="container-comment">
                <span className="name-comment">{comment.author.name}</span>
                <span className="content-comment">{comment.content}</span>
              </div>
            </li>
          )}
        </ul>

      </div>
    </li>
  );
}
