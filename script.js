// Simulação de dados de livros
const livros = [
    { titulo: "O Alquimista", autor: "Paulo Coelho" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "Dom Casmurro", autor: "Machado de Assis" }
];

const livrosDiv = document.getElementById('livros');

livros.forEach(livro => {
    const livroElemento = document.createElement('div');
    livroElemento.className = 'livro';
    livroElemento.innerHTML = `<h3>${livro.titulo
    }// Dados iniciais dos livros
    const livros = [
        { titulo: "O Alquimista", autor: "Paulo Coelho" },
        { titulo: "1984", autor: "George Orwell" },
        { titulo: "Dom Casmurro", autor: "Machado de Assis" }
    ];
    
    // Referências do DOM
    const livrosDiv = document.getElementById('livros');
    const searchInput = document.getElementById('search');
    const addBookForm = document.getElementById('add-book-form');
    const tituloInput = document.getElementById('titulo');
    const autorInput = document.getElementById('autor');
    
    // Função para exibir livros
    function exibirLivros(filtro = '') {
        livrosDiv.innerHTML = '';
        const livrosFiltrados = livros.filter(livro => 
            livro.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
            livro.autor.toLowerCase().includes(filtro.toLowerCase())
        );
        livrosFiltrados.forEach(livro => {
            const livroElemento = document.createElement('div');
            livroElemento.className = 'livro';
            livroElemento.innerHTML = `<h3>${livro.titulo}</h3><p><em>${livro.autor}</em></p>`;
            livrosDiv.appendChild(livroElemento);
        });
    }
    
    // Inicialmente exibir todos os livros
    exibirLivros();
    
    // Adicionar evento de busca
    searchInput.addEventListener('input', (e) => {
        exibirLivros(e.target.value);
    });
    
    // Adicionar evento de envio do formulário
    addBookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const titulo = tituloInput.value.trim();
        const autor = autorInput.value.trim();
        if (titulo && autor) {
            livros.push({ titulo, autor });
            exibirLivros();
            tituloInput.value = '';
            autorInput.value = '';
        }
    });
    
