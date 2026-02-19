import Head from "next/head";

interface IMetaData {
  title?: string;
  description?: string;
}

export const MetaData = ({ title = "Hugivar", description = "" }: IMetaData) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
    </Head>
  );
};
