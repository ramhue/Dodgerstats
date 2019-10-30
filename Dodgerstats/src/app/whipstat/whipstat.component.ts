import { Component, OnInit } from '@angular/core';
import { pitplayer } from '../models/pitplayer.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'whip-stat',
  templateUrl: './whipstat.component.html',
  styleUrls: ['./whipstat.component.css']
})
export class WhipstatComponent implements OnInit {
  constructor(private http:HttpClient) { }
  loadedStats:pitplayer[] = [];
    ngOnInit() {
      this.GetData();
    }
    private GetData(){
      this.http.get<{[key: string]: pitplayer}>("http://lookup-service-prod.mlb.com/json/named.leader_pitching_repeater.bam?sport_code='mlb'&results=5&game_type='R'&season='2019'&sort_column='whip'&team_id=119&leader_pitching_repeater.col_in=name_display_first_last&leader_pitching_repeater.col_in=rank&leader_pitching_repeater.col_in=whip")

      .pipe(
        map(responseData =>{
        const postArray: pitplayer[] = [];
        for (const key in responseData) {
            postArray.push({ ...responseData[key]});
          
        }
        return postArray 
      })
      ).subscribe(posts=>{this.loadedStats = posts});
    }
  
  }
  