import { Client } from '../client';
import { Component, OnInit, Input } from '@angular/core';

import { ClientListComponent } from '../client-list/client-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: number;
  client: Client;


  constructor(private route: ActivatedRoute,private router: Router,
              private clientService: ClientService) { }

  ngOnInit() {
    this.client = new Client();

    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['client-list']);
  }
}
