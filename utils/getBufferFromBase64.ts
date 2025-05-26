export default async function (base64: string) {
  const [_, base64Data] = base64.split(',')

  const byteString = atob(base64Data)

  const arrayBuffer = new ArrayBuffer(byteString.length)
  const uint8Array = new Uint8Array(arrayBuffer)

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i)
  }

  return arrayBuffer
}
