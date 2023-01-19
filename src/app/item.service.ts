import { Injectable } from '@angular/core';

export interface Item {
  name: string;
  description: string;
  longDescription: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [
    {
      name: "item 1",
      description: "A high-quality item",
      longDescription: "This item is made with the best materials and is built to last. It is perfect for anyone looking for a durable and reliable option.",
    },
    {
      name: "Item 2",
      description: "An affordable item",
      longDescription: "This item offers excellent value for its price. It is a great option for those on a budget.",
    },
    {
      name: "Item 3",
      description: "A premium item",
      longDescription: "This item is designed for those who want the best of the best. It is made with premium materials and offers advanced features.",
    },
    {
      name: "Item 4",
      description: "A versatile item",
      longDescription: "This item is suitable for a wide range of needs and can be used in many different ways. It is a great all-around option.",
    },
    {
      name: "Item 5",
      description: "A unique item",
      longDescription: "This item stands out from the rest with its unique design and features. It is perfect for anyone looking for something different.",
    }
  ];
}
