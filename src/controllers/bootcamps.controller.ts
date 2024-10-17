import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {

    //EndPoint GET

    @Get()
    getAllBootcamps():string{
        return "Aqui se van a mostrar todos los Bootcamps"
    }

    @Get("/:id")
    getBootcampsId(@Param("id")id:number):string{
        return `aqui se va a mostrar el bootcamp cuyo id es: ${id}`
    }

    @Post()
    createBootcamps():string{
        return "aquie se va a crear un nuevo bootcamps"
    }
}
