import { Injectable } from '@angular/core';
import { Compte } from '../domaine/compte';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  constructor() { }

  getAllComptes(): Compte[]{
    return[
      {'numero': 'Fake001', 'proprietaire': 'FakeProp1', 'solde': 1111},
      {'numero': 'Fake002', 'proprietaire': 'FakeProp2', 'solde': 1111},
      {'numero': 'Fake003', 'proprietaire': 'FakeProp3', 'solde': 1111},
    ];
  }
}
