import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entidades/Student..entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

//EndPoint : metodo que se ejecuta cuando se 
//invoca determinda URL desde el cliente http(Bruno)

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //EndPoint:
// Metodo(Verbo) http a utilizar(junto con la ruta)
// Firma del metodo a invocar
// intrucciones a ejecutar
@Get("prueba1")
mensaje():string{
  return"mensaje de pruba1"

}

@Get("/bootcamps/:id/curso/:cursoId")
mensajeBootcampsId(@Param("id") id:string,@Param("cursoId") cursoId:string): string{
 return `mostrar bootcamps con id: ${id} y el curso : ${cursoId}`
}

@Get("identificacion/:id")
getIdentificacion(@Query("nombre")nombre:string,
 @Query("edad")edad:number,@Query("ciudad") ciudad:string, 
 @Param("id")id:number):Student{
  return new Student(id,nombre,edad,ciudad)
}

}


