# Rocketseat-curso-javascript
 
 
 Desafio feito no curso de Javascript do Rocketseat.
 
 **2º exercício**

Crie uma tela com um ```<input>``` que deve receber o nome de um usuário no Github. Após digitar o nome do  suário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme URL abaixo) os dados  e repositórios do usuário e mostrá-los em tela:

URL de exemplo: https://api.github.com/users/diego3g/repos

Basta alterar "diego3g" pelo nome do usuário.

```html
<input type="text" name="user">
<button onclick="">Adicionar</button>
```

Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

```html
<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>
```

**3º exercício**

A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar da lista apenas enquanto a requisição estiver acontecendo:

```html
<li>Carregando...</li>
```
Além disso, adicione uma mensagem de erro em tela caso o usuário 
          no Github não exista.

