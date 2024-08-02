import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ecommerceproj';
  constructor(private authService: AuthService, private router : Router) {
    debugger;
  }
   isauth:any;
  ngOnInit(): void {
     this.isauth=this.authService;
     console.log(this.isauth)
  }
  logout(): void {
    this.authService.logout();
    console.log(this.authService.isAuthenticated())
    this.router.navigate(['Home']);
   ;
  }
}
