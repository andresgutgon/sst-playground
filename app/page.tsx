import Image from 'next/image'
/* import crypto from "crypto" */
/* import { Bucket } from "sst/node/bucket" */
/* import { getSignedUrl } from "@aws-sdk/s3-request-presigner"; */
/* import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3" */
/* import UploadForm from "./(components)/UploadForm"; */

export default async function Home() {
  /* const command = new PutObjectCommand({ */
  /*   ACL: "public-read", */
  /*   Key: crypto.randomUUID(), */
  /*   Bucket: Bucket.public.bucketName, */
  /* }); */
  /* const signedUrl = await getSignedUrl(new S3Client({}), command) */

  return (
    <main className='pt-4 mx-auto max-w-xl'>
      {/* <UploadForm signedUrl={'NOP'} /> */}
      <Image width={500} height={286} src='https://i.gifer.com/origin/fc/fcde2ab4ec2c96a586f89345037e6ab9.gif' alt='Nothing to see here' />
    </main >
  )
}
