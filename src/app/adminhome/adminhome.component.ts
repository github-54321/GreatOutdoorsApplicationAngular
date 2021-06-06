import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { User } from '../User';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css'],
})
export class AdminhomeComponent implements OnInit {
  userId: string = '';
  userName: string = '';
  user: User = new User();

  constructor(private service: CustomerService, private route: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('adminid') != null) {
      this.userId = sessionStorage.getItem('adminid') as string;
      this.userName = sessionStorage.getItem('adminname') as string;
      this.service.getAdminById(this.userId).subscribe(
        (data) => {
          console.log(data);
          this.user = data;
        },
        (error) => {
          console.log(error);
          alert('Wrong pathway');
        }
      );
    } else {
      this.route.navigate(['/mainhome']);
    }
  }
}
