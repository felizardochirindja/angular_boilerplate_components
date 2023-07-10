import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './modules/example/example.component';
import { DefaultSideSkeletonComponent } from './core/design-system/skeleton/side/default/default-side-skeleton.component';

const routes: Routes = [
  {
    path: '', component: DefaultSideSkeletonComponent,
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
