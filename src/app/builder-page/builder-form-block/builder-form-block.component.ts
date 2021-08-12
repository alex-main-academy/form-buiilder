import {Component, OnInit, Output} from '@angular/core';
import {BuilderService} from "../builder.service";

@Component({
  selector: 'app-builder-form-block',
  templateUrl: './builder-form-block.component.html',
  styleUrls: ['./builder-form-block.component.less']
})
export class BuilderFormBlockComponent implements OnInit {

  opened: boolean = false
  btn: any = document.getElementById('btn')
  style: any = document.getElementById('style')

  constructor(public buildService: BuilderService) {}

  ngOnInit(): void {}
}
