import { Component, OnInit } from '@angular/core';

import { GeneratetextService } from '../../services/generatetext.service';

import {Picture} from "../../shared/models/picture.model"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private URL_PATTERN : string ='https://i.picsum.photos/id/{ID_FOTO_INCREMENTAL}/500/500.jpg';
  
  pictureQty : number = 4000;
  listPicture : Array<Picture> = []; 
  loading: boolean = false;

  constructor( private gtService: GeneratetextService) { }

  ngOnInit(): void {
    this.generatePicturesList();
  }

  generatePicturesList(): void {
    this.loading= true;
    let patternToSearch ='{ID_FOTO_INCREMENTAL}';
    this.listPicture =[];
    for (let i=1;i<=this.pictureQty;i++){
      this.listPicture.push(new Picture(i,this.URL_PATTERN.replace(patternToSearch, i.toString())  , this.gtService.generateRandomText()));
    }
    this.loading= false;
  }

}
