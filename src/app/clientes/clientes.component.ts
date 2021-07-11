import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/clientes';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private _clienteService: ClienteService
  ) { }

  ngOnInit()  {
    this._clienteService.getClientes().subscribe(resp => {
      this.clientes = resp;
    })
  }
}
