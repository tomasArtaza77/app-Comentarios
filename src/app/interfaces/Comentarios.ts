export interface Comentario{
    id?: number; // el ? hace que la variable sea opcional
    titulo: string;
    creador: string;
    texto: string;
    fechaCreacion: Date;

}