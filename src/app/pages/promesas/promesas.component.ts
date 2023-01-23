import { Component, OnInit } from '@angular/core';
import { resolveObjectKey } from 'chart.js/dist/helpers/helpers.core';
import { resolve } from 'chart.js/dist/helpers/helpers.options';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {

   this.getUsuarios().then(usuarios => {
     console.log(usuarios);
   })
    
  //   const promesas = new Promise( (resolve, reject) => {

  //     if(false)
  //     {
  //       resolve('Hola mundo');

  //     }  else 
  //     {
  //       reject('Algo salui mal');
  //     }
  //   });

  //   promesas
  //   .then((mensaje) => {



  //   })
  //   .catch( error => console.log('Error en mi promesa', error));

  }


  getUsuarios(){

    const promesa = new Promise( resolve => {

      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => resolve(body.data));

    });

      return promesa; 
  }

}
