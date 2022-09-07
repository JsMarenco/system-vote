import Head from 'next/head'

interface CustomHeadProps {
  title: string;
  description: string;
}

export default function CustomHead(props: CustomHeadProps) {
  const { title, description } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
    </>
  )
}
