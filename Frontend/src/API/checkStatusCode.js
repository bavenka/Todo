export default function checkStatusCode(response) {
    if (response.status >= 200 && response.status <= 399)
        return response;
    else
        throw response;
}