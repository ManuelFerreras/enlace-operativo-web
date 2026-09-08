import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const config: NextConfig = { poweredByHeader: false, devIndicators: false, images: { formats: ['image/avif', 'image/webp'] } };
export default createNextIntlPlugin('./src/i18n/request.ts')(config);
