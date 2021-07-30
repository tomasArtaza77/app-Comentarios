import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img = 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/09/att-logo-600x600.jpg?auto=format&q=60&fit=max&w=930';


  constructor() { }

  ngOnInit(): void {
  }

}
