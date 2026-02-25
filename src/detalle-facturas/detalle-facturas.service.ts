import { Injectable } from '@nestjs/common';

@Injectable()
export class DetalleFacturasService {
  private readonly items: any[] = [];

  findAll() {
    // Solo detalles disponibles
    return this.items.filter((i) => i.disponible !== false);
  }

  findOne(id: number) {
    return this.items.find((i) => i.id === id);
  }

  create(dto: any) {
    const id = this.items.length + 1;
    const item = { id, disponible: true, ...dto };
    this.items.push(item);
    return item;
  }

  update(id: number, dto: any) {
    const idx = this.items.findIndex((i) => i.id === id);
    if (idx === -1) return null;
    const updated = { ...this.items[idx], ...dto, id };
    this.items[idx] = updated;
    return updated;
  }

  // Borrado lógico: setear `disponible` a false
  remove(id: number) {
    const idx = this.items.findIndex((i) => i.id === id);
    if (idx === -1) return null;
    this.items[idx].disponible = false;
    return this.items[idx];
  }
}
