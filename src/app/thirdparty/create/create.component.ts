import { Component, OnInit } from '@angular/core';
import { ThirdPartyService } from '../thirdparty.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public thirdPartyService: ThirdPartyService,
    private router: Router,
  ) { }

  ngOnInit(): void {

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
    this.thirdPartyService.create(this.form.value).subscribe(res => {
         console.log('ThirdParty created successfully!');
         this.router.navigateByUrl('thirdparty/index');
    })
  }

}
