import { Component, inject, Input } from "@angular/core";
import { NgFor } from "@angular/common";
import {
  RouterLink,
  Routes,
  RouterLinkActive,
} from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-menu",
  template: `
    <ul>
      @for (item of menuItems; track item.id) {
        <li>
            <a [routerLink]="['/', item.id]" routerLinkActive="active-page">{{
              item.title
            }}</a>
        </li>
      }
    </ul>
  `,
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
})
export class MenuComponent {
  @Input() menuItems: { title: string; id: string }[] = [];
}

export abstract class BasePage {
  abstract title: string;

  // this is causes a problem with change detection which spirals into an infinite loop
  get menuItems() {
    return [
      { title: `From ${this.title} to First`, id: "first" },
      { title: `From ${this.title} to Second`, id: "second" },
      { title: `From ${this.title} to Third`, id: "third" },
    ];
  }
}

@Component({
  selector: "app-first",
  template: `<h1>First Menu:</h1> <app-menu [menuItems]="menuItems" />`,
  standalone: true,
  imports: [MenuComponent],
})
export class FirstComponent extends BasePage {
  title = inject(Title).getTitle();
}

@Component({
  selector: "app-second",
  template: `<h1>Second Menu:</h1> <app-menu [menuItems]="menuItems" />`,
  standalone: true,
  imports: [MenuComponent],
})
export class SecondComponent extends BasePage {
  title = inject(Title).getTitle();
}

@Component({
  selector: "app-third",
  template: `<h1>Third Menu:</h1> <app-menu [menuItems]="menuItems" />`,
  standalone: true,
  imports: [MenuComponent],
})
export class ThirdComponent extends BasePage {
  title = inject(Title).getTitle();
}

export const routes: Routes = [
  { path: "first", component: FirstComponent, title: "First" },
  { path: "second", component: SecondComponent, title: "Second" },
  { path: "third", component: ThirdComponent, title: "Third" },
];
