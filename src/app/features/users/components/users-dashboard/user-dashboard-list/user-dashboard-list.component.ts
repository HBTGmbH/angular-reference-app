import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-dashboard-list',
  templateUrl: './user-dashboard-list.component.html',
  styleUrls: ['./user-dashboard-list.component.scss']
})
export class UserDashboardListComponent implements OnInit {

  @Input()
  users: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
