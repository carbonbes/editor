export type DimensionsFromBase64MediaReturn = {
  width: number
  height: number
}

function getMediaDimensions(
  base64Media: string,
  mediaGroup: 'image' | 'video',
) {
  return new Promise<DimensionsFromBase64MediaReturn | null>((resolve) => {
    const element =
      mediaGroup === 'image'
        ? document.createElement('img')
        : document.createElement('video')

    element.src = base64Media

    function handleOnLoad() {
      resolve({
        width:
          mediaGroup === 'image'
            ? (element as HTMLImageElement).naturalWidth
            : (element as HTMLVideoElement).videoWidth,
        height:
          mediaGroup === 'image'
            ? (element as HTMLImageElement).naturalHeight
            : (element as HTMLVideoElement).videoHeight,
      })
    }

    function handleOnError() {
      resolve(null)
    }

    if (mediaGroup === 'image') {
      element.onload = handleOnLoad
      element.onerror = handleOnError
    } else if (mediaGroup === 'video') {
      element.onloadeddata = handleOnLoad
      element.onerror = handleOnError
    }
  })
}

export default async function (base64Media: string) {
  const mediaGroup = await getMediaGroupFromBase64Media(base64Media)

  if (!mediaGroup) return null

  return getMediaDimensions(base64Media, mediaGroup)
}
