export default async function (base64Media: string) {
  const buffer = getBufferFromBase64(base64Media)
  const { mime } = (await getFileTypeFromBuffer(buffer)) || {}

  if (!mime) return

  if (mime.startsWith('image/')) {
    return 'image'
  } else if (mime.startsWith('video/')) {
    return 'video'
  }
}
