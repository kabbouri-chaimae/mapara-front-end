import { CommandeDetailsComponent } from '../commande-details/commande-details.component';
import { Observable } from "rxjs";
import { CommandeService } from "../commande.service";
import { Commande } from "../commande";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-commande-list",
  templateUrl: "./commande-list.component.html",
  styleUrls: ["./commande-list.component.css"]
})
export class CommandeListComponent implements OnInit {
  commandes: Observable<Commande[]>;

  constructor(private commandeService: CommandeService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.commandes = this.commandeService.getCommandesList();
  }

  deleteCommande(id: number) {
    this.commandeService.deleteCommande(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  commandeDetails(id: number){
    this.router.navigate(['commande-details', id]);
  }
}
