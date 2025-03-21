import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats = [
    { title: 'Revenue', value: '$25,430', icon: 'attach_money' },
    { title: 'Transactions', value: '520', icon: 'shopping_bag' },
    { title: 'New Customers', value: '150', icon: 'person_add' },
    { title: 'Stock Alerts', value: '12', icon: 'warning' }
  ];
}
