import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentarios';

@Component({
  selector: 'app-list-cometarios',
  templateUrl: './list-cometarios.component.html',
  styleUrls: ['./list-cometarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentario[]=[ // array vacio
    {titulo: 'Angular',creador: 'Emiliano',fechaCreacion: new Date(),texto:'Framework para crear SPA'},
    {titulo: 'React',creador: 'Fernando',fechaCreacion: new Date(),texto:'Librería para crear SPA'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
