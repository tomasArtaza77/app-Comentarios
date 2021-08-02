import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentarios';
import { ComentarioService } from 'src/app/service/comentario.service';

@Component({
  selector: 'app-list-cometarios',
  templateUrl: './list-cometarios.component.html',
  styleUrls: ['./list-cometarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentario[]=[ ];// array vacio


  constructor(private _comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.getComentarios();
  }


  getComentarios(){
    this._comentarioService.getListComentarios().subscribe(data => {
      this.listComentarios = data;

      }, error=>{
        console.log(error);
      })
   }


   eliminarComentario(id: any){ // el tipo any quiere decir que le puede llegar cualquier tipo de valor
     console.log(id); 
     this._comentarioService.deleteComentario(id).subscribe(data =>{
       this.getComentarios();
     }, error =>{
       console.log(error);
     })

   }
  

}
