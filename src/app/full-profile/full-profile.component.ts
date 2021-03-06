import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SuperHeroService } from '../services/superheros.service';

@Component({
  selector: 'app-full-profile',
  templateUrl: './full-profile.component.html',
  styleUrls: ['./full-profile.component.css']
})
export class FullProfileComponent implements OnInit {

  constructor(public route: ActivatedRoute, public superHeroService: SuperHeroService) { }

  heroProfile: any;

  ngOnInit(): void {
    this.heroProfile = this.route.snapshot.paramMap.get('id');
  }
}
