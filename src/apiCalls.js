const apiCall = (data) => {
    return fetch(`https://radiance-app.herokuapp.com/api/v1/affirmations`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response);
            }
        })
        .catch((error) => {
            return true;
        });
};
const getData = (data, error) => {
    let promise = Promise.all([apiCall(data)]).then((movieData) => {
        return movieData;
    });
    return promise;
};
export { getData };
