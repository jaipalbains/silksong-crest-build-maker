export function getImgUrl(fileName: string, category: string)
{    
    return(new URL(`./assets/${category}/${fileName}.png`, import.meta.url).href);
}

export function getHeight(item: string)
{
    if(item.includes("slot")) return "12%"

    return "14%";
}