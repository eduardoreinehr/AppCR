import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicosService } from '../servicos/servicos.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  public listaNoticias = [
   {titulo: 'Entrega de Menção Honrosa OBMEP 2018', img: '../assets/noticias/entreganotas.jpg', data: '07/06', autor: 'Eduardo Reinehr', conteudo: 'Entrega de notas honrosas para alunos que surpreenderam e se destacaram na olimpiada de Matematica.'},
   {titulo: 'Eleição do Grêmio Estudantil', img: '../assets/noticias/noticia1.jpg', data:'17/05', autor:'Eduardo Reinehr', conteudo:'Aconteceu recentemente a eleição do grêmio onde concorreram as chapas peripatéticos e quente, onde a chapa quente ganhou por poucos votos.'},
   {titulo: 'Arrecadação para Animais abandonados', img: '../assets/noticias/arrecadacao.jpg', data: '16/05', autor: 'Eduardo Reinehr', conteudo: 'Alunos do grêmio estiveram vendendo alimentos na orla turistica de barra bonita para arrecadar dinheiro para animais abandonados, dentre esse alimentos tinham paçocas, brigadeiro, bolo, entre outros.'},
   {titulo: 'Divulgação do Vestibulinho', img: '../assets/noticias/divulgacao1.JPG', data: '15/05', autor: 'Eduardo Reinehr', conteudo: 'Funcionários da Etec distribuiram e colocaram cartazes para divulgação do proximo vestibulinho da ETEC afim de atrair mais alunos.'},
   {titulo: 'Etec de portas abertas', img: '../assets/noticias/ETECdeportasabertas.jpg', data: '08/05', autor: 'Evandro Martins', conteudo: 'Ha escola Etec abriu suas portas para que interessados e o povo da comunidade pudesse ter um pouco das experiências sobre o trabalho desenvolvido em aulas tecnicas.'},
   {titulo: 'Doação de sangue', img: '../assets/noticias/doacaodesangue.JPG', data: '02/04', autor: 'Evandro Martins', conteudo: 'A Etec foi sede para campanha da doação de sangue que ocorreu dia 02/04, o pessoal se concientizou e houve uma grande quantia de sangue doada.'},
   {titulo: 'Projeto contação de Histórias', img: '../assets/noticias/contacaodehist.jpg', data: '28/03', autor: 'Evandro Martins', conteudo: 'Prof Meire junto com o restante dos professores de literatura da escola iniciam projeto de contação de escola, introduzindo livros de maneira mais explicativa.'},
   {titulo: 'Visita Tecnica na Support de Lençois Paulista', img: '../assets/noticias/visitatecnica.jpg', data: '20/03', autor: 'Evandro Martins', conteudo: 'Alunos do 2ºDS e 3ºInfo visitaram a empresa de softwares em lençois paulista, tiveram palestras com direito a lanche da tarde. Todos aproveitaram muito'},
   {titulo: 'Show da Etec junto a trote invertido dos terceiros anos', img: '../assets/noticias/troteinvertido.jpg', data: '27/02', autor: 'Evandro Martins', conteudo: 'Neste fim de Fevereiro aconteceu o show da etec com diversos alunos mostrando seus taletos, junto a eles tambem teve o trote invertido dos terceiros anos, onde  meninos se vestiam de meninas e meninas se vestiam de meninos.'},
   {titulo: 'Alunos passam em vestibulares', img: '../assets/noticias/aprovados-vest.jpg', data: '12/02', autor: 'Eduardo Reinehr', conteudo: 'Saiu nesse inicio de 2019 o resultado de diversos vestibulares e do sisu as aprovações de alguns alunos aqui da Comendador joão Rays, sendo elas todas universidades publicas.'},
  ];

  constructor(private rota: Router, private enviaDados: ServicosService) { }


  public mostraNoticia(noticia){
   console.log(noticia);
   this.enviaDados.setDados('noticia', noticia);
   this.rota.navigate(['/detalhes']);

  }
  ngOnInit() {
  }
}
