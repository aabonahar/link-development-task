import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete',
  imports: [],
  templateUrl: './complete.component.html',
  styleUrl: './complete.component.scss'
})
export class CompleteComponent implements OnInit {

  ngOnInit(): void {
    localStorage.clear();
  }
}
