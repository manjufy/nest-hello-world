import { Controller, Get, Post, Header } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Post()
    @Header('Cache-Control', 'none')
    create(): [] {
        return [];
    }

    @Get()
    getAll(): [] {
        return []
    }
}
