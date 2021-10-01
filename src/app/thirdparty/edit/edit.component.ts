import { Component, OnInit } from '@angular/core';
import { ThirdPartyService } from '../thirdparty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Thirdparty } from '../thirdparty';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  thirdParty!: Thirdparty;
  form!: FormGroup;

  constructor(
    public thirdPartyService: ThirdPartyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['thirdparty'];
    this.thirdPartyService.find(this.id).subscribe((data: Thirdparty)=>{
      this.thirdParty = data;
    });

    this.form = new FormGroup({
      name1:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      name2:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      lastname1:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      lastname2:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      id_type_id:  new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      third_type_id:  new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      municipality_id:  new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      department_id:  new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      taxpayer_type_id:  new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.thirdPartyService.update(this.id, this.form.value).subscribe(res => {
         console.log(' updated successfully!');
         this.router.navigateByUrl('thirdparty/index');
    })
  }

}
