import Head from 'next/head';

export default function Layout({title,descriptiton,keyword,children}) {
    return (
        <div>
            <Head>
            <title>{title}</title>
            <meta name='description' content={descriptiton}  />
            <meta name='keyword' content={keyword} />

            </Head>
            {children}
        </div>
    )
}


Layout.defaultProps ={
    title:'DJ Events || Hottest parties in town',
    descriptiton:'Best DJ events in the town,catch up soon',

}