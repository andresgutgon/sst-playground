'use client'

import { FormEvent, useState } from "react";

type Props = { signedUrl: string }
export default function UploadForm({ signedUrl }: Props) {
  const [imageUrl, setImageUrl] = useState<string>('')
  async function uploadImage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement
    const file = form.file.files?.[0]!;

    const image = await fetch(signedUrl, {
      body: file,
      method: "PUT",
      headers: {
        "Content-Type": file.type,
        "Content-Disposition": `attachment; filename="${file.name}"`,
      },
    });

    setImageUrl(image.url.split("?")[0])
  }

  return (
    <form onSubmit={uploadImage}>
      <input name="file" type="file" accept="image/png, image/jpeg" />
      <button type="submit">Upload</button>
      {imageUrl && <img width={300} height={150} src={imageUrl} alt='Uploaded to S3' />}
    </form>
  )
}
