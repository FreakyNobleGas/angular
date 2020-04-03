import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        // render takes a html element, a style, and the style attribute
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }

}