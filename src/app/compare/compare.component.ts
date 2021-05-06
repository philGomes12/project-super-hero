import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperHeroService } from '../services/superheros.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private superHeroService: SuperHeroService) { }

  public heroId1: string;
  public heroProfile1: any;
  public heroId2: string;
  public heroProfile2: any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.heroId1 = params.get('id');
      this.heroId2 = params.get('id2');
      this.getProfiles(this.heroId1, this.heroId2);
    });
  }

  getProfiles(heroId1: string, heroId2: string): any {
    this.superHeroService.getSuperheroById(heroId1)
      .subscribe(
        data1 => {
          if (data1['response'] === 'success'){
            this.heroProfile1 = data1;
          }
        }
      );
    this.superHeroService.getSuperheroById(heroId2)
    .subscribe(
      data2 => {
        if (data2['response'] === 'success'){
          this.heroProfile2 = data2;
        }
      }
    );
  }

}
