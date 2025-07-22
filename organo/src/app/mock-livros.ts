import { Livro } from './components/livro/livro';

export const livros: Livro[] = [
    {
        titulo: 'O Senhor dos Anéis',
        autoria: 'J.R.R. Tolkien',
        favorito: false,
        genero: {
            id: 'ficção',
            value: 'Ficção',
            livros: []
        },
        imagem: 'https://harpercollins.com.br/cdn/shop/products/9786555114249.jpg?v=1691738136'
    },
    {
        titulo: '1984',
        autoria: 'George Orwell',
        favorito: false,
        genero: {
            id: 'distopia',
            value: 'distopia',
            livros: []
        },
        imagem: 'https://images-na.ssl-images-amazon.com/images/I/41b1k2d5ZlL._SX331_BO1,204,203,200_.jpg'
    }
]