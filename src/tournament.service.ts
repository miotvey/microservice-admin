import { Injectable } from '@nestjs/common';
import { name } from 'ts-jest/dist/transformers/hoist-jest';
import { type } from 'os';

const postArr = [];

@Injectable()
export class TournamentService {
  getPosts() {
    return postArr;
  }

  addPost(post) {
    postArr.push({
      post,
    });
    return { status: 'ok' };
  }

  updatePost(data) {
    const {
      id,
      name,
      type,
      gameList,
      prizePool,
      status,
      image,
      startDate,
      endDate,
    } = data;

    const post = postArr.find((data) => data.id === id);

    if (post === undefined) {
      return 'запись не наедена';
    }

    post.name = name;
    post.type = type;
    post.gameList = gameList;
    post.prizePool = prizePool;
    post.status = status;
    post.image = image;
    post.startDate = startDate;
    post.endDate = endDate;

    return post;
  }

  deletePost(id) {
    const post = postArr.find((data) => data.id === id);

    if (post === undefined) {
      return 'запись не наедена';
    }

    post.id = undefined;
    post.name = undefined;
    post.type = undefined;
    post.gameList = undefined;
    post.prizePool = undefined;
    post.status = undefined;
    post.image = undefined;
    post.startDate = undefined;
    post.endDate = undefined;

    return post;
  }
}
