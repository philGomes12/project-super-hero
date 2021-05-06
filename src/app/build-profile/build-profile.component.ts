import { Component, Input, OnInit } from '@angular/core';
import { SuperHeroService } from '../services/superheros.service';

@Component({
  selector: 'app-build-profile',
  templateUrl: './build-profile.component.html',
  styleUrls: ['./build-profile.component.css']
})
export class BuildProfileComponent implements OnInit {

  constructor(public superHeroService: SuperHeroService) { }
  @Input()
  superheroId: any;

  profile: any;

  ngOnInit(): void {
    this.superHeroService.getSuperheroById(this.superheroId).subscribe(
      data => {
        if (data['response'] === 'success'){
          this.profile = data;
        }
      }
    )
  }
}
