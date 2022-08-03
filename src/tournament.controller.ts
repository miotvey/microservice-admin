import { Controller, Get } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @MessagePattern('post.post.create')
  getHello(data) {
    console.log(data)
    return this.tournamentService.addPost(data);
  }

  @MessagePattern('get.post.list')
  getList(data) {
    console.log(data)
    // return [{name: "Название турнира", image: "Ссылка на картинку"}]
    return this.tournamentService.getPosts();
  }

  @MessagePattern('put.post')
  updatePost(data) {
    return this.tournamentService.updatePost(data)
  }

  @MessagePattern('delete.post')
  deletePost(id) {
    return this.tournamentService.deletePost(id)
  }

}
