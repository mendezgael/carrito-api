import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
  private readonly items: any[] = [];

  findAll() {
    return this.items;
  }

  findOne(id: number) {
    return this.items.find((i) => i.id === id);
  }

  create(dto: any) {
    const id = this.items.length + 1;
    const item = { id, ...dto };
    this.items.push(item);
    return item;
  }
}
