# forlogic-schedule-api
Fake API para treinamento de estagiários do Grupo Forlogic.

<h1>Endereço da API</h1>
https://my-json-server.typicode.com/lgmf/forlogic-schedule-api

<h1>Documentação:</h1>

<h3>Uso básico:</h3>
<ul>
<li>GET    /contacts</li>
<li>GET    /contacts/{id}</li>
<li>POST   /contacts</li>
<li>PUT    /contacts/{id}</li>
<li>PATCH  /contacts/{id}</li>
<li>DELETE /contacts/{id}</li>
</ul>

<p>Para utilizar o POST é necessário adicionar no header da requisição: <b>{ "Content-Type": "application/json" }</b> </p>

<h3>Query Params:</h3>
<ul>
<li>GET    /contacts?name={NOME_DO_CONTATO}</li>
<li>GET    /contacts?name={NOME_DO_CONTATO1}&name={NOME_DO_CONTATO2}</li>
<li>GET    /contacts?info.company=qualiex</li>
</ul>

<h3>Acessando propriedades mais internas:</h3>
<ul>
<li>GET    /contacts?info.company=qualiex</li>
</ul>

<h1>Ver mais em:</h1>
https://github.com/typicode/json-server#database
