import { fileTypeFromBuffer } from 'file-type'

export default async function (buffer: Uint8Array | ArrayBuffer) {
  return await fileTypeFromBuffer(buffer)
}
