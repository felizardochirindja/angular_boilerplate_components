import { Item, ItemService } from './item.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-item-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="(item$ | async) as item">
      <h1>{{ item.name }}</h1>
      <p>{{ item.longDescription }}</p>
    </div>
  `,
})
export class itemViewComponent implements OnInit {
  item$!: Observable<Item | undefined>;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.item$ = this.route.paramMap.pipe(
      map((params: ParamMap) => {        
        return this.itemService.items[Number(params.get('index'))];
      }),
    );
  }
}
