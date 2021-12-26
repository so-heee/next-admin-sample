import Head from 'next/head'

export const SimpleLayout = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default SimpleLayout
