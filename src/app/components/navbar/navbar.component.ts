import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() text: string | undefined;
  isAdmin!: boolean;
  subscription: Subscription;

  constructor(private userService: UserService) {
    this.subscription = this.userService
      .onToggle()
      .subscribe((value) => (this.isAdmin = value));
  }

  ngOnInit(): void {}
}
