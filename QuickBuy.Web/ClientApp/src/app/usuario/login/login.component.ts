import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  public usuario;
  public returnUrl: string;
  public mensagem: string;
  public ativar_spinner: boolean;
  //public usuarioAutenticado: boolean;
  //public usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5"];

  constructor(private router: Router, private activatedRouter: ActivatedRoute,
    private usuarioServico: UsuarioServico) {
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  public email = "";
  public senha = "";

  entrar(): void {
    this.ativar_spinner = true;
    this.usuarioServico.verificaUsuario(this.usuario)
      .subscribe(
        usuario_json => {
          this.usuarioServico.usuario = usuario_json
          //essa linha será executada no caso de retorno sem erros
          //var usuarioRetorno: Usuario;
          //usuarioRetorno = data;
          //sessionStorage.setItem("usuario-autenticado", "1");
          //sessionStorage.setItem("email-usuario", usuarioRetorno.email);
          if (this.returnUrl == null) {
            this.router.navigate(["/"]);
          }
          else {
            this.router.navigate([this.returnUrl]);
          }
          console.log(usuario_json);
        },
        err => {
          console.log(err.error);
          this.mensagem = err.error;
          this.ativar_spinner = false;
        }
      );
    //if (this.usuario.email == "marcus.tec@live.com" && this.usuario.senha == "abc123") {
    //  //this.usuarioAutenticado = true;
    //  sessionStorage.setItem("usuario-autenticado", "1");
    //  this.router.navigate([this.returnUrl]);
    //}
    ////else {
    ////  this.usuarioAutenticado = false;
    ////}
  }

}
