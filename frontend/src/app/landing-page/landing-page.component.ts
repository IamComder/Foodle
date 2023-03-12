import { Component } from '@angular/core';

interface Testimonal{
  name: string;
  image:string;
  feedback: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  testimonals: Testimonal[] = [
    {
      name: 'Sagar Kumar',
      image: 'https://plus.unsplash.com/premium_photo-1669223464455-26df96c59901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      feedback: 'I was hesitant to try this food delivery service at first, but I am so glad I did! The food is absolutely delicious, and the portions are very generous. I also appreciate that they offer a lot of healthy options, which can be hard to find with other delivery services. Overall, I would highly recommend this service to anyone looking for quality food and great customer service.'
    },
    {
      name: 'john doe',
      image: 'https://plus.unsplash.com/premium_photo-1669223464455-26df96c59901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      feedback: 'I was hesitant to try this food delivery service at first, but I am so glad I did! The food is absolutely delicious, and the portions are very generous. I also appreciate that they offer a lot of healthy options, which can be hard to find with other delivery services. Overall, I would highly recommend this service to anyone looking for quality food and great customer service.'
    },
    {
      name: 'jane doe',
      image: 'https://plus.unsplash.com/premium_photo-1669223464455-26df96c59901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      feedback: 'I was hesitant to try this food delivery service at first, but I am so glad I did! The food is absolutely delicious, and the portions are very generous. I also appreciate that they offer a lot of healthy options, which can be hard to find with other delivery services. Overall, I would highly recommend this service to anyone looking for quality food and great customer service.'
    },
    {
      name: 'Jainam Sanghvi',
      image: 'https://plus.unsplash.com/premium_photo-1669223464455-26df96c59901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      feedback: 'I have tried a lot of different food delivery services, but this one is by far the best. The ordering process is very simple, and the food always arrives on time and in perfect condition. I also appreciate the variety of cuisines they offer, which allows me to try new things and explore different flavors. Keep up the great work!'
    },
    {
      name: 'Ayush Kale',
      image: 'https://plus.unsplash.com/premium_photo-1669223464455-26df96c59901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      feedback: 'I recently used this food delivery service for a large family gathering, and I was blown away by the quality of the food and the service. The team went above and beyond to make sure everything was perfect, and the food received rave reviews from everyone. I will definitely be using this service again in the future and recommending it to my friends and family'
    },
    {
      name: 'Subham Agarwal',
      image: 'https://plus.unsplash.com/premium_photo-1669223464455-26df96c59901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      feedback: 'I recently used this food delivery service for a large family gathering, and I was blown away by the quality of the food and the service. The team went above and beyond to make sure everything was perfect, and the food received rave reviews from everyone. I will definitely be using this service again in the future and recommending it to my friends and family'
    },
  ]
  responsiveOptions;

	constructor() { 
		this.responsiveOptions = [
            {
                breakpoint: '5000px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '1200px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '700px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}
  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.responsiveOptions = [
  //     {
  //         breakpoint: '1024px',
  //         numVisible: 3,
  //         numScroll: 3
  //     },
  //     {
  //         breakpoint: '768px',
  //         numVisible: 2,
  //         numScroll: 2
  //     },
  //     {
  //         breakpoint: '560px',
  //         numVisible: 1,
  //         numScroll: 1
  //     }
  // ];
  // }
}
