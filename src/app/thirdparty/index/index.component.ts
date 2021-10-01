import { Component, OnInit } from '@angular/core';

import { ThirdPartyService } from '../thirdparty.service';
import { Thirdparty } from '../thirdparty';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  thirdParties: Thirdparty[] = [];

  // constructor() { }
  constructor(public thirdPartyService: ThirdPartyService) { }

  ngOnInit(): void {
    this.thirdPartyService.getAll().subscribe((data: Thirdparty[])=>{
      this.thirdParties = data;
      console.log(this.thirdParties);
    })
  }

  deleteThirdParty(id:Number){
    this.thirdPartyService.delete(id).subscribe(res => {
         this.thirdParties = this.thirdParties.filter(item => item.id !== id);
         console.log('Thirdparty deleted successfully!');
    })
  }

}
