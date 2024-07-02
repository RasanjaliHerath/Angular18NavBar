import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isDropdownOpen = false;

  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click',['$event'])
  onClick(event: MouseEvent){
    const target = event.target as  HTMLElement;
    const clickInside = target.closest('.relative');
    if(!clickInside){
      this.isDropdownOpen = false;
    }
  }
}
