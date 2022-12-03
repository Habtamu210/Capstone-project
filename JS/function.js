const projects = [
  {
    performersN: 'Sahle Worke Zewedie',
    desigination: 'Presiedent of Ethiopia',
    featuredImage: './images/Sahle-Work-Zewde_.jpg',
    descriptions: 'The Ethio-Heath team will be devoted to attract the right customers in the exhibition floor for exhibitors to create valuable business linkages.',
  },
  {
    performersN: 'Derje Gudeta Elias',
    desigination: 'Deputy Health Minister',
    featuredImage: './images/derje.jfif',
    descriptions: 'The Ethio-Heath team will be devoted to attract the right customers in the exhibition floor for exhibitors to create valuable business linkages.',
  },
  {
    performersN: 'Sinidu Girma Melaka',
    desigination: 'Senior Health Advisory',
    featuredImage: './images/sinidu.jpg',
    descriptions: 'The Ethio-Heath team will be devoted to attract the right customers in the exhibition floor for exhibitors to create valuable business linkages.',
  },
  {
    performersN: 'Dr. Ibrahim Hagos Desta',
    desigination: 'Senior Health Advisory',
    featuredImage: './images/Ibrahim.jpg',
    descriptions: 'The Ethio-Heath team will be devoted to attract the right customers in the exhibition floor for exhibitors to create valuable business linkages.',
  },
  {
    performersN: 'Dagemawit Moges Belew',
    desigination: 'Health Minister',
    featuredImage: './images/dagmawit1.jfif',
    descriptions: 'The Ethio-Heath team will be devoted to attract the right customers in the exhibition floor for exhibitors to create valuable business linkages.',
  },
  {
    performersN: 'Liya Tadesse Gebere',
    desigination: 'Deputy Health Minister',
    featuredImage: './images/Liya.jfif',
    descriptions: 'The Ethio-Heath team will be devoted to attract the right customers in the exhibition floor for exhibitors to create valuable business linkages.',
  },
];
// Project card
function featuredFunction() {
  let featureCard = '';
  projects.forEach((item) => {
    const featureTitle = item.performersN;
    const featureImage = item.featuredImage;
    const { desigination } = item;
    const { descriptions } = item;
    featureCard += `<div class="card-performer colm-1 col-md-1">
    <img src="${featureImage}" alt="" class="performer-photos">
    <div class= "performers-t">
    <h3 class="text name">${featureTitle}</h3>
    <p class="designation notes-1">${desigination}</p>
    <div class="space-line"></div>
    <div class="gray-separator"></div>
    <div class="space-line"></div>
    <p class="text">${descriptions} </p>
    </div>
    </div>`;
  });
  document.getElementById('performer-card').innerHTML = featureCard;
}
featuredFunction();