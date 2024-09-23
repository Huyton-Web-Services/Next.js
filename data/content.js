import {apiDomain} from "@/pages/_app";

export async function getContent(url = '/') {
    const contentUrl = apiDomain + url + '?_format=json';

    const res = await fetch(
        contentUrl,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
            },
        }
    );

    // Catch the not found error
    if(res.status === 404){

        // Return 404 page
        return {
            'title': "Page not found",
            'heading': "Page not found",
            'body': "<p>Page not found.</p>",
            'metaTitle' : '404 | Page not found',
            'metaDescription' : 'Missing page',
            'error' : 404,
        }
    }

    let jsonResponse;
    try{
        jsonResponse = await res.json();
    }catch(e){
        return {
            'title': "API issue",
            'heading': "The API is gone away, we're trying to find it",
            'body': "<p>We've lost our API and are looking for it, please try refreshing the page and if that doesn't work there is a larger issue, and we're looking into it</p>",
            'metaTitle' : '404 | API issue',
            'metaDescription' : 'Missing API',
            'error' : 404,
        }
    }

    //const jsonResponse = await res.json();
    //if(contentUrl === 'http://localhost:8080/articles/type/news?_format=json')
    console.log(jsonResponse);

    return jsonResponse;
}
