import { Component, OnInit } from '@angular/core';
import { IChannels } from 'src/app/interfaces/channels';
import { DataChannelsService } from 'src/app/services/channels/data-channels.service';

@Component({
  selector: 'app-tv-channels',
  templateUrl: './tv-channels.component.html',
  styleUrls: ['./tv-channels.component.scss'],
  providers: [DataChannelsService]
})
export class TvChannelsComponent implements OnInit {

  channels: IChannels[] = [];

  constructor(private dataChannels: DataChannelsService) {
    this.channels = dataChannels.getChannels();
  }

  ngOnInit(): void {
  }

}
