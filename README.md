<details>
<summary>
PT-BR:  
</summary>

# Sistema de Ponto

### Descrição

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

- [ ] Login estava feito a parte do client, mas tiver que refazer para o server
  - [ ] Tenho que ajustar erros com credenciais inválidas
- [ ] Cadastro de usuário
  - [ ] Acho que por meio de um menu que aparece para o dashboard principal, mas só pode ser acessado pelo supervisor.
  - [ ] Tenho que adicionar todos os campos da tabela e tenho que cadastrar um usuário para ver se os erros de credenciais persistem
- [ ] Cadastro de ponto
  - [ ] Pensar no design, acho que um botão para registrar um usuário, um botão para editar o usuário, um botão para deletar o usuário(esse tem que ter uma confirmação, como senha ou código).
    - [ ] Dividir a página em duas, uma com os botões, outra com uma tela mostrando atualizações como último usuário registrado, junto com horário, id e supervisor que o registrou.
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
- [ ] Criar página de informações, com guia do sistema para o usuário comum, pois o supervisor é repassado para a gerência.
  - [ ] Adicionar uma parte sobre a estabilidade do sistema, status do sistema, versão do sistema, contato com o suporte.
  - [ ] Adicionar uma parte sobre a empresa, como propósito, missão, visão, valores.
  - [ ] Adicionar uma parte sobre o criador do sistema, como nome, contato, redes sociais.
- [ ] Adicionar página para recesso para o funcionário agendar o seu recesso, que é enviado para o supervisor por meio do sistema de notificações
- [ ] Adicionar página para recisão de contrato para o funcionário pedir sua recisão que também é enviado para o supervisor por meio do sistema de notificações
- [ ] Adicionar um painel com todos os funcionáriospara os supervisores conseguirem:
  - [ ] Este painel terá uma tabela com as notificações em cima para mostrar coisas recentes como os agendamentos de afastamentos, recessos, solicitações de afastamento, etc e avisos automáticos que o sistema mostrará, como abrimento da folha de pagamento, feriados, greves, avisos.
    - [ ] Adicionar afastamentos, como também editar a folha de ponto
    - [ ] Ver relatórios
    - [ ] Ver status de recisão e recesso
    - [ ] Adicionar advertências
    - [ ] Notificar o funcionário de algo, aviso ou solicitação
    - [ ] Cortar o pagamento
    - [ ] Solicitar o afastamento
- [ ] Todas essas funcionalidades integradas com um sistema de notificações

</details>

<details>
<summary>
EN:  
</summary>

# Frenquency Control System

### Description

A minimalist frequency control system that goes beyond conventional frequency control functionalities. Adding features that facilitate work on both sides, employee and supervisor, such as user registration, time clock entries, time records visualization, occurrence or leave registration, time reports, schedule configuration, among various features that may arise after testing, feedback, and needs. I aim to sell this project, along with consulting and support for interested companies.

### Motivation

One day I was using my company's frequency control system and, as always, I was unsatisfied with the slow, unstable system, with its unfriendly and unintuitive interface. So I decided to create a system that would be simpler and easier to use.

## Technologies Used

### Core

- Next.js with TypeScript - React framework for web development
- Tailwind CSS - Utility-first CSS framework
- Supabase - Backend as a Service (BaaS) and authentication

### UI and Components

- Shadcn/ui - Component library based on Radix UI
- Lucide-react - Icon library
- Next-themes - Light/dark theme management

### Forms and Validation

- React-hook-form - Form management
- Zod - Data validation and typing

### Utilities

- Sonner - Toast notification system

## Knowledge acquired/applied

- HTTP methods, along with creation, management and consumption of APIs, to integrate the database
- CRUD concepts
- Interface development, considering responsiveness and main UI/UX practices
- Authentication and authorization concepts
- Database concepts, table relationships and queries
- Security concepts, sensitive data handling, data persistence, and sessions, using verifications and warnings
- Testing and mock concepts
- Deploy and CI/CD concepts
- Project management with Git and GitHub

## To do

- [ ] Login
  - Already done the database part and verifications, just need to improve the login interface
- [ ] User registration (through external app)
  - [ ] Probably through a menu that appears for supervisors
- [ ] Time clock entry
  - [ ] Along with this comes the actions that the system does automatically, as we have each user's workload, if the entry is made after departure time or before entry time, the system registers it as late or early departure, I think only for the supervisor in the report
- [ ] Time records visualization
  - [ ] Create user session persistence after login
- [ ] Register occurrences in time records (leaves)
- [ ] Time reports
  - [ ] According to workload when the report is generated, it shows the calculation of hours worked - hours not worked = hours to be paid
  - [ ] Show delays and early departures
  - [ ] Show leaves and absences
- [ ] Schedule configuration
  - [ ] Create a schedule configuration page (supervisor part)
- [ ] Show calendar with holidays and working days, using a calendar API
</details>
