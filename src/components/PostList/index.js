import React, { Component } from 'react';

import './styles.css';
import PostItem from '../PostItem';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://pngimage.net/wp-content/uploads/2018/05/avatar-perfil-png-1.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://bdhouse2let.com/public/uploads/customer/picture.png"
            },
            content: "A Rocketset está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar granvando vídeos e criando posts, pode me chamar no Discord!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
        },
        date: "04 Jun 2019",
        content: 'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://icon-library.net/images/avatar-icon-png/avatar-icon-png-10.jpg"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://icon-library.net/images/avatar-icon-png/avatar-icon-png-12.jpg"
            },
            content: "Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes",
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
        },
        date: "04 Jun 2019",
        content: 'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://icon-library.net/images/avatar-icon-png/avatar-icon-png-10.jpg"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://icon-library.net/images/avatar-icon-png/avatar-icon-png-12.jpg"
            },
            content: "Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes",
          }
        ]
      }
    ]
  };

  render() {
    return (
      <>
        <ul className="post">
          {this.state.posts.map(post =>
            <PostItem
              key={post.id}
              {...post} />
          )}
        </ul>
      </>
    );
  }
}
