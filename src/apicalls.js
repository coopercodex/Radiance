const getData = async () => {
    return await fetch('https://radiance-app.herokuapp.com/api/v1/affirmations')
}
export { getData }