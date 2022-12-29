import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080ti'),
  //   'precio': new FormControl('1500'),
  //   'existencia': new FormControl('5'),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)] ],
    precio: [ , [Validators.required, Validators.min(0)] ],
    existencia: [ , [Validators.required, Validators.min(0)] ]
  });

  constructor(private fb: FormBuilder) { }

  campoEsValido(campo:string){

    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched

  }


}
