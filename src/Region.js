
const region = (id) => {
    switch (id) {
        case '1':

            return {
                name: 'Kanto',
                range: '001 - 151',
                limit: 151,
                offset: 0
            };

        case '2':

            return {
                name: 'Johto',
                range: '152 - 251',
                limit: 100,
                offset: 151
            };

        case '3':

            return {
                name: 'Hoenn',
                range: '252 - 386',
                limit: 135,
                offset: 251
            };

        case '4':

            return {
                name: 'Sinnoh',
                range: '387 - 493',
                limit: 107,
                offset: 386
            };

        case '5':

            return {
                name: 'Unova',
                range: '494 - 649',
                limit: 156,
                offset: 493
            };

        case '6':

            return {
                name: 'Kalos',
                range: '650 - 721',
                limit: 72,
                offset: 649
            };

        default:
            return {
                name: 'Generation VI',
                range: '001 - 721',
                limit: 721,
                offset: 0
            };
    }
}

export default region