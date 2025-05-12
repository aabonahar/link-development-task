import { Component, inject, OnInit } from '@angular/core';
import { LocalStorgaeService } from '../../../shared/services/secure-local-storage/local-storage.service';

@Component({
  selector: 'app-complete',
  imports: [],
  templateUrl: './complete.component.html',
  styleUrl: './complete.component.scss'
})
export class CompleteComponent implements OnInit {

  private _secureLocalStorge = inject(LocalStorgaeService)
  ngOnInit(): void {
    localStorage.clear();
    this._secureLocalStorge.clearToken();
    // window.location.reload();
  }
}
