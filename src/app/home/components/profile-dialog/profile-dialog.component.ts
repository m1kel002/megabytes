import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile-dialog',
  standalone: true,
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss'],
  imports: [AsyncPipe],
})
export class ProfileDialogComponent implements OnInit {
  @Input() name: string;
  @Input() username: string;
  @Output() onLogout = new EventEmitter<boolean>(false);
  @Input() userProfile: Observable<Profile>;

  constructor() {}

  ngOnInit(): void {}

  protected onClickLogout() {
    this.onLogout.emit(true);
  }
}
