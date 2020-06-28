import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  groups: Array<any>;
  constructor() {}

  ngOnInit() {
    this.groups = [
      {
        hasFeature: true,
        items: [
          {
            id: 1,
            isFeatured: true,
          },
          {
            id: 2,
            isFeatured: false,
          },
          {
            id: 3,
            isFeatured: false,
          },
        ]
      }, {
        hasFeature: false,
        items: [
          {
            id: 4,
          },
          {
            id: 5,
          },
          {
            id: 6,
          },
          {
            id: 7,
          },
          {
            id: 8,
          },
          {
            id: 9,
          },
        ]
      }, {
        hasFeature: true,
        items: [
          {
            id: 10,
            isFeatured: false,
          },
          {
            id: 11,
            isFeatured: false,
          },
          {
            id: 12,
            isFeatured: true,
          },
        ]
      }, {
        hasFeature: false,
        items: [
          {
            id: 13,
          },
          {
            id: 14,
          },
          {
            id: 15,
          },
          {
            id: 16,
          },
          {
            id: 17,
          },
          {
            id: 18,
          },
        ]
      }
    ]
  }

  isBigThumbnail(index: number) {
    return [1, 10].includes(index);
  }

}
