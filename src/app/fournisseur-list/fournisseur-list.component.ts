import { FournisseurDetailsComponent } from '../fournisseur-details/fournisseur-details.component';
import { Observable } from "rxjs";
import { FournisseurService } from "../fournisseur.service";
import { Fournisseur } from "../fournisseur";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-fournisseur-list",
  templateUrl: "./fournisseur-list.component.html",
  styleUrls: ["./fournisseur-list.component.css"]
})
export class FournisseurListComponent implements OnInit {
  fournisseurs: Observable<Fournisseur[]>;

  constructor(private fournisseurService: FournisseurService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.fournisseurs = this.fournisseurService.getFournisseursList();
  }

  deleteFournisseur(id: number) {
    this.fournisseurService.deleteFournisseur(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  fournisseurDetails(id: number){
    this.router.navigate(['fournisseur-details', id]);
  }
}
