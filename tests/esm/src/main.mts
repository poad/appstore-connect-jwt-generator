import { tokenSync } from 'appstore-connect-jwt-generator-core';
import 'source-map-support/register';

const main = {
    main: () => {
        console.log(typeof tokenSync);
    }
};

export default main;