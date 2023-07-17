


// order of image array - [mobile, tablet, desktop]
export function determineImageSize(deviceType, imageArray){
  if (deviceType == 'mobile') return imageArray[0]
  if (deviceType == 'tablet') return imageArray[1]
  return imageArray[2]
}










