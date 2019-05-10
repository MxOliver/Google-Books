export function googleAuth() {
    let token = process.env.REACT_APP_API_KEY;

    if(token) {
        return { 'Authorization': 'Bearer ' + token }
    } else {
        return {};
    }
}