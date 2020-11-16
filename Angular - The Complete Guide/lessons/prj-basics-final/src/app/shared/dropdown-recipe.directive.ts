import {OnInit, Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdownRecipe]'
})
export class DropdownRecipeDirective implements OnInit {
    @HostBinding('class.open') isDropdown = false;

    @HostListener('click') toggleOpen(){
        this.isDropdown = !this.isDropdown;
    }
    ngOnInit() {

    }
}