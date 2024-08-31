import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './modules/example/example.component';
import { LeftSideBarSkeletonComponent } from './core/design-system/skeleton/side/left/left-side-bar-skeleton.component';

const routes: Routes = [
  {
    path: '', component: LeftSideBarSkeletonComponent,
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
