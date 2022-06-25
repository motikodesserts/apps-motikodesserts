import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  title = '';
  imgHeader = 'assets/img/about.jpg';
  headerDescription = ``;
  colors = ['#f9dde9', '#f1e0f3', '#e6e6e6', '#fdeed7'];
  lightColors = ['#ffe8f2', '#fce9ff', '#f1f1f1', '#ffffff'];

  data = [
    {
      title: `our story`,
      subtitle: `Some most fascinating stories start from small things.`,
      shortDescription: `A tiny match can start a huge bonfire. Several words can change the course of history. An illustration in a children’s book can make a child happy for an evening and become a source of inspiration for his entire life. These moments are not always visible to us, but they can change our lives. And we too have a story to tell…`,
      description: `<div>
	<p>It starts over 2000 years ago when Mochi – a special dessert made of rice – became an important symbol for Japan. Around that time the Japanese started cultivating rice and Mochi became the symbol of all the good things that rice gave to Japan.</p>
<p>&nbsp;</p>
<p>It represented hope, prosperity and good fortune.</p>
<p>&nbsp;</p>
<p>In Japan they made Mochi through mochitsuki – a religious ceremony, a Shinto ritual, and for a long time only the Emperor and the nobles could take part in it. Later on, it became a nationwide tradition and during New Year a lot of Japanese from all over the globe perform mochitsuki – making Mochi by pounding sweet rice.</p>
<p>&nbsp;</p>
<p>Some think that Mochi is a rice pie. Others – that it’s a sort of ice-cream. But for us, it’s something unique. We discovered Mochi and mochitsuki in 2012 in Japan. We didn’t think that Mochi could change our lives. But it did. We got inspired. The taste of Mochi, the tradition behind it, was the spark that started MOTIKO.</p>
<p>&nbsp;</p>
<p>Do you want to be a part of this story? We are MOTIKO, the dessert as a philosophy…</p>
</div>`,
      img: 'assets/img/about-us/img_sm5.jpg',
    },
    {
      title: `Our Product`,
      subtitle: `We produce Mochi`,
      shortDescription: `– an ancient Japanese dessert with thousands of years of history. Mochi, the “food for the gods”, for years was part of religious offering rituals. Now it became a traditional symbol, that in addition to general good fortune is a talisman for happy marriages…`,
      description: `<div>
<p>At MOTIKO we experimented a lot, combining age-old recipes with the possibilities of innovative food technologies. As a result, Mochi was born. Our Mochi is a congealed dessert, made of 100% rice flour. Rice is one of the most consumed cereals in the world, due to its nutritive and gastronomic properties. Mochi – is a <em>gluten-free</em> dessert, that contains <em>few calories</em> and has a reduced base of proteins and fats.</p>
<p>&nbsp;</p>
<p>Maybe, you prefer something sweet? Or sour? Or even both? We tried to invent various tastes of Mochi, so everyone could find their favorite. The delicious fillings inside each piece of Mochi provide indisputable nutritive value to this dessert.</p>
<p>&nbsp;</p>
<p>Creating Mochi we don’t add any ingredients that have an animal provenience, that’s why it 100% <em>vegan</em>.</p>
</div>`,
      img: 'assets/img/about-us/img_sm5.jpg',
      color: '#f9dde9',
    },
    {
      title: `Our Brand`,
      subtitle: `MOTIKO is more than a company that produces desserts.`,
      shortDescription: `It is our dream to bring Japanese culture to the world. We are always learning new things about Japan and we welcome you to join us on this fascinating journey. Maybe you will be interested in how Mochi is made? Or the drawings of Sakura will inspire you and to find something new about this beautiful tree? Or we will spark an interest in japanese clothing or even Sinto traditions? Let’ s start with our name…`,
      description: `<div>
	<p>It comes from mochigomeko, or mochiko for short. “Mochiko” is a word that doesn’t fare well in translation. It means “mochi flour” in Japanese, but to better describe mochiko in English, manufacturers call it sweet rice flour or glutinous rice flour instead. And here is the trickiest part! Mochiko isn’t sweet, nor does it contain a speck of gluten. “Ko” – stands for “company”. We wanted our name to sound simple and delicate, and therefore we have named ourselves MOTIKO.</p>
<p>&nbsp;</p>
<p>We always make our best to make the entire process – from making Mochi and delivering it to you – as authentic as possible. That is the reason we so carefully design our brand shops – from selling unique Japanese products as Mochi desserts and Matcha tea to shaping unique kimono – like uniforms for our coworkers. It takes time and an enormous effort, but it makes our lives complete.</p>
</div>`,
      img: 'assets/img/about-us/img_sm5.jpg',
    },
    {
      title: `Our Mission, Aim and Values`,
      subtitle: `We are not producing desserts. We shape a philosophy.`,
      shortDescription: `We nurture the idea that Mochi is more than a dessert. lt’ s an en tire philosophy of gourmandizing and diving into a range of taste, aroma, and aftertaste to create a delightful “fullness” perception. We create a product that creates sublime moments of inspiration and happiness …`,
      description: `<div>
	<p>We see our mission as to promote a mindful approach to nutrition, explore aesthetic qualities in contemporary food, and cultivate a new type of consumer behavior.</p>
<p>&nbsp;</p>
<p>Thus, <strong>our core values</strong> are:</p>
<p>&nbsp;</p>
<ul>
<li>The highest quality standards</li>
<li>Leadership in the industry</li>
<li>Creating outstanding tasteful experience</li>
<li>Mindful approach to nutrition</li>
<li>Conscious consuming</li>
<li>Food aesthetics</li>
<li>The eclectic combination of culture and traditions with innovation and technology</li>
</ul>
<p>&nbsp;</p>
<p>But the mission for MOTIKO is about more than great food. We are not another dessert manufacturer. We shape rituals and change mindsets. MOTIKO is about this philosophy to settle down for a while and savor the moment.</p>
</div>`,
      img: 'assets/img/about-us/img_sm5.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
