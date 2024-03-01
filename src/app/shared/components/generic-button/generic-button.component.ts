import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-generic-button',
  standalone: true,
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss'],
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class GenericButtonComponent implements OnInit {
  @Input() loading$: Observable<boolean>;
  @Input() diameter = 35;
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
