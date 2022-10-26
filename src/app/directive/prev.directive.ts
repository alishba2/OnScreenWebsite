import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el:ElementRef) { }

  @HostListener ('click')

  preFun(){
    let el = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = el.getElementsByClassName('item');
    el.prepend(item[item.length-1]);
  }

}
