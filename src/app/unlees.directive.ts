import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnlees]'
})
export class UnleesDirective {
@Input() set appUnlees(condition:boolean){
  if(!condition)
  {
    this.viweContainer.createEmbeddedView(this.templateRef);
  }else
  {
    this.viweContainer.clear();
  }
} 
  constructor(private templateRef:TemplateRef<any> , private viweContainer:ViewContainerRef) { }

}
