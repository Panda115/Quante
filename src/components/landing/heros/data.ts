import img1 from '../../../assets/images/avatars/img-6.jpg';
import img2 from '../../../assets/images/avatars/img-8.jpg';

interface Slide {
    avatar: string;
    description: string;
}

const slides: Slide[] = [
    {
        avatar: img1,
        description: 'This app is blessing for all professionals!',
    },
    {
        avatar: img2,
        description: 'Very convenient to use project manager!',
    },
];

export { slides };
