import { v4 as uuid } from "uuid";
import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {



  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9000
  },{
    id: uuid(),
    name: 'Vegueta',
    power: 7500
  }]




  addCharacter( character: Character):void {


    const newCharacter:Character = { id : uuid() , ...character }

    console.log(newCharacter);


    this.characters.push(newCharacter)


  }


  //onDeleteCharacter(index:number) {
    //this.characters.splice(index,1)
    deleteCharacterById( id:string ) {

      this.characters = this.characters.filter(character => character.id !== id)

    }



}
