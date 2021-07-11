import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {


  cursos:any[] = ['C#', 'JAVA', 'PHP', 'TYPE SCRIPT']


  constructor() { }

  ngOnInit(): void {
  }

}
