export const addNewFeature = (addedFeature) => {
    // console.log('actions:addNewFeature:addedFeature',addedFeature)
    return {
        type: 'ADD_FEATURE',
        payload: addedFeature 
    };
}