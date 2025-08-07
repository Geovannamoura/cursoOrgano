import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, Livro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from "../genero-literario/genero-literario.component";

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
//O onInit serve para inicializar o componente após a sua criação, sem precisar de uma acão do usuário.
export class ListaLivrosComponent implements OnInit{
  generos: GeneroLiterario[] = [];
  livrosPorgenero: Map<string, Livro[]> = new Map();

  ngOnInit() {
    this.livrosPorgenero = new Map(); //o map é uma estrutura de dados que permite armazenar pares chave-valor, onde a chave é o gênero literário e o valor é um array de livros desse gênero.
    livros.forEach((livro) => {
      const generoId = livro.genero.id
      if (!this.livrosPorgenero.has(generoId)) {
        this.livrosPorgenero.set(generoId, []);
      }
      this.livrosPorgenero.get(generoId)?.push(livro);
  })

  this.generos = [
    {
      id: 'romance',
      value: 'Romance',
      livros: this.livrosPorgenero.get('romance') ?? []
    },
    {
      id: 'aventura',
      value: 'Aventura',
      livros: this.livrosPorgenero.get('aventura') ?? []
    },
    {
      id: 'fantasia',
      value: 'Fantasia',
      livros: this.livrosPorgenero.get('fantasia') ?? []
    },
    {
      id: 'ficcao-cientifica',
      value: 'Ficção Científica',
      livros: this.livrosPorgenero.get('ficcao-cientifica') ?? []
    },
    {
      id: 'terror',
      value: 'Terror',
      livros: this.livrosPorgenero.get('terror') ?? []
    },
    {
      id: 'auto-ajuda',
      value: 'Auto Ajuda',
      livros: this.livrosPorgenero.get('auto-ajuda') ?? []
    },
  ]
  console.log(this.livrosPorgenero);
}
}