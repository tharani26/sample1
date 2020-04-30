import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angpractical';
  results='';
  constructor(private http:HttpClient){

  }
  ngOnInit():void{
    //promise get method
    // this.http.get('https://swapi.co/api/people/?search=ab').toPromise()
    // .then((data:any)=>{
    //   this.results=data.results;
    //   console.log(this.results)
    // });
    
    //get method
    // this.http.get('https://api.github.com/users/abdullah').subscribe(data =>{
    // console.log(data);
    // });

    //using interface get method
    // this.http.get<Userresponse>('https://api.github.com/users/abdullah').subscribe(data =>{
    //    console.log("User Login:"+data.login);
    //    console.log("Bio"+data.bio);
    //    console.log("Company:"+data.company);
    //    },
    //    err =>{
    //      console.log("Error occured")
    //    }
    //    );

       //post
    const req=this.http.post('http://jsonplaceholder.typicode.com/posts',
    {
      title:'foo',
      body:'bar',
      userId:1
    }
    )
    .subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log("Error occured");
      }
    );
  
    //update
      this.http.put('http://dummy.restapiexample.com/api/v1/update/25',
      {"name":"test","salary":"2222","age":"23"})
      .subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log("Error occured");
        }
      );
      
      //delete
        
      this.http.delete('http://dummy.restapiexample.com/api/v1/delete/25')

      .subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log("Error occured");
        }
      );
    }
    
  }


