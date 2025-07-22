//genero-literario é o componente pai e livro é o componente filho
//o componente pai irá passar o livro para o componente filho
import { Component } from '@angular/core';
import { LivroComponent } from "../livro/livro.component";
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  livro = livros[0]; // Exemplo de uso do livro, você pode alterar conforme necessário
}
