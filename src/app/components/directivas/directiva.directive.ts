import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[miDirectiva]'
})
export class DirectivaDirective implements OnInit {


  constructor(
    public ej: ElementRef,
    public renderer: Renderer2) { }

    @Input() miDirectiva:boolean;

    /*Directivas para el hover */

    @HostListener("mouseenter") onMouseEnter(){
      this.hover(true);
    }

    @HostListener("mouseleave") onMouseLeave(){
      this.hover(false);
    }

  ngOnInit(): void {
    if (this.miDirectiva) {
      this.renderer.setStyle(this.ej.nativeElement, 'color', 'red');
    }
  }

  hover(color:Boolean): void{
    if(color){
      this.renderer.setStyle(this.ej.nativeElement, 'color', 'red');
    }else{
      this.renderer.setStyle(this.ej.nativeElement, 'color', '');

    }
  }
}
