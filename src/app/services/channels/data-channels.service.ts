import { Injectable } from '@angular/core';
import { IChannels } from 'src/app/interfaces/channels';

@Injectable({
  providedIn: 'root'
})
export class DataChannelsService {
  private channels: IChannels[] = [
    {
      id: 1,
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
      id: 2,
      image: '../../../assets/image/channels/2x2.png',
      name: '2x2',
      list: [
        {
          time: '13:00',
          name: 'МУЛЬТ ТВ. Сезон 4, 7 серия'
        },
        {
          time: '14:00',
          name: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия'
        },
        {
          time: '15:00',
          name: 'БУРДАШЕВ. Сезон 1, 20 серия'
        },
      ]
    },
    {
      id: 3,
      image: '../../../assets/image/channels/rbc.png',
      name: 'РБК',
      list: [
        {
          time: '13:00',
          name: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС'
        },
        {
          time: '14:00',
          name: 'ДЕНЬ. Главные темы'
        },
        {
          time: '15:00',
          name: 'Главные новости'
        },
      ]
    },
    {
      id: 4,
      image: '../../../assets/image/channels/amedia.png',
      name: 'AMEDIA PREMIUM',
      list: [
        {
          time: '13:00',
          name: 'Клиент всегда мёртв'
        },
        {
          time: '14:00',
          name: 'Голодные игры: Сойка-пересмешница. Часть I'
        },
        {
          time: '15:00',
          name: 'Секс в большом городе'
        },
      ]
    },
    {
      id: 5,
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
      id: 6,
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

  getChannels(): IChannels[] {
    return this.channels;
  }
}
