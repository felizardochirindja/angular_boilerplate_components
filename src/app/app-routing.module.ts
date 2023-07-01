import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './core/design-system/skeleton/empty/empty.component';
import { ExampleComponent } from './modules/example/example.component';
import { NormalComponent } from './core/design-system/skeleton/side/normal/normal.component';

const routes: Routes = [
  {
    path: '', component: NormalComponent,
    children: [
      { path: 'example', component: ExampleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
