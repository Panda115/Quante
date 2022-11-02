// component
import Hero9 from '../heros/Hero9';

import About from './About';
import Feature from './Feature';
import Counter from './Counter';
import Team from './Team';
import Client from './Client';

// dummy data
import { teamMembers } from './data';

const Company = () => {
    return (
        <>
            <Hero9 />
            {/* about */}
            <About />

            {/* feature */}
            <Feature />

            {/* counter */}
            <Counter />

            {/* Team */}
            <Team teamMembers={teamMembers} />

            {/* client */}
            <Client />
        </>
    );
};

export default Company;
