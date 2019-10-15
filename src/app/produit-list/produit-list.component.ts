import { ProduitDetailsComponent } from '../produit-details/produit-details.component';
import { Observable } from "rxjs";
import { ProduitService } from "../produit.service";
import { Produit } from "../produit";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-produit-list",
  templateUrl: "./produit-list.component.html",
  styleUrls: ["./produit-list.component.css"]
})
export class ProduitListComponent implements OnInit {
  produits: Observable<Produit[]>;

  constructor(private produitService: ProduitService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.produits = this.produitService.getProduitsList();
  }

  deleteProduit(id: number) {
    this.produitService.deleteProduit(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  produitDetails(id: number){
    this.router.navigate(['produit-details', id]);
  }
}
