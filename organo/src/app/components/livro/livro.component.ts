//o livro é o componente filho e genero-literario é o componente pai
//o componente pai irá passar o livro para o componente filho
import { Component, input } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  //passando o livro como input
  // O input é obrigatório, então usamos input.required<Livro>()
  // Isso significa que o componente LivroComponent deve receber um objeto do tipo Livro
  livro = input.required<Livro>(); //esse input irá nos retornar uma signal(função) que irá receber o livro

  alternarFavorito(){
    this.livro().favorito = !this.livro().favorito;
    //o livro() é a função retornada pelo input, que nos dá acesso ao objeto Livro
  }
}
