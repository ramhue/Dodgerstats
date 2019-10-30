import { Component, OnInit } from '@angular/core';
import { pitplayer } from '../models/pitplayer.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'era-stat',
  templateUrl: './erastat.component.html',
  styleUrls: ['./erastat.component.css']
})
export class ErastatComponent implements OnInit {

  constructor(private http:HttpClient) { }
loadedStats:pitplayer[] = [];
  ngOnInit() {
    this.GetData();
  }
  private GetData(){
    this.http.get<{[key: string]: pitplayer}>("http://lookup-service-prod.mlb.com/json/named.leader_pitching_repeater.bam?sport_code='mlb'&results=5&game_type='R'&season='2019'&sort_column='era'&team_id=119&leader_pitching_repeater.col_in=era&leader_pitching_repeater.col_in=name_display_first_last&leader_pitching_repeater.col_in=so&leader_pitching_repeater.col_in=w&leader_pitching_repeater.col_in=sv&leader_pitching_repeater.col_in=er&leader_pitching_repeater.col_in=rank")
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

