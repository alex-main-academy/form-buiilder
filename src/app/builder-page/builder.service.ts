import {Injectable, OnInit} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {isObservable} from "rxjs/internal-compatibility";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BuilderService {

  len!: number
  lenArray: Array<number> = []

  constructor() {}


  ready = [
      `<label class="label">Label</label>`,
      `<input type="text" placeholder="Input" class="input1">`,
      `<button class="btn-1">Button</button>`,
      `<button class="btn-2">Button</button>`,
      '<input type="checkbox" class="input2" checked>',
      '<select class="select"><option value="" class="option-1">first value</option><option value="">2</option><option value="">3</option></select>',
      '<textarea class="textarea">',
  ]

  builder = []


  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.ready, event.currentIndex, event.currentIndex)
      moveItemInArray(this.builder, event.previousIndex, event.currentIndex)
    }else{
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
      this.len = this.builder.length
      this.lenArray.push(this.len)
      console.log(this.len)
      console.log(this.lenArray)
      }
  }
}
