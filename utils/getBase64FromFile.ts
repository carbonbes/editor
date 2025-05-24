export default function (file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      resolve(reader.result)
    }

    reader.onerror = (error) => {
      reject(error)
    }

    reader.readAsDataURL(file)
  })
}
