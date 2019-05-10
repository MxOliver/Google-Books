export const searchService = {
    newSearch
}

async function newSearch(params){
    const requestOptions = {
        method: 'GET'
    }

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.name+params.type}keyes&key=${process.env.REACT_APP_API_KEY}`, requestOptions);
    const res = handleResponse(response);
    return res;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}