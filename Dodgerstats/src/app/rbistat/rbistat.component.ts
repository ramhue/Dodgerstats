import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rbi-stat',
  templateUrl: './rbistat.component.html',
  styleUrls: ['./rbistat.component.css']
})

export class RbiStatComponent implements OnInit {

  constructor(private http:HttpClient) { }
  loadedStats:Post[] = [];
  ngOnInit() {
    this.GetData();
  }
  private GetData(){
    this.http.get<{[key: string]: Post}>("http://lookup-service-prod.mlb.com/json/named.leader_hitting_repeater.bam?sport_code='mlb'&results=5&game_type='R'&season='2019'&sort_column='rbi'&team_id=119&leader_hitting_repeater.col_in=name_display_first_last&leader_hitting_repeater.col_in=hr&leader_hitting_repeater.col_in=bb&leader_hitting_repeater.col_in=obp&leader_hitting_repeater.col_in=rank&leader_hitting_repeater.col_in=slg&leader_hitting_repeater.col_in=rbi&leader_hitting_repeater.col_in=avg&leader_hitting_repeater.col_in=sb&leader_hitting_repeater.col_in=ops&leader_hitting_repeater.col_in=name_first&leader_hitting_repeater.col_in=name_last&leader_hitting_repeater.col_in=player_id")
    .pipe(
      map(responseData =>{
      const postArray: Post[] = [];
      for (const key in responseData) {
          postArray.push({ ...responseData[key]});
      }
      return postArray 
    })
    ).subscribe(posts=>{this.loadedStats = posts});
  }

}
