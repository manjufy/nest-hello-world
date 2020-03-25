import { Controller, Get, Post, Header, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) {}

    @Post()
    @Header('Cache-Control', 'none')
    async create(@Body() createItemDto: CreateItemDto) {
        this.itemsService.create(createItemDto);
    }

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }
}
