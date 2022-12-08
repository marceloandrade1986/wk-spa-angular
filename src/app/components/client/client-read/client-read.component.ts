import { Client } from './../client.model';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  clients: Client[] = [];

  displayedColumns = ['id', 'name', 'cpf', 'email', 'birth_date', 'address_city', 'actions'];

  ngOnInit(): void {
    this.clientService.read().subscribe(clients => {
      this.clients = clients;
      console.log(clients);

    })
  }

}
