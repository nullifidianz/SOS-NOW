
# SOS NOW

A ideia de criar esse app veio devido após o desastre ocorrido no Rio Grande do Sul, como uma tentativa de centralizar em um só app diversas maneiras de auxiliar vitmas não só dessa tragédias mas de outras que possam vir a ocorrer. O projeto será apresentado para a disciplina de Desenvolvimento Mobile.  

Para fins de demonstração, apenas a funcionalidade de GPS e de Doações foram implementadas.
  


## Stacks utilizadas

**Front-end:** React-Native, Expo

**Back-end:** Firebase (authentication e realtime database)


## Componentes e suas funcionalidades
App.js:
- Configura a navegação de pilha utilizando @react-navigation/native-stack.
MainTabNavigator.js:
- Configura a navegação de abas utilizando @react-navigation/bottom-tabs.
TelaLogin.js:
- Tela de login dos usuários, utiliza Firebase Authentication.
TelaCadastro.js:
- Tela de cadastro dos usuários, utiliza Firebase Authentication.
TelaAddDoacao.js:
- Permite adicionar uma doação ao Firebase Realtime Database.
## Fluxograma

[![](https://mermaid.ink/img/pako:eNp1ks9S2zAQxl9Fs2eTiW1sGTPTGRIngZIynYZyQOawjdREU1vKyDZTCHmYDoeeOPYJ_GIVcgKkf3SSdn_f7idp1zDXXEAKC4OrJbnMjnNF7DphZ6p9mkt9Qw4O3pEBuxQFEi7IVC-kuumggcs9fK6a9oeRmqj2URMjFrKqDXL9QIYvsiFytFG9VQ6dMmOfOthKNRlLI75gJbZI5pCRRbhNWCcKyQoNklNdiv8YeNt71PV-Q48cPWZXsmqwkPdIMo3tz_aXqPaICTvhsmvYAY872xOXP2UzLG5fk_8w3xU6Yxd4KxZb387O5ONsD3n_NzJANdfPb5bZe-ycjR19zqb2fu5B_7R-7oApy0SNxVJUhO-5Bw9KYUqU3P71-lmSQ70UpcghtVuO5lsOudpYDptaz-7UHNLaNMKDZsWxFplEOyIlpF-xqGx0hepa63IH2SOka_gOqR_RXuwfRklAg-AoPgx9D-4gjYOen0RxEiZh_4iGNNp4cO8K9HuUBjRKKA39IArifuiB_fNamw_daLoJ3fwGhKLa9Q?type=png)](https://mermaid.live/edit#pako:eNp1ks9S2zAQxl9Fs2eTiW1sGTPTGRIngZIynYZyQOawjdREU1vKyDZTCHmYDoeeOPYJ_GIVcgKkf3SSdn_f7idp1zDXXEAKC4OrJbnMjnNF7DphZ6p9mkt9Qw4O3pEBuxQFEi7IVC-kuumggcs9fK6a9oeRmqj2URMjFrKqDXL9QIYvsiFytFG9VQ6dMmOfOthKNRlLI75gJbZI5pCRRbhNWCcKyQoNklNdiv8YeNt71PV-Q48cPWZXsmqwkPdIMo3tz_aXqPaICTvhsmvYAY872xOXP2UzLG5fk_8w3xU6Yxd4KxZb387O5ONsD3n_NzJANdfPb5bZe-ycjR19zqb2fu5B_7R-7oApy0SNxVJUhO-5Bw9KYUqU3P71-lmSQ70UpcghtVuO5lsOudpYDptaz-7UHNLaNMKDZsWxFplEOyIlpF-xqGx0hepa63IH2SOka_gOqR_RXuwfRklAg-AoPgx9D-4gjYOen0RxEiZh_4iGNNp4cO8K9HuUBjRKKA39IArifuiB_fNamw_daLoJ3fwGhKLa9Q)
## Screenshots
Tela de Login e tela de Cadastro - 

![Tela login](./app/assets/images/banner.png)

Tela Home - 

![Tela-Home](./app/assets/images/banner.png)

Tela GPS e DB de mensagens- 

![Tela-gps](./app/assets/images/banner.png)
![Tela-db](./app/assets/images/banner.png)

Tela Doação e Tela Cadastro de Doação - 

![Tela-doacao](./app/assets/images/banner.png)
![Tela-cadastro-doacao](./app/assets/images/banner.png)

## Aprendizados

Construindo esse projeto, aprendi como lidar com o desenvolvimento de aplicativos para mobile de maneira mais segura, também percebi que a maioria das dificuldades viream por usar uma IDE online para o desenvolvimento. Muitas bibliotecas ou ferramentas necessárias para fazer a ligação entre o firebase e a aplicação não funcionam da mesma maneira que o esperado, assim como a dependência React-Native-maps que também não funciona na IDE citada.
