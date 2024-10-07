const isDevelopment = process.env.NODE_ENV === 'development';
import BundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: !isDevelopment,
  },
  reactStrictMode: true,
};

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});
export default withBundleAnalyzer(nextConfig);
