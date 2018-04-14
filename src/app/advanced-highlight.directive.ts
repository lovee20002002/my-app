import { Directive, ElementRef,Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})
export class AdvancedHighlightDirective implements OnInit {
  @Input() defultColor:string = "black";
  @Input() hilightColor:string = "white";
  @HostBinding('style.color') c:string;

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  
  ngOnInit(): void {
    this.c =this.defultColor
  }
  @HostListener('mouseenter') me(eventData : Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.c = this.hilightColor;
  }
  @HostListener('mouseleave') ml(eventData : Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.c = this.defultColor;
  }

}
