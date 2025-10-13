import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export", // 静的エクスポート
  images: {
    unoptimized: true, // 静的エクスポート時は必須
  },
  // パフォーマンス最適化
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // ワークスペースルートの警告を解決
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
