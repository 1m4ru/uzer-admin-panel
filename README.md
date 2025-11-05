# Zucchetti User Panel

![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-3178c6?logo=typescript&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-5.15.0-007fff?logo=mui&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-5.0-ff4154?logo=reactquery&logoColor=white)
![Yup](https://img.shields.io/badge/Yup-Validation-2c5282?logo=yup&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-92%25_Test_Coverage-99425b?logo=jest&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Sobre o Projeto

O **Zucchetti User Panel** é um painel web moderno e responsivo para **gestão de usuários**, desenvolvido como parte de um **desafio técnico Zucchetti**.

A aplicação permite **listar, cadastrar, editar e excluir usuários** com feedback visual instantâneo, validação de formulários, persistência de tema (dark/light) e integração com API REST mockada.

Além da entrega funcional, o projeto foi construído com foco em:
- **qualidade de código (ESLint + Prettier)**  
- **boas práticas de arquitetura React com hooks e contextos**  
- **alta cobertura de testes automatizados (92%)**

---

## ⚙️ Tecnologias e Decisões Técnicas

Cada escolha tecnológica foi feita com o objetivo de equilibrar **performance, escalabilidade e clareza de código**.

- **React + Hooks** — estrutura moderna e declarativa para criar interfaces reativas, facilitando manutenção e testes.  
- **Context API** — gerenciamento global leve, substituindo Redux em um projeto de escopo médio sem perda de legibilidade.  
- **TypeScript** — aumenta a confiabilidade e a escalabilidade do código, evitando erros de tipagem e melhorando a DX.  
- **Material UI (MUI)** — fornece componentes acessíveis e consistentes, acelerando o design com foco em usabilidade e responsividade.  
- **React Query** — simplifica a comunicação com APIs, com cache automático, invalidation e refetch inteligente.  
- **Yup** — validação de schemas declarativa e flexível, garantindo dados corretos no formulário.   
- **Jest + React Testing Library** — suite de testes cobrindo renderização, criação, atualização e interação de usuários (92% de cobertura).  
- **ESLint + Prettier** — garante padronização e consistência de código em toda a base.  
- **useMediaQuery + Suspense** — suporte a dark mode automático e otimização de carregamento (code-splitting).

Essas decisões criam uma base sólida, fácil de manter e expandir — digna de produção.

---

## Funcionalidades Principais

**Listagem de usuários** com busca e ordenação  
**Criação e edição** com formulário validado e feedback de sucesso/erro  
**Exclusão com confirmação visual** (modal)  
**Dark Mode** responsivo ao sistema  
**Transições suaves e layout responsivo (cards no mobile)**  
**Testes automatizados de interface e integração**  
**Arquitetura modular e escalável**

---

## Testes Automatizados

**Cobertura total: 92%**

Os testes cobrem:
- Renderização e interatividade dos componentes principais  
- Criação e atualização de usuários  
- Atualização de estado global via Context API  
- Interações simuladas com Jest e React Testing Library  

Para rodar os testes:
```bash
npm test
# ou
yarn test

# Instalar dependências
npm install

# Rodar o projeto
npm run dev

``` 
src/
 ├─ api/                # Integração com API REST
 ├─ components/         # Componentes reutilizáveis (tabela, modais, etc.)
 │   ├─ userList/
 │   ├─ Header.tsx
 │   ├─ Hero.tsx
 │   └─ Footer.tsx
 ├─ context/            # UserProvider + gerenciamento global
 ├─ hooks/              # Hooks customizados (useFilteredUsers, usePagination, etc.)
 ├─ services/           # Lógica React Query (CRUD)
 ├─ theme/              # Configuração de tema (light/dark)
 ├─ validations/        # Schemas Zod
 └─ tests/              # Testes automatizados

## 🧾 Licença

Este projeto foi desenvolvido exclusivamente para fins de avaliação técnica no processo seletivo da **Zucchetti Brasil**.  
Código livre para análise, estudo e revisão técnica.


Projeto desenvolvido para o desafio técnico Zucchetti Brasil 🚀