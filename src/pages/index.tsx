import { NextSeo } from "next-seo";
import { type NextPageWithLayout } from "~/pages/_app";
import { DefaultPage } from "~/layouts/DefaultPage";
import LogoSvg from "~/assets/app.svg";
import "twin.macro";

interface Props {}

const Index: NextPageWithLayout<Props> = () => {
  return (
    <>
      <NextSeo title='Index' />
      <LogoSvg />
      <h1 tw='text-center bg-black text-white'>Index</h1>
    </>
  );
};

Index.getLayout = (page) => {
  return <DefaultPage>{page}</DefaultPage>;
};

export default Index;
