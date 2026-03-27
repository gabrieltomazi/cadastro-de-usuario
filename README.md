<h1 align="center">📝 Cadastro de Usuários (Full Stack)</h1>

<div align="center">
  <a href="https://cadastro-de-usuario-tawny.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Acessar%20Projeto-Clique%20Aqui-blue?style=for-the-badge&logo=vercel" alt="Link do Projeto">
  </a>
  <p>
    <strong>⚠️ Nota importante:</strong> O backend utiliza hospedagem gratuita no Render. 
    Na primeira vez que acessar, o servidor pode levar cerca de 50 segundos para "acordar".
  </p>
</div>

<p>
  Este é um sistema completo de gerenciamento de usuários desenvolvido por <strong>Gabriel Tomazi</strong> para consolidar conhecimentos em desenvolvimento <strong>Full Stack</strong>. 
  O projeto integra uma interface moderna e responsiva no <strong>React</strong> com um servidor escalável em <strong>Node.js</strong>, 
  utilizando o <strong>MongoDB Atlas</strong> como banco de dados através do <strong>Prisma ORM</strong>.
</p>

<hr>

<h2>🛠️ Tecnologias Utilizadas</h2>
<ul>
  <li><strong>Frontend:</strong> React.js (Vite), Styled Components e Axios.</li>
  <li><strong>Backend:</strong> Node.js com Framework Express.</li>
  <li><strong>Banco de Dados & ORM:</strong> MongoDB Atlas e Prisma.</li>
  <li><strong>Hospedagem:</strong> Vercel (Frontend) e Render (Backend).</li>
</ul>



<hr>

<h2>📸 Demonstração do Projeto</h2>

<table align="center">
  <tr>
    <td align="center">
      <p><strong>Tela de Cadastro</strong></p>
      <img width="1720" alt="projeto-cadastro-usuario" src="https://github.com/user-attachments/assets/022c91ae-4b9c-4b49-9224-bb03ba59b03c" />
    </td>
    <td align="center">
      <p><strong>Lista de Usuários</strong></p>
      <img width="1720" alt="projeto-cadastro-usuario2" src="https://github.com/user-attachments/assets/545813e7-71d3-41ad-a0d4-cedca98a42b3" />
    </td>
  </tr>
</table>

<hr>

<h2>🚀 Funcionalidades Principais</h2>
<ul>
  <li>✅ <strong>Cadastro de Usuários:</strong> Envio de nome, idade e e-mail via formulário validado.</li>
  <li>✅ <strong>Listagem Dinâmica:</strong> Visualização em tempo real de todos os registros no banco.</li>
  <li>✅ <strong>Remoção (Delete):</strong> Exclusão de registros com atualização automática da interface.</li>
  <li>✅ <strong>Tratamento de Erros:</strong> Implementação de blocos try/catch para garantir a resiliência da API.</li>
  <li>✅ <strong>Experiência do Usuário:</strong> Estado de Loading implementado para gerenciar o Cold Start do servidor.</li>
</ul>

<hr>

<h2>📂 Como Executar Localmente</h2>

<h3>1. Clonar o Repositório</h3>
<pre><code>git clone https://github.com/gabrieltomazi/cadastro-de-usuario.git</code></pre>

<h3>2. Configurar o Servidor (Backend)</h3>
<pre><code>
cd server
npm install
# Crie um arquivo .env na pasta server e adicione sua DATABASE_URL do MongoDB
npx prisma generate
npm run dev
</code></pre>

<h3>3. Configurar o Cliente (Frontend)</h3>
<pre><code>
cd client
npm install
npm run dev
</code></pre>

<hr>

<h2>👤 Autor</h2>
<p>
  <strong>Gabriel Tomazi</strong><br>
  🎓 Estudante de Engenharia de Software na SATC<br>
  💻 Desenvolvedor Front-End focado em tecnologias modernas<br>
  📸 Instagram: <a href="https://www.instagram.com/gabrieltomazi_">@gabrieltomazi_</a>
</p>
