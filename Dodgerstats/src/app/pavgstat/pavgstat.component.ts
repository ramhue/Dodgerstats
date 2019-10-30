import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { pitplayer } from "../models/pitplayer.model"
import { map } from "rxjs/operators";
@Component({
  selector: 'pavg-stat',
  templateUrl: './pavgstat.component.html',
  styleUrls: ['./pavgstat.component.css']
})
export class PavgstatComponent implements OnInit {
  constructor(private http:HttpClient) { }
  loadedStats:pitplayer[] = [];
    ngOnInit() {
      this.GetData();
    }
    private GetData(){
      this.http.get<{[key: string]: pitplayer}>("http://lookup-service-prod.mlb.com/json/named.leader_pitching_repeater.bam?sport_code='mlb'&results=5&game_type='R'&season='2019'&sort_column='avg'&team_id=119&leader_pitching_repeater.col_in=name_display_first_last&leader_pitching_repeater.col_in=rank&leader_pitching_repeater.col_in=avg")
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
  
// http://lookup-service-prod.mlb.com/json/named.leader_pitching_repeater.bam?sport_code='mlb'&results=5&game_type='R'&season='2019'&sort_column='avg'&team_id=119&leader_pitching_repeater.col_in=name_display_first_last&leader_pitching_repeater.col_in=rank&leader_pitching_repeater.col_in=avg