import { Component, OnInit } from '@angular/core';

export interface Memories {
  date: string | Date;
  title: string;
  coverImage: string;
  description: string;
}

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.scss']
})
export class MemoriesComponent implements OnInit {
  memories: Memories[] = [];
  data: Memories[] = [
    {
      date: '2021-02-27',
      title: 'St. Jhon\'s Crossing',
      coverImage: 'IMG_20210227_150716.webp',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      date: '2021-01-23',
      title: 'Vrindavan',
      coverImage: 'IMG_20210123_161839.webp',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      date: '2020-12-01',
      title: 'Birthday Bash',
      coverImage: 'WhatsApp Image 2020-12-01 at 2.36.53 PM.webp',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
      date: '2020-11-13',
      title: 'Diwali Celebration',
      coverImage: 'IMG-20201113-WA0016.webp',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.memories = this.data.map(m => {
      return {
        date: new Date(m.date),
        title: m.title,
        coverImage: m.coverImage,
        description: this.formatDescription(m.description)
      };
    });
  }

  formatDescription(description: string): string {
    const maxLength = 140;
    const contentLength = description.length;
    return contentLength > maxLength ? description.substr(0, maxLength).concat('...') : description;
  }

}
