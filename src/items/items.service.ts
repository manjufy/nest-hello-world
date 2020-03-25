import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [];

    create(item: Item) {
        this.items.push(item);
    }

    findAll(): Item[] {
        return this.items;
    }
}
