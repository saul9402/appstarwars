import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  persons:any = [];
  value: string = "";
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPersons();
    console.log(this.persons);
  }

  getPersons() {
    this.persons = [];
    let planetUrl;
    this.rest.getPersons().subscribe((data: any) => {
      this.persons = data.results;
      for(let i = 0; i < this.persons.length; i++){
        this.persons[i].url = this.persons[i].url.substr(28, this.persons[i].url.length);
      }
      for(let i = 0; i < this.persons.length; i++){
        planetUrl = this.persons[i].homeworld.substr(28,this.persons[i].homeworld.length);
        this.rest.getPlanet(planetUrl).subscribe((data: any) => {
          this.persons[i].homeworld = data.name;
        });
      }
      console.log(this.persons);
    });
  }

    orderByName(){
      console.log(this.persons);
      this.persons.sort(function(a,b){
        let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB) //sort string ascending
          return -1
        if (nameA > nameB)
          return 1
        return 0
      });
      console.log(this.persons);
    }
    orderByMass(){
        console.log(this.persons);
        this.persons.sort(function(a,b){
          let massA=+a.mass, massB=+b.mass;
          if (massA < massB) //sort string ascending
            return -1
          if (massA > massB)
            return 1
          return 0
        });
        console.log(this.persons);
      }
    orderByHeight(){
      console.log(this.persons);
      this.persons.sort(function(a,b){
        let heightA=+a.height, heightB=+b.height;
        if (heightA < heightB) //sort string ascending
          return -1
        if (heightA > heightB)
          return 1
        return 0
      });
      console.log(this.persons);
    }
    orderByHomeWorld(){
      console.log(this.persons);
      this.persons.sort(function(a,b){
        let homeworldA=a.homeworld.toLowerCase(), homeworldB=b.homeworld.toLowerCase();
        if (homeworldA < homeworldB) //sort string ascending
          return -1
        if (homeworldA > homeworldB)
          return 1
        return 0
      });
      console.log(this.persons);
    }
}
