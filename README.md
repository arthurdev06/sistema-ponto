# Sistema de Ponto

## Descrição

Um sistema de ponto eletrônico minimalista. Que vai além das funcionalidades de um sistema de ponto convencional. Adicionando funcionalidades que facilitam o trabalho dos dois lados, o funcionário e o supervisor, como cadastro de usuários, cadastro de ponto, visualização de pontos, registro de ocorrências ou afastamentos, relatórios de ponto, configuração de horários, dentre várias funcionalidades que podem nascer após testes, feedbacks e necessidades. Miro vender este projeto, junto da consultoria e suporte para empresas interessadas.

### Motivação

Um dia estava usando o sistema de ponto da empresa que trabalho e como sempre, estava insatisfeito com o sistema lento, instável, com uma interface não muito amigável e pouco intuitiva. Então resolvi criar um sistema que fosse mais simples e fácil de usar.

## Tecnologias Utilizadas

### Core

- Next.js com TypeScript - Framework React para desenvolvimento web
- Tailwind CSS - Framework CSS utilitário
- Supabase - Backend as a Service (BaaS) e autenticação

### UI e Componentes

- Shadcn/ui - Biblioteca de componentes baseada em Radix UI
- Lucide-react - Biblioteca de ícones
- Next-themes - Gerenciamento de temas claro/escuro

### Formulários e Validação

- React-hook-form - Gerenciamento de formulários
- Zod - Validação de dados e tipagem

### Utilitários

- Sonner - Sistema de notificações toast

## Conhecimentos adquiridos/aplicados

- Métodos HTTP, em conjunto com a criação, gerenciamento e consumo de APIs, para integrar o banco de dados.
- Conceitos de CRUD
- Elaboração de interfaces, não se esquecendo da responsividade e principais práticas de UI/UX.
- Conceitos de autenticação e autorização.
- Conceitos de banco de dados, relacionamento entre tabelas e queries.
- Conceitos de segurança, tratamento de dados sensíveis, persistência de dados, e sessões, usando verificações e avisos.
- Conceitos de testes e mock.
- Conceitos de deploy e CI/CD.
- Gerenciamento de projetos com Git e GitHub.

## Para fazer

- [ ] Login
  - Já fiz a parte da database e as verificações, só falta melhorar a interface de login.
- [ ] Cadastro de usuário(por meio de app externo)
  - [ ] Acho que por meio de um menu que aparece para os supervisores.
- [ ] Cadastro de ponto
  - [ ] Junto com esse vem as ações que o sistema faz atumaticamente, pois temos a carga horária de cada usuário, se o ponto for feito após o horário de saída ou antes do horário de entrada, o sistema registra como atraso ou saída adiantada, acho que só para o supervisor no relatório.
- [ ] Visualização de pontos
  - [ ] Criar parte de persistir a sessão do usuário após o login.
- [ ] Rigistrar ocorrências nos pontos(afastamentos)
- [ ] Relatórios de ponto
  - [ ] Conforme a carga horária quando o relatório for gerado, é mostrado o calculo de horas trabalhadas - horas não trabalhadas = horas a serem pagas.
  - [ ] Mostrar atrasos e saídas adiantadas.
  - [ ] Mostrar afastamentos e faltas.
- [ ] Configuração de horários
  - [ ] Criar uma página de configuração de horários.(parte do supervisor)
- [ ] Mostrar calendário com feriados e dias úteis, usando uma api de calendário.
