import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

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

  updateClient(): void {

    this.clientService.update(this.client).subscribe(() => {
      this.clientService.showMessage('Client Updated Successfully!')
      this.router.navigate(['/clients'])
    });
  }

  cancelUpdateClient(): void {
    this.router.navigate(['/clients']);
  }

}
