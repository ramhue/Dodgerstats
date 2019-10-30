import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model'; 
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-pitching',
  templateUrl: './pitching.component.html',
  styleUrls: ['./pitching.component.css']
})
export class PitchingComponent implements OnInit {

  constructor(private http:HttpClient) { }
  ngOnInit() {
  }
}
