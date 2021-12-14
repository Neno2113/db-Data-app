// const baseUrl = process.env.REACT_APP_API_URL;


export const fetchHelper = ( endpoint, data, method = 'GET') => {

    const url = `http://localhost:4000/api/${ endpoint }`;

    if( method === 'GET'){
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }


}

