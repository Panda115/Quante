// components
import Hero11 from '../heros/Hero11';

import Features1 from './Features1';
import Features2 from './Features2';
import Features3 from './Features3';
import Clients from './Clients';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQs from './FAQs';

// dummy data
import { features, plans } from './data';

const Saas2 = () => {
    return (
        <>
            <Hero11 />

            {/* features */}
            <Features1 features={features} containerClass="position-relative overflow-hidden py-4 pb-lg-7" />

            <Features2 />

            <Features3 />

            {/* clients */}
            <Clients />

            {/* testimonials */}
            <Testimonials />

            {/* pricing */}
            <Pricing plans={plans} />

            {/* FAQs */}
            <FAQs />
        </>
    );
};

export default Saas2;
