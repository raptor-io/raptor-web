// 导入必要的组件和依赖
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Image2 } from "@/components/image2";

/**
 * Hero组件 - 网站的主要展示区域
 * 包含：
 * - 大标题文本（带渐变效果）
 * - 副标题
 * - 操作按钮
 * - 背景图像
 */
export function Hero() {
  return (
    // 主容器section，使用flex布局垂直居中对齐所有元素
    <section className="container flex flex-col items-center gap-4 pb-28 pt-20 sm:gap-6">
      {/* 主标题 - 使用渐变色文本效果 */}
      <h1 className="flex flex-col items-center text-6xl sm:text-7xl lg:text-9xl leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
        <span>The Fiercest Liquidity</span>
        <span>Infrastructure</span>
      </h1>

      {/* 副标题 - 居中显示的说明文本 */}
      <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">Build on Soon</p>

      {/* 按钮组 - 使用grid布局排列两个按钮 */}
      <div className="grid grid-cols-2 gap-3">
        {/* "了解更多"按钮 - 使用outline样式 */}
        <Button 
          size="lg" 
          asChild 
          variant="outline" 
          className="cursor-pointer border-muted-foreground text-muted-foreground hover:bg-muted-foreground/10 hover:text-muted-foreground transition-colors"
        >
          <Link href="#">Learn More</Link>
        </Button>
        {/* "开始使用"按钮 - 使用默认样式 */}
        <Button 
          size="lg" 
          asChild 
          className="cursor-pointer bg-purple-500 hover:bg-purple-600 text-white transition-colors"
        >
          <Link href="#">Get Started</Link>
        </Button>
      </div>

      {/* 背景图像 - 使用相对定位和模糊效果 */}
      <div className="relative sm:mt-8">
        <Image2 />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
