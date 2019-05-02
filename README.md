# Tropweb
Projeto Integrador 

UNIVERSIDADE NOVE DE JULHO
PROJETO DE QUALIFICAÇÃO TECNOLÓGICA EM GESTÃO

GDG Solutions












Documento de Requisitos Sistema TROPWEB















São Paulo 
2019

Sumário


1.	Introdução
1.1.	Propósito do Documento
1.2.	Escopo do Produto
1.3.	Definição e Abreviações
1.4.	Visão Geral do Documento


2.	Descrição Geral
2.1.	Perspectiva do Produto
2.2.	Funções do Produto
2.3.	 Restrições Gerais


3.	Requisitos
3.1.	Requisitos Funcionais
3.2.	Requisitos não Funcionais 3.3. Outros Requisitos

4.	Atributos
4.1.	Disponibilidade
4.2.	Segurança
4.3.	Manutenção
 
1.	Introdução

1.1.	Propósito do Documento

Este documento contém a especificação de requisitos para o sistema TROPWEB ( GDG SOLUTIONS- Grupo de Estudo em Tecnologias em Sistemas para Internet), com o principal foco filantrópico em prol da resolução dos problemas sociais.

1.2.	Escopo do Produto

O sistema tem como objetivo filantropico coletar doacoes através de uma homepage para que elas sejam processdas e entregues para quem de direito.  
  .
1.3	Definições e Abreviações

As definições utilizadas neste documento serão abordadas posteriormente no glossário. Abreviações:
•	RF: requisito funcional;
•	RNF: requisito não funcional.


1.4	Visão Geral do documento
Este documento apresenta uma descrição geral do sistema, e logo em seguida descreve suas funcionalidades especificando as entradas e saídas para todos os requisitos funcionais. Faz também uma descrição sucinta dos requisitos não funcionais contidos neste sistema.

2.	Descrição Geral

Existirão duas plataformas o site TROPWEB que se encarregara de receber as doacões atraves de um formulario de cadastro simples, e painel administrativo TROPADM . 
Uma vez que  o usuario tenha feito o cadastro, esses dados serao enviados para um bando de dados alocado em servidor web que serão processados e gerenciados TROPADM.
Somente Administadores poderam criar,editar,excluir e enviar as doações para equipe de logistica para a retirada das doações.  
 
2.1.	Perspectiva do Produto

O sistema opera com uma máquina servidor que gerencia as doações vindas do site filantropico hospedado em servidor web e o banco de dados se encarrega de armazenar esses dados para que o painel administrativo exiba estes dados de foma clara e intuitiva. 

2.2.	Funções do Produto

Gerenciamento de Doações: inserir, modificar, excluir, consultar e resgatar as doações do banco de dados.
Gerenciamento de Usuários: cadastrar, modificar e excluir usuário do sistema.

2.3.	Restrições Gerais

O sistema não permitirá o acesso as doações por pessoas não cadastradas no sistema.
 
3.	Requisitos

3.1.	Requisitos Funcionais

RF. 1: Cadastro de Usuário.

Descrição: Somente o administrador do TROPADM poderá cadastrar os usuários do sistema. Entrada: Nome de usuário e senha.
Processo: O cadastro será incluído no banco de dados.
Saída: Mensagem de confirmação bem sucedido do cadastro caso tenha sido efetuado com sucesso, senão, mensagem de erro.

RF. 2: Modificação de Cadastrado de Usuário

Descrição: O usuário entra com o campo onde ele deseja modificar e o modifica. Entrada: Campo desejado e o novo dado.
Processo: Atualização do banco de dados.
Saída: Mensagem de confirmação bem sucedido da modificação do cadastro caso tenha sido efetuado com sucesso, senão, mensagem de erro.

RF 3: Exclusão do Cadastro de Usuário

Descrição: O administrador do TROPADM poderá excluir o cadastro dos usuários. Entrada: Nome de usuário
Processo: O sistema verifica se o usuário é cadastrado, se for o usuário é excluído.
Saída: Mensagem de confirmação bem sucedido da exclusão do cadastro caso tenha sido efetuado com sucesso, senão, mensagem de erro.

RF. 4: Inserção de Doações

Descrição: Os usuários cadastrados podem inserir doações com suas descrições.
Entrada: Autor(es), título, tipo de produto, local de retirada, upload de imagens e quantidade.
Processo: O sistema insere todos esses dados no no banco de dados.

RF.5: Modificação de Doações

Descrição: O usuário pode fazer alguma alteração na descrição das doações. Entrada: Campo desejado e o novo dado.
Processo: Atualização da descrição das doações no banco de dados.
Saída: Mensagem de confirmação bem sucedido da modificação caso tenha sido efetuado com sucesso, senão, mensagem de erro.

RF. 6: Exclusão de Doações

Descrição: O moderador pode efetuar a exclusão de doações. Entrada: Título
Processo: O sistema busca o título no banco de dados, caso ele encontre haverá uma funcionalidade que permitirá a exclusão da doação .
Saída: Mensagem de confirmação bem sucedido da exclusão da doação caso tenha sido efetuado com sucesso, senão, mensagem de erro.
 
RF. 7: Consulta e Resgate de Documentos

Descrição: O usuário pode buscar uma determinado doaçao de sua escolha através do  campo de busca.
Entrada: Campo(título, tipo de produto, local de retirada, upload de imagens e quantidade) ao qual o usuário deseja fazer a busca e o parâmetro de busca.
Processo: O sistema busca as doações referentes ao parâmetro de busca e retorna ao usuário.
Saída: Caso não encontre uma mensagem será apresentada informando que não foi contrado nenhuma doação com os parametros informados.

3.2- Requisitos Não Funcionais 3.2.1-Requisitos Organizacionais RNF. 1: Software.
O SGBD utilizado será o Firebase. Foi desenvolvido pelo Google apesar de ser gratuito pode ser integrado facilmente em multiplas plataformas.

RFN. 2: Linguagem de Programação
O Sistema será feito HTML, CSS, Javascript que são as principais linguagens de programação mais utilizadas no ambito de desenvolvimento de aplicações web.

RFN. 3: Hardware
A máquina servidora do banco de dados será a utilizada no Laboratório de Inteligência Artificial e Automação.


3.3-Outros Requisitos
Por ser uma aplicação WEB ela indifere o tipo de Sistema Operativo. 
4-Atributos

4.1-Disponibilidade
O sistema deve estar sempre disponível, caso ocorra alguma interrupção ele deve ser restaurado o mais rápido possível.

4.2-Segurança
Como o sistema será via WEB, ele deverá ser o mais seguro possível para que pessoas não autorizadas acessem as Doações inseridas do sistema.

4.3-Manutenção
A manutenção será feita por membros do Grupo GDG Solution responsáveis nessa área.
