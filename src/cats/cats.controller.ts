import { Controller, Get, Post, Header, Body, Query } from '@nestjs/common';
import { CreateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
    @Post()
    @Header('Cache-Control', 'none')
    async create(@Body() createCatDto: CreateCatDto) {
        return [];
    }

    @Get()
    findAll(@Query() query: ListAllEntities) {
        return `This action returns all cats (limit: ${query.limit})`;
    }
}
