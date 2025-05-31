export default function (
  base64Video: string,
  { currentTime = 0.1 }: { currentTime?: number } = {},
) {
  return new Promise<string>((resolve, reject) => {
    const video = document.createElement('video')
    video.src = base64Video
    video.currentTime = currentTime

    video.onloadeddata = () => {
      const canvas = document.createElement('canvas')

      const width = video.videoWidth
      const height = video.videoHeight

      canvas.width = width
      canvas.height = height

      const context = canvas.getContext('2d')
      context?.drawImage(video, 0, 0, width, height)

      resolve(canvas.toDataURL('image/png'))
    }

    video.onerror = (error) => {
      reject(error)
    }
  })
}
