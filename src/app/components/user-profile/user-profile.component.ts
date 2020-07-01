import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user;
  next;
  prev;
  subscription: Subscription;
  constructor(private route: ActivatedRoute, private uS: UserService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id') ? Number(params.get('id')) : 1;
      this.subscription = this.uS.getUser(id).subscribe((data) => {
        this.user = data;
        this.prev = this.user.id - 1;
        this.next = this.user.id + 1;
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
