import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    // Binds to the host element
    @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';
    
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        // render takes a html element, a style, and the style attribute. There are many more methods in renderer other than setStyle.
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }

    // mouseenter and mouseleave are built-in functions for HostListener
    @HostListener('mouseenter') mouseover(data : Event) {
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = 'blue';
    }

    @HostListener('mouseleave') mouseleave(data : Event) {
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = 'transparent';
    }
}