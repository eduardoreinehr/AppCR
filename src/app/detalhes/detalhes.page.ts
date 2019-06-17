import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicosService } from '../servicos/servicos.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public noticia = {}

  constructor(private rota: ActivatedRoute, private enviaDados: ServicosService) { }

  ngOnInit() {
    this.noticia = this.enviaDados.getDados('noticia');
    console.log(this.noticia);
  }

}
