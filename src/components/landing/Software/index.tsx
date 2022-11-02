// component
import Hero8 from '../heros/Hero8';

import ClientsReview from './ClientsReview';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
// dummy data
import { features } from './data';
const Software = () => {
    return (
        <>
            <Hero8 />

            {/* clients review */}
            <ClientsReview />

            {/* feature 1 */}
            <Feature1 />

            {/* feature 2 */}
            <Feature2 features={features} />
        </>
    );
};

export default Software;
