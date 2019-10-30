import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RbiStatComponent } from './rbistat/rbistat.component'
import { StatComponent } from './stat/stat.component';
import { HrStatComponent} from './homerunstat/hrstat.component';
import { SbStatComponent} from './stolenbasestat/sbstat.component';
import { OpsStatComponent} from './opsstat/opsstat.component';
import { SlgstatComponent } from './slgstat/slgstat.component';
import { PlayerComponent } from './player/player.component';
import { PitchingComponent } from './pitching/pitching.component';
import { ErastatComponent } from './erastat/erastat.component';
import { SostatComponent } from './sostat/sostat.component';
import { SvstatComponent } from './svstat/svstat.component';
import { WstatComponent } from './wstat/wstat.component';
import { WhipstatComponent } from './whipstat/whipstat.component';
import { PavgstatComponent } from './pavgstat/pavgstat.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HittingComponent } from './hitting/hitting.component';
@NgModule({
  declarations: [
    AppComponent,
    RbiStatComponent,
    HrStatComponent,
    SbStatComponent,
    StatComponent,
    OpsStatComponent,
    SlgstatComponent,
    PlayerComponent,
    PitchingComponent,
    ErastatComponent,
    SostatComponent,
    SvstatComponent,
    WstatComponent,
    WhipstatComponent,
    PavgstatComponent,
    NavigationBarComponent,
    HittingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
