//**CUANDO SE EJECUTA RESOLVE, LA,PROMESA SE RESUELVE con el valor pasado en resolve, POR EL CONTRARIO, REJECT ES CUANDO RECHAZA con el valor pasado en reject */

export const getCoordinates = async () => {
    try {
        const position = await new Promise(( resolve, reject ) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return { 
        latitude: position.coords.latitude,
        longitude: position.coords.longitude}
    } catch (error) {
        return null;
    }
    
    
    
}