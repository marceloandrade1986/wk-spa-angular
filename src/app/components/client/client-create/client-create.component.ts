import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: any;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.client = {};
  }

  createClient(): void {

    const datepipe: DatePipe = new DatePipe('en-US')

    this.client.birth_date = datepipe.transform(this.client.birth_date, 'YYYY-MM-dd');

    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showMessage('Client Saved Successfully!');
      this.router.navigate(['/clients'])
    });

  }

  cancelCreateClient(): void {
    this.router.navigate(['/clients'])
  }

}
