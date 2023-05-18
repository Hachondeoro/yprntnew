import comment_image_1 from '../../assets/images/blog/comments-img-1.png';
import comment_image_2 from '../../assets/images/blog/comments-img-2.png';
import comment_image_3 from '../../assets/images/blog/comments-img-3.png';

const comments = [
  {
    image: comment_image_1,
    name: 'Collin Smith',
    date: '25 AUG, 2019',
    comment:
      'Great post Collin! thoroughly enjoyed your writing and insights into the industry. I will definitely look foward to your next post.',
    reply: [
      {
        image: comment_image_2,
        name: 'Collin Smith',
        date: '25 AUG, 2019',
        comment:
          'Great post Collin! thoroughly enjoyed your writing and insights into the industry. I will definitely look foward to your next post.',
      },
    ],
  },
  {
    image: comment_image_3,
    name: 'Collin Smith1',
    date: '25 AUG, 2019',
    comment:
      'Great post Collin! thoroughly enjoyed your writing and insights into the industry. I will definitely look foward to your next post.',
  },
];

export default comments;
