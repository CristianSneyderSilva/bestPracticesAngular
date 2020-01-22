import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'view-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit {

  @ViewChild('nombre', {static:true}) name: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('nombre', this.name.nativeElement);
  }

}
