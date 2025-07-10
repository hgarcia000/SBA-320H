
const region = (id) => {
        switch (id) {
            case '1':
                
                return {
                        name:'Kanto',
                        limit: 151,
                        offset: 0
                    };
        
            case '2':
                
                return {
                        name:'Johto',
                        limit: 100,
                        offset: 151
                    };
        
            case '3':
                
                return {
                        name:'Hoenn',
                        limit: 135,
                        offset: 251
                    };
        
            case '4':
                
                return {
                        name:'Sinnoh',
                        limit: 107,
                        offset: 386
                    };
        
            case '5':
                
                return {
                        name:'Unova',
                        limit: 156,
                        offset: 493
                    };
        
            case '6':
                
                return {
                        name:'Kalos',
                        limit: 72,
                        offset: 649
                    };
        
            default:
                return;
        }
    }

    export default region