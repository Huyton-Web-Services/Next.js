import {apiDomain} from "@/pages/_app";
export async function getMenu(menu='main') {
    const menuUrl = `${apiDomain}/system/menu/${menu}/linkset`;
    const res = await fetch(
        menuUrl,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
            },
        }
    );

    if (!res.ok)
        return [];

    let jsonResponse;
    try{
        jsonResponse = await res.json();
    }catch(e){
        return [];
    }

    if(jsonResponse.linkset[0] === undefined) return [];
    if(jsonResponse.linkset[0].item === undefined) return [];

    return jsonResponse.linkset[0].item;
}
