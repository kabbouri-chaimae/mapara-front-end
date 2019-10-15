import { CommandeService } from '../commande.service';
import { Commande } from '../commande';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-commande',
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.css']
})
export class CreateCommandeComponent implements OnInit {

  commande: Commande = new Commande();
  submitted = false;

  constructor(private commandeService: CommandeService,
              private router: Router) { }

  ngOnInit() {
  }

  newCommande(): void {
    this.submitted = false;
    this.commande = new Commande();
  }

  save() {
    this.commandeService.createCommande(this.commande)
      .subscribe(data => console.log(data), error => console.log(error));
    this.commande = new Commande();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/commande-list']);
  }
}
