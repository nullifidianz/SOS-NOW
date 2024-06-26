
# SOS NOW

A ideia de criar esse app veio devido após o desastre ocorrido no Rio Grande do Sul, como uma tentativa de centralizar em um só app diversas maneiras de auxiliar vitmas não só dessa tragédias mas de outras que possam vir a ocorrer. O projeto será apresentado para a disciplina de Desenvolvimento Mobile.  

Para fins de demonstração, apenas a funcionalidade de GPS e de Doações foram implementadas.
  


## Stacks utilizadas

**Front-end:** React-Native, Expo

**Back-end:** Firebase (authentication e realtime database)




## Componentes e suas funcionalidades
Autenticação de Usuário:

- Registro de novos usuários.
- Login de usuários existentes.

Gerenciamento de Doações:

- Adicionar novos lugares para doação.
- Listar lugares disponíveis.
- Visualizar detalhes de doações.

Mensagens com localização:

- Adicionar uma mensagem com a latitude e longitude do dispositivo.
- Ver o banco de dados com todas as mensagens enviadas.
- Clicar nas mensagens leva você ao ponto no Google Maps.

Integração com Realtime Database:

- Armazenamento de dados de usuários, doações e mensagens.
- Autenticação de usuários.

Navegação:

- Navegação entre telas
  
## Fluxograma

[![](https://mermaid.ink/img/pako:eNp1ks9S2zAQxl9Fs2eTiW1sGTPTGRIngZIynYZyQOawjdREU1vKyDZTCHmYDoeeOPYJ_GIVcgKkf3SSdn_f7idp1zDXXEAKC4OrJbnMjnNF7DphZ6p9mkt9Qw4O3pEBuxQFEi7IVC-kuumggcs9fK6a9oeRmqj2URMjFrKqDXL9QIYvsiFytFG9VQ6dMmOfOthKNRlLI75gJbZI5pCRRbhNWCcKyQoNklNdiv8YeNt71PV-Q48cPWZXsmqwkPdIMo3tz_aXqPaICTvhsmvYAY872xOXP2UzLG5fk_8w3xU6Yxd4KxZb387O5ONsD3n_NzJANdfPb5bZe-ycjR19zqb2fu5B_7R-7oApy0SNxVJUhO-5Bw9KYUqU3P71-lmSQ70UpcghtVuO5lsOudpYDptaz-7UHNLaNMKDZsWxFplEOyIlpF-xqGx0hepa63IH2SOka_gOqR_RXuwfRklAg-AoPgx9D-4gjYOen0RxEiZh_4iGNNp4cO8K9HuUBjRKKA39IArifuiB_fNamw_daLoJ3fwGhKLa9Q?type=png)](https://mermaid.live/edit#pako:eNp1ks9S2zAQxl9Fs2eTiW1sGTPTGRIngZIynYZyQOawjdREU1vKyDZTCHmYDoeeOPYJ_GIVcgKkf3SSdn_f7idp1zDXXEAKC4OrJbnMjnNF7DphZ6p9mkt9Qw4O3pEBuxQFEi7IVC-kuumggcs9fK6a9oeRmqj2URMjFrKqDXL9QIYvsiFytFG9VQ6dMmOfOthKNRlLI75gJbZI5pCRRbhNWCcKyQoNklNdiv8YeNt71PV-Q48cPWZXsmqwkPdIMo3tz_aXqPaICTvhsmvYAY872xOXP2UzLG5fk_8w3xU6Yxd4KxZb387O5ONsD3n_NzJANdfPb5bZe-ycjR19zqb2fu5B_7R-7oApy0SNxVJUhO-5Bw9KYUqU3P71-lmSQ70UpcghtVuO5lsOudpYDptaz-7UHNLaNMKDZsWxFplEOyIlpF-xqGx0hepa63IH2SOka_gOqR_RXuwfRklAg-AoPgx9D-4gjYOen0RxEiZh_4iGNNp4cO8K9HuUBjRKKA39IArifuiB_fNamw_daLoJ3fwGhKLa9Q)

## Screenshots
Tela de Login e tela de Cadastro - 

![Tela login](https://github.com/nullifidianz/SOS-NOW/blob/main/imgs/tela_login.png)

Tela Home - 

![Tela-Home](https://github.com/nullifidianz/SOS-NOW/blob/main/imgs/tela_home.png)

Tela GPS e DB de mensagens- 

![Tela-gps](https://github.com/nullifidianz/SOS-NOW/blob/main/imgs/telagps.png)
![Tela-db](https://github.com/nullifidianz/SOS-NOW/blob/main/imgs/teladb.png)

Tela Doação e Tela Cadastro de Doação - 

![Tela-doacao](https://github.com/nullifidianz/SOS-NOW/blob/main/imgs/tela_doacao.png)
![Tela-cadastro-doacao](https://github.com/nullifidianz/SOS-NOW/blob/main/imgs/tela_add_doacao.png)

## Aprendizados

Construindo esse projeto, aprendi como lidar com o desenvolvimento de aplicativos para mobile de maneira mais segura, também percebi que a maioria das dificuldades viream por usar uma IDE online para o desenvolvimento. Muitas bibliotecas ou ferramentas necessárias para fazer a ligação entre o firebase e a aplicação não funcionam da mesma maneira que o esperado, assim como a dependência React-Native-maps que também não funciona na IDE citada.
