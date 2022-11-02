// types
import { PlanItem } from '../pricing/pricing';

import { Feature } from './_saas';

const features: Feature[] = [
    {
        avatar: 'users',
        title: 'Improve Employee Experience',
        description:
            'Before we dive into why companies must invest in employee experience (EX), it’s important to understand what this concept entails.',
        variant: 'primary',
        containerClass: 'd-flex border-bottom pb-4',
    },
    {
        avatar: 'user-plus',
        title: 'Hiring & Onboarding',
        description: 'Post your job, interview candidates and make offers, all on Prompt. Start hiring today.',
        variant: 'success',
        containerClass: 'd-flex border-bottom py-4',
    },
    {
        avatar: 'bar-chart',
        title: 'People Data & Analytics',
        description: 'Finding committed employees is one of public and private organizations’ top priorities.',
        variant: 'orange',
        containerClass: 'd-flex pt-4',
    },
];

const plans: PlanItem[] = [
    {
        id: 1,
        name: 'Starter',
        price: '49',
        duration: '/ month',
        features: [
            'Up to 600 minutes usage time',
            'Use for personal only',
            'Add up to 10 attendees',
            '1 User',
            'Technical support via email',
        ],
        isRecommended: false,
    },
    {
        id: 2,
        name: 'Professional',
        price: '99',
        duration: '/ month',
        features: [
            'Up to 6000 minutes usage time',
            'Use for personal or a commercial',
            'Add up to 100 attendees',
            'Up to 5 teams',
            'Technical support via email',
        ],
        isRecommended: true,
    },
    {
        id: 3,
        name: 'Enterprise',
        price: '599',
        duration: '/ month',
        features: [
            'Unlimited usage time',
            'Use for personal or a commercial',
            'Add Unlimited attendees',
            '24x7 Technical support via phone',
            'Technical support via email',
        ],
        isRecommended: false,
    },
];

export { features, plans };
