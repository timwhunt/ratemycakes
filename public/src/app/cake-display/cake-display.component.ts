import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-cake-display',
    templateUrl: './cake-display.component.html',
    styleUrls: ['./cake-display.component.css']
})
export class CakeDisplayComponent implements OnInit {
    @Input() cakeToShow: any;
    constructor() {
    }

    ngOnInit() {
    }

}
