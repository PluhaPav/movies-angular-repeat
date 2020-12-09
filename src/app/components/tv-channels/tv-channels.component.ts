import { Component, OnInit } from '@angular/core';
import { IChannels } from 'src/app/interfaces/channels';

@Component({
  selector: 'app-tv-channels',
  templateUrl: './tv-channels.component.html',
  styleUrls: ['./tv-channels.component.scss']
})
export class TvChannelsComponent implements OnInit {

  channels: IChannels[] = [
    {
      image: '../../../assets/image/channels/first-channel.png',
      name: 'Первый канал',
      list: [
        {
          time: '13:00',
          name: 'Новости (с субтитрами)'
        },
        {
          time: '14:00',
          name: 'Давай поженимся'
        },
        {
          time: '15:00',
          name: 'Другие новости'
        },
      ]
    },
    {
      image: '../../../assets/image/channels/2x2.png',
      name: '2x2',
      list: [
        {
          time: '13:00',
          name: 'Новости (с субтитрами)'
        },
        {
          time: '14:00',
          name: 'Давай поженимся'
        },
        {
          time: '15:00',
          name: 'Другие новости'
        },
      ]
    },
    {
      image: '../../../assets/image/channels/rbc.png',
      name: 'РБК',
      list: [
        {
          time: '13:00',
          name: 'Новости (с субтитрами)'
        },
        {
          time: '14:00',
          name: 'Давай поженимся'
        },
        {
          time: '15:00',
          name: 'Другие новости'
        },
      ]
    },
    {
      image: '../../../assets/image/channels/amedia.png',
      name: 'AMEDIA PREMIUM',
      list: [
        {
          time: '13:00',
          name: 'Новости (с субтитрами)'
        },
        {
          time: '14:00',
          name: 'Давай поженимся'
        },
        {
          time: '15:00',
          name: 'Другие новости'
        },
      ]
    },
    {
      image: '../../../assets/image/channels/amedia.png',
      name: 'AMEDIA PREMIUM',
      list: [
        {
          time: '13:00',
          name: 'Новости (с субтитрами)'
        },
        {
          time: '14:00',
          name: 'Давай поженимся'
        },
        {
          time: '15:00',
          name: 'Другие новости'
        },
      ]
    },
    {
      image: '../../../assets/image/channels/amedia.png',
      name: 'AMEDIA PREMIUM',
      list: [
        {
          time: '13:00',
          name: 'Новости (с субтитрами)'
        },
        {
          time: '14:00',
          name: 'Давай поженимся'
        },
        {
          time: '15:00',
          name: 'Другие новости'
        },
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
