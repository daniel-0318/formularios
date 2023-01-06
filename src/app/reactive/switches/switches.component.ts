import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [true, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    })

    // this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue=>{
    //   console.log(newValue);
    // });

    this.miFormulario.valueChanges.subscribe(form =>{
      console.log(form);
      delete form.condiciones;
      this.persona = form;
      
    });

    // lo mismo de arriba solo que extraigo "condiciones" como variable aparte y lo demas en otra
    // this.miFormulario.valueChanges.subscribe(({condiciones, ...rest}) =>{
    //   console.log(rest);
    //   this.persona = rest;
      
    // });
  }

  guardar(){

    const formValue = {... this.miFormulario.value};

    delete formValue.condiciones; //Eliminar campo, propio de javascript

    this.persona = formValue

  }

  

}
