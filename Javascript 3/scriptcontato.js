   // Array para armazenar os contatos
   let contatos = [];
   let posicaoAtual = -1;
   let editando = false;

   // Referências aos elementos do DOM
   const nomeInput = document.getElementById('nome');
   const sobrenomeInput = document.getElementById('sobrenome');
   const enderecoInput = document.getElementById('endereco');
   const telefoneInput = document.getElementById('telefone');

   const btnIncluir = document.getElementById('btnIncluir');
   const btnEditar = document.getElementById('btnEditar');
   const btnSalvar = document.getElementById('btnSalvar');
   const btnCancelar = document.getElementById('btnCancelar');
   const btnExcluir = document.getElementById('btnExcluir');

   const btnPrimeiro = document.getElementById('btnPrimeiro');
   const btnAnterior = document.getElementById('btnAnterior');
   const btnProximo = document.getElementById('btnProximo');
   const btnUltimo = document.getElementById('btnUltimo');

   // Função para atualizar o formulário com os dados do contato atual
   function atualizarFormulario() {
       if (posicaoAtual >= 0 && posicaoAtual < contatos.length) {
           const contato = contatos[posicaoAtual];
           nomeInput.value = contato.nome;
           sobrenomeInput.value = contato.sobrenome;
           enderecoInput.value = contato.endereco;
           telefoneInput.value = contato.telefone;

           // Habilitar botões de editar e excluir apenas se não estiver editando
           btnEditar.disabled = editando ? true : false;
           btnExcluir.disabled = editando ? true : false;
       } else {
           // Limpar campos
           nomeInput.value = '';
           sobrenomeInput.value = '';
           enderecoInput.value = '';
           telefoneInput.value = '';

           // Desabilitar botões de editar e excluir
           btnEditar.disabled = true;
           btnExcluir.disabled = true;
       }

       // Desabilitar campos de entrada se não estiver editando
       nomeInput.disabled = !editando;
       sobrenomeInput.disabled = !editando;
       enderecoInput.disabled = !editando;
       telefoneInput.disabled = !editando;

       // Controlar os botões de navegação
       btnPrimeiro.disabled = (posicaoAtual <= 0) || editando || contatos.length === 0;
       btnAnterior.disabled = (posicaoAtual <= 0) || editando || contatos.length === 0;
       btnProximo.disabled = (posicaoAtual >= contatos.length - 1) || editando || contatos.length === 0;
       btnUltimo.disabled = (posicaoAtual >= contatos.length - 1) || editando || contatos.length === 0;

       // Controlar os botões de ação
       btnIncluir.disabled = editando;
       btnEditar.disabled = editando || (posicaoAtual === -1);
       btnExcluir.disabled = editando || (posicaoAtual === -1);
       btnSalvar.disabled = !editando;
       btnCancelar.disabled = !editando;
   }

   // Função para navegar para o primeiro registro
   function primeiroRegistro() {
       if (contatos.length > 0) {
           posicaoAtual = 0;
           atualizarFormulario();
       }
   }

   // Função para navegar para o último registro
   function ultimoRegistro() {
       if (contatos.length > 0) {
           posicaoAtual = contatos.length - 1;
           atualizarFormulario();
       }
   }

   // Função para navegar para o próximo registro
   function proximoRegistro() {
       if (posicaoAtual < contatos.length - 1) {
           posicaoAtual++;
           atualizarFormulario();
       }
   }

   // Função para navegar para o registro anterior
   function registroAnterior() {
       if (posicaoAtual > 0) {
           posicaoAtual--;
           atualizarFormulario();
       }
   }

   // Função para iniciar a inclusão de um novo contato
   function adicionarContato() {
       editando = true;
       posicaoAtual = contatos.length; // Nova posição para adicionar
       atualizarFormulario();

       // Limpar os campos para nova entrada
       nomeInput.value = '';
       sobrenomeInput.value = '';
       enderecoInput.value = '';
       telefoneInput.value = '';
   }

   // Função para iniciar a edição do contato atual
   function editarContato() {
       if (posicaoAtual >= 0 && posicaoAtual < contatos.length) {
           editando = true;
           atualizarFormulario();
       }
   }

   // Função para salvar o contato (novo ou editado)
   function salvarContato() {
       const nome = nomeInput.value.trim();
       const sobrenome = sobrenomeInput.value.trim();
       const endereco = enderecoInput.value.trim();
       const telefone = telefoneInput.value.trim();

       if (!nome || !sobrenome || !endereco || !telefone) {
           alert('Por favor, preencha todos os campos!');
           return;
       }

       const contato = { nome, sobrenome, endereco, telefone };

       if (posicaoAtual >= 0 && posicaoAtual < contatos.length) {
           // Edição
           contatos[posicaoAtual] = contato;
       } else {
           // Inclusão
           contatos.push(contato);
           posicaoAtual = contatos.length - 1;
       }

       editando = false;
       atualizarFormulario();
   }

   // Função para cancelar a edição ou inclusão
   function cancelarEdicao() {
       if (contatos.length > 0 && posicaoAtual >= 0 && posicaoAtual < contatos.length) {
           atualizarFormulario();
       } else {
           // Se estava adicionando e cancelou, limpar os campos
           posicaoAtual = -1;
           atualizarFormulario();
       }
       editando = false;
   }

   // Função para excluir o contato atual
   function excluirContato() {
       if (posicaoAtual >= 0 && posicaoAtual < contatos.length) {
           if (confirm('Tem certeza que deseja excluir este contato?')) {
               contatos.splice(posicaoAtual, 1);
               if (contatos.length === 0) {
                   posicaoAtual = -1;
               } else if (posicaoAtual >= contatos.length) {
                   posicaoAtual = contatos.length - 1;
               }
               atualizarFormulario();
           }
       }
   }

   // Inicializar o formulário
   atualizarFormulario();