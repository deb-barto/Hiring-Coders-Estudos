const filmes = [
    {
        titulo: 'Dancer in the Dark',
        id: 1,
        descrição:'Um filme de lars von trie muito triste',
        duração:120
    },
    {
        titulo: 'Tumulo dos vagalumes',
        id: 2,
        descrição:'Um filme muito triste',
        duração:130
    },
    {
        titulo:  'minha vida',
        id: 3,
        descrição:'muito triste',
        duração:140
    }
]

const [{id, titulo, descrição, duração}] = filmes
filmes.map(filmes => console.log(filmes.descrição))

