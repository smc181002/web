import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public works = [
    {
      title: 'Kisaan',
      description: 'Kisaan is a portal build for the tranfer of goods between farmers and buyers. This app is build using MEAN stack technologies.',
      link: 'https://www.github.com/https-github-com-codosphere/kisaan'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
