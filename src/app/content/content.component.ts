import { Component, OnInit } from '@angular/core';
import { Compte } from '../domaine/compte';
import { ComptesService } from '../services/comptes.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  data: Compte[];

  constructor(private_service: ComptesService) { }

  ngOnInit() {
    this.data = null;
  }

}
