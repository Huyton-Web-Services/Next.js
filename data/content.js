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
            'meta_title' : '404 | Page not found',
            'meta_description' : 'Missing page',
            'error' : 404,
        }
    }

    let jsonResponse;
    try{
        jsonResponse =  await res.json();
    }catch(e){
        return {
            'title': "API issue",
            'heading': "The API is gone away, we're trying to find it",
            'body': "<p>We've lost our API and are looking for it, please try refreshing the page and if that doesn't work there is a larger issue, and we're looking into it</p>",
            'meta_title' : '404 | API issue',
            'meta_description' : 'Missing API',
            'error' : 404,
        }
    }

    return {
        'title': jsonResponse.title[0].value,
        'heading': jsonResponse.field_subtitle && jsonResponse.field_subtitle[0] ? jsonResponse.field_subtitle[0].value : '',
        'body': jsonResponse.body[0].processed,
        'meta_title' : jsonResponse.metatag[0] ? jsonResponse.metatag[0].attributes.content : jsonResponse.title[0].value,
        'meta_description' : jsonResponse.metatag[1] ? jsonResponse.metatag[1].attributes.content : 'A great meta description',
        'created' : jsonResponse.created[0].value,
        'background_colour': jsonResponse.field_background_colour ? jsonResponse.field_background_colour[0].color : '#FFFFFF',
        'font_colour': jsonResponse.field_font_colour ? jsonResponse.field_font_colour[0].color : '#000000',
        'main_image': jsonResponse.field_main_image && jsonResponse.field_main_image[0] ? jsonResponse.field_main_image[0] : null,
        'error' : null,
    }
}
