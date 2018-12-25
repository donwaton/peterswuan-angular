import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  user : any;
  errorMsg : string;
  formLogin = new FormGroup({
    user_name : new FormControl(),
    user_password: new FormControl()
  });

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() {
    if(localStorage.getItem('logIn')=="true") this.route.navigate(['/home']); 
  }

  login(){
    this.loading = true;
    this.loginService.login(this.formLogin.value)
      .subscribe(resp=>{
        this.user = resp.usuario;
        localStorage.setItem('user_id', this.user.user_id );
        localStorage.setItem('tipousuario_nombre', this.user.tipousuario_nombre );
        localStorage.setItem('user_names', this.user.user_names );
        localStorage.setItem('user_email', this.user.user_email );
        localStorage.setItem('logIn', 'true' );  
        this.loading = false;
        this.route.navigate(['/home']); 
      },
      error => {
        this.errorMsg = error.error.mensaje;
        this.loading = false;
      }
    )
  }

}
