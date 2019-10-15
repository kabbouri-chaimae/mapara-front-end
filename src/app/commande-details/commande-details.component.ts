import { Commande } from '../commande';
import { Component, OnInit, Input } from '@angular/core';

import { CommandeListComponent } from '../commande-list/commande-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import {CommandeService} from '../commande.service';

@Component({
  selector: 'app-commande-details',
  templateUrl: './commande-details.component.html',
  styleUrls: ['./commande-details.component.css']
})
export class CommandeDetailsComponent implements OnInit {

  id: number;
  commande: Commande;


  constructor(private route: ActivatedRoute,private router: Router,
              private commandeService: CommandeService) { }

  ngOnInit() {
    this.commande = new Commande();

    this.id = this.route.snapshot.params['id'];

    this.commandeService.getCommande(this.id)
      .subscribe(data => {
        console.log(data)
        this.commande = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['commande-list']);
  }
}
