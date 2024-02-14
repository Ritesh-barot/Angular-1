import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  constructor(private el:ElementRef, private render:Renderer2) { }

ngOnInit(): void {
  this.render.setStyle(this.el.nativeElement,'background-color','red');

}
  @HostListener('mouseenter') mouseover(eventdata:Event){
    this.render.setStyle(this.el.nativeElement,'background-color','blue');
    
  }
  @HostListener('mouseleave') mouseleave(eventdata:Event){
    this.render.setStyle(this.el.nativeElement,'background-color','transparent');
  

  }


}
