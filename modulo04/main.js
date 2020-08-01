
      /* MODULO 04

          * 2º exercício 
          
          Crie uma tela com um <input> que deve receber 
          o nome de um usuário no Github. Após digitar o nome do 
          usuário e clicar no botão buscar a aplicação deve buscar 
          pela API do Github (conforme URL abaixo) os dados de repositórios 
          do usuário e mostrá-los em tela: 
          
          URL de exemplo: https://api.github.com/users/diego3g/repos
          
          Basta alterar "diego3g" pelo nome do usuário.


          * 3º exercício

          A partir do resultado do exemplo anterior adicione um indicador 
          de carregamento em tela no lugar da lista apenas enquanto a requisição
          estiver acontecendo:

          <li>Carregando...</li>

          Além disso, adicione uma mensagem de erro em tela caso o usuário 
          no Github não exista.
      */
      
      

        var buttonElement = document.querySelector('button')
        var ulElement = document.querySelector('ul')
        var inputElement = document.querySelector('input')
        

        buttonElement.onclick = function(){            
            listRepositorios()
        }

        function listRepositorios(){
            var user = inputElement.value
            if (!user) return;
            renderLoading()
            axios.get(`https://api.github.com/users/${user}/repos`)
                .then(response => {    
                    renderRepositorios(response.data)
                })
                .catch(function(error){
                    renderError()
                })

        }

        function renderRepositorios(repositorios){
            ulElement.innerHTML="";
            for(repo of repositorios){
                const ilElement = document.createElement('li')
                const repoName = document.createTextNode(repo.name)

                ilElement.appendChild(repoName)
                ulElement.appendChild(ilElement)
            }

        }

        function renderLoading(){
            ulElement.innerHTML = "";

            var loadingElement = document.createElement('li')
            var textElement = document.createTextNode('Carregando...')
            
            loadingElement.appendChild(textElement)
            ulElement.appendChild(loadingElement)

        }

        function renderError(){
            ulElement.innerHTML = ""

            var errorElement = document.createElement('li')
            var textElement = document.createTextNode('Erro!')
            
            errorElement.style.color = 'red';
           
            errorElement.appendChild(textElement)
            ulElement.appendChild(errorElement)

        }


        

