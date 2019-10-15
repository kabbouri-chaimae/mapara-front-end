import { Fournisseur } from '../fournisseur';
import { Component, OnInit, Input } from '@angular/core';

import { FournisseurListComponent } from '../fournisseur-list/fournisseur-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import {FournisseurService} from '../fournisseur.service';

@Component({
  selector: 'app-fournisseur-details',
  templateUrl: './fournisseur-details.component.html',
  styleUrls: ['./fournisseur-details.component.css']
})
export class FournisseurDetailsComponent implements OnInit {

  id: number;
  fournisseur: Fournisseur;


  constructor(private route: ActivatedRoute,private router: Router,
              private fournisseurService: FournisseurService) { }

  ngOnInit() {
    this.fournisseur = new Fournisseur();

    this.id = this.route.snapshot.params['id'];

    this.fournisseurService.getFournisseur(this.id)
      .subscribe(data => {
        console.log(data)
        this.fournisseur = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['fournisseur-list']);
  }
}
