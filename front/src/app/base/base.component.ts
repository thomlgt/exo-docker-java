import { Component, OnInit } from '@angular/core';
import { BaseMessage } from '../models/base-message.model';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  data !: BaseMessage;

  constructor(private baseService : BaseService) { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage() {
    this.baseService.getHello().subscribe({
      next : (data) =>{
        this.data = data;
      },
      error : (err) => {
        console.log("Une erreur s'est produite en communiquant avec le backend : " + err.message);
      }
    })
  }

}
