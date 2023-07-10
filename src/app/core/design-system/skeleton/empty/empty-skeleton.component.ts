import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './empty-skeleton.component.html',
  styleUrls: ['./empty-skeleton.component.css']
})
export class EmptySkeletonComponent {

}
