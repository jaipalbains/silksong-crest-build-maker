export function getImgUrl(fileName: string, category: string)
{    
    return(new URL(`./assets/${category}/${fileName}.png`, import.meta.url).href);
}