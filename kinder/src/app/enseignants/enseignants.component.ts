import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.filterTab = this.tab
  }

  search : any

 tab : any[] = [
    {
      name:'Mme Bochra Ben Yedder' , 
      image:'' , 
      job:'responsable du niveau PS'
    },
    {
      name:'Mme Asma Ben Rhouma',
      image:'' , 
      job:'responsable du niveau TPS'
    },
    {
      name:'Maher Amdouni' , 
      image:'',
      job:'Pédiatre'
    }
  ]

  filterTab : any

  filter(){
    this.filterTab = this.tab.filter(info => info.name.toLowerCase().includes(this.search.toLowerCase()))
  }

}
