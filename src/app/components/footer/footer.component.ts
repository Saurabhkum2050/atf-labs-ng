import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contact = '+91-8126394316';
  email = 'anuj@alliancetechfunctionals.com';
  address = 'Shahtoot Marg, Block A, Sector 26A Gurugram, Haryana India - 122002';
  description = 'Alliance Labs is professional capital markets/software Development Company based in India that endeavours to highly proficient, timely delivered and cost effective solutions.';

  constructor() { }

  ngOnInit(): void {
  }

}
