import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit {

  colorGlobal:string

  constructor() { 
    this.colorGlobal='rgb(86, 130, 129)'
  }

  ngOnInit(): void {
  }

}
