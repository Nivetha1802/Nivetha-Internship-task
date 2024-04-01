import { Component , Input, OnInit} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit{
  // @Input()
  // TITLE!: string;

  public getJsonValue:any;
  public postJsonValue:any;
  constructor(private http:HttpClient){
    
  }  
  url ="https://localhost:7272/api/Values/ProductsGetAll";
//   page: any[] = [];

// async getAllPage(): Promise<any | null> {
//   return new Promise<any | null>((resolve, reject) => {
//     console.log("Sending request to API...");
//     this.http.get<any>(`${this.url}`).subscribe(
//       (data) => {
//         console.log("Response received from API:", data);
//         this.page = data;
//         resolve(data);
//       },
//       (error) => {
//         console.error("Error occurred while fetching data from API:", error);
//         reject(error);
//       }
//     );
//   });
// }

  ngOnInit():void {
    this.getMethod();
}
public getMethod(){
  this.http.get(this.url).subscribe((data) => {
  console.log(data);
  this.getJsonValue = data;
})
}
}
