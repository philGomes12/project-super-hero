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
    });
  }
}
