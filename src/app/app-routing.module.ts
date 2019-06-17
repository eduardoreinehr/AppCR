import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasPageModule' },
  { path: 'detalhes', loadChildren: './detalhes/detalhes.module#DetalhesPageModule' },
  { path: 'horarios', loadChildren: './horarios/horarios.module#HorariosPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
