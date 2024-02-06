import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { homedir } from 'os';
import { BodyComponent } from "../body/body.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, HomeComponent, BodyComponent]
})
export class HomeComponent {

}
