//genero-literario é o componente pai e livro é o componente filho
//o componente pai irá passar o livro para o componente filho
import { Component, input } from '@angular/core';
import { LivroComponent } from "../livro/livro.component";
import { GeneroLiterario } from '../livro/livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports: [
    LivroComponent, 
    CommonModule
  ],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>(); //recebendo o gênero literário como input
  //o componente filho ja consegue receber essa informação do componente pai
}
