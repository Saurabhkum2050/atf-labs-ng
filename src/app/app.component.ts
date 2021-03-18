import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @HostBinding('class') className = '';
  subscribers: Subscription[] = [];
  isDarkModeEnabled: FormControl = new FormControl(false);
  isDarkModeSupported = false;

  constructor(
    private overlay: OverlayContainer,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    // Init Animate On Scroll Animations
    AOS.init({
      duration: 500
    });

    // Detect Dark Mode
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      // console.log('🎉 Dark mode is supported');
      this.isDarkModeSupported = true;

      const hasCache = localStorage.getItem('isDarkModeEnabled');
      let isDarkModeEnabled: boolean;

      if (hasCache) {
        isDarkModeEnabled = hasCache === 'true';
      } else {
        isDarkModeEnabled = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      this.subscribers.push(
        this.isDarkModeEnabled.valueChanges.pipe(
          tap((status) => this.toggleDarkMode(status))
        ).subscribe()
      );

      this.isDarkModeEnabled.setValue(isDarkModeEnabled);
    }
  }

  ngOnDestroy(): void {
    this.subscribers.forEach(s => s.unsubscribe());
  }

  toggleDarkMode(isDarkModeEnabled: boolean): void {
    const darkModeClassName = 'darkMode';
    localStorage.setItem('isDarkModeEnabled', isDarkModeEnabled.toString());

    if (isDarkModeEnabled) {
      // Dark Mode
      this.className = darkModeClassName;
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--header-footer-bg-color', '#191919');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--bg-color', '#191919');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--border-color', '#2B2B2B');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--scrollbar-color', '#393939');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--text-color', '#757575');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--timeline-content-bg-color', '#202020');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--timeline-date-bg-color', 'rgba(43, 43, 43, 0.96)');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--copyright-color', '#424242');
      this.overlay.getContainerElement().classList.add(darkModeClassName);
    } else {
      // Light Mode
      this.className = '';
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--header-footer-bg-color', '#FFFFFF');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--bg-color', '#F8F8F8');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--border-color', '#E5E5E5');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--scrollbar-color', '#C6C6C6');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--text-color', '#212529');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--timeline-content-bg-color', '#ffffff');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--timeline-date-bg-color', 'rgba(0, 189, 255, 0.8)');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--copyright-color', '#6C757D');
      this.overlay.getContainerElement().classList.remove(darkModeClassName);
    }
  }
}
