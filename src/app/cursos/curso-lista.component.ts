import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-curso-lista",
  templateUrl: "./curso-lista.component.html"
})
export class CursoListaComponent implements OnInit {
  cursos: Curso[] = [];

  ngOnInit(): void {
    this.cursos = [
      {
        id: '1',
        nome: 'Curso basico de HTML 5',
        imgUrl: '',
        price: '99.99',
        code: 'xps-9',
        duration: '120.00',
        rating: '5.4',
        releaseDate: 'Dezembro, 4, 2019'
      },
      {
        id: '2',
        nome: 'Curso basico de Java com Spring 5',
        imgUrl: '',
        price: '45.99',
        code: 'lkl-9',
        duration: '80',
        rating: '4.0',
        releaseDate: 'Janeiro, 10, 2019'
      }
    ]
  }
}
