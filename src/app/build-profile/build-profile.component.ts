import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-profile',
  templateUrl: './build-profile.component.html',
  styleUrls: ['./build-profile.component.css']
})
export class BuildProfileComponent implements OnInit {

  constructor() { }
  @Input()
  profile: any;

  ngOnInit(): void {
  }

}
