import { Component } from "@angular/core";

@Component({
  selector: "app-produto",
  template: "<html><body>{{ obterNome() }}</body></html>"
})
export class ProdutoComponent {
  //public id: number;
  //public nome: string;
  //public preco: number;
  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    return "Samsung";//this.nome;
  }

}
