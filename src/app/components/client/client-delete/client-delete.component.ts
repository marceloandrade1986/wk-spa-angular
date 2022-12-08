import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {


  client: any;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.client = {};

    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.clientService.readById(id).subscribe(client => {
      this.client = client;
    })
  }

  deleteClient(): void {

    this.clientService.delete(this.client.id).subscribe(() => {
      this.clientService.showMessage('Client Deleted Successfully!')
      this.router.navigate(['/clients'])
    });
  }

  cancelUpdateClient(): void {
    this.router.navigate(['/clients']);
  }

}
