export default function Head() {
  return (
    <>
      <title>UKIYO – 技術と余白で描くポートフォリオ</title>
      <meta name="description" content="静と動のバランスをテーマにしたポートフォリオサイト。株式会社リフレクションが運営しています。" />

      {/* OGP / SNSシェア用 */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="UKIYO – 技術と余白で描くポートフォリオ" />
      <meta property="og:description" content="静と動が調和する“余白美”あるインターフェースを体験できるポートフォリオ。" />
      <meta property="og:url" content="https://ukiyo-reflection.vercel.app" />
      <meta property="og:image" content="https://ukiyo-reflection.vercel.app/hero/image_ukiyo.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@your_twitter_handle" />
      <meta name="twitter:title" content="UKIYO – 技術と余白で描くポートフォリオ" />
      <meta property="og:image" content="https://ukiyo-reflection.vercel.app/hero/image_ukiyo.png" />
      <meta name="twitter:image" content="https://ukiyo-reflection.vercel.app/hero/image_ukiyo.png" />

      {/* その他 */}
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}