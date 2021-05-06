import { Component, HostListener, OnInit } from '@angular/core';
import { SuperHeroService } from '../services/superheros.service';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { NavigationExtras, Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public superHeroService: SuperHeroService, public router: Router) { }

  heroes: any[] = [];
  superheroName: any;
  searchForm: FormGroup;
  enableCompare = true;

  superHeroesChecked: string[] = [];

  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchField: new FormControl('', [Validators.required]),
    });
  }

  @HostListener('document:keydown.enter', ['$event'])
  searchSuperHero(event): any{
    this.superheroName = this.searchForm.get('searchField').value;
    this.superHeroService.getSuperHeroByName(this.superheroName).subscribe(
      data => {
        if (data['response'] !== 'error'){
          for (let i = 0; i < data['results'].length; i++) {
            this.heroes.push(data['results'][i]);
          }
        }
      });
  }

  buildComparison(event, heroId): any{
    if (event.target.checked){
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.superHeroesChecked.length; i++){
        if (!this.superHeroesChecked.includes(heroId)){
          this.superHeroesChecked.push(heroId);
        }
      }
      if (this.superHeroesChecked.length > 2){
        const heroToBeRemoved = document.getElementById(`${this.superHeroesChecked[0]}`) as HTMLInputElement;
        heroToBeRemoved.checked = false;
        this.superHeroesChecked.shift();
      }
      if (this.superHeroesChecked.length === 0){
        this.superHeroesChecked.push(heroId);
      }
    }else if (!event.target.checked){
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.superHeroesChecked.length; i++){
        if (this.superHeroesChecked[i] === heroId){
          this.superHeroesChecked.splice(i, heroId);
        }
      }
    }
  }

  checkCompare(): any {
    if (this.superHeroesChecked.length < 2){
      this.enableCompare = true;
    }else {
      this.enableCompare = false;
    }
  }

  goToComparison(): any {
    this.router.navigate(['compare/', this.superHeroesChecked[0], this.superHeroesChecked[1]]);
  }
}
