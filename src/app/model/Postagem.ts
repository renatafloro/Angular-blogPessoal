import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public id: number
    public titulo: string
    public texto: string
    public criador: Usuario
    public tema: Tema
}