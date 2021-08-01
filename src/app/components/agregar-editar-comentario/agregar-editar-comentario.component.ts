import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from 'src/app/interfaces/Comentarios';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})

export class AgregarEditarComentarioComponent implements OnInit {


  agregarComentario: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.agregarComentario = this.fb.group({  // fb.group recibe objetos agrupados
      titulo: ['',Validators.required],
      creador: ['',Validators.required],
      texto: ['',Validators.required]
    });
  }


  ngOnInit(): void {
  }

  agregar(){
    console.log(this.agregarComentario); 
    const comentario: Comentario = {
      titulo: this.agregarComentario.get('titulo')?.value,
      creador: this.agregarComentario.get('titulo')?.value,
      texto: this.agregarComentario.get('titulo')?.value,
      fechaCreacion: new Date
    }
    console.log(comentario);
  }

}
