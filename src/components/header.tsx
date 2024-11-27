// 导入必要的组件和依赖
import Link from "next/link";

import { NavItem } from "@/components/nav-item";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { MobileNavItem } from "@/components/mobile-nav-item";
import Image from "next/image";

/**
 * Header组件 - 网站的主要导航头部
 * 包含：
 * - Logo和品牌名称
 * - 桌面端导航菜单
 * - 移动端响应式导航菜单
 * - "开始使用"按钮
 */
export function Header() {
  return (
    // 头部容器，使用flex布局实现两端对齐
    <header className="container flex items-center justify-between gap-10 py-4">
        {/* Logo和品牌名称容器 */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/Logo.png"
            alt="Raptor Logo"
            width={166}
            height={166}
            className="size-12"
          />
          <span className="font-heading text-2xl font-bold text-primary">Raptor</span>
        </div>
      {/* 右侧导航区域 */}
      <div className="flex items-center gap-10">
        {/* 桌面端导航菜单 - 在md断点以上显示 */}
        <nav className="hidden items-center justify-end gap-10 md:flex">
          <NavItem href="/about" label="About" />
          <NavItem href="/docs" label="Docs" />
          <NavItem href="/blog" label="Blog" />
        </nav>
        {/* 桌面端"开始使用"按钮 - 在md断点以上显示 */}
        <div className="hidden items-center gap-2 md:flex">
          <Button 
            asChild
            className="cursor-pointer bg-purple-500 text-white transition-colors hover:bg-purple-600"
          >
            <Link href="#" className="cursor-pointer">
              Get Started
            </Link>
          </Button>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      <MobileNavbar>
        {/* 移动端导航内容 */}
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <MobileNavItem href="/about" label="About" />
            <MobileNavItem href="/docs" label="Docs" />
            <MobileNavItem href="/blog" label="Blog" />
            <MobileNavItem href="/pricing" label="Pricing" />
            {/* 移动端"开始使用"按钮 */}
            <Button 
              size="lg" 
              asChild 
              className="mt-2 w-full cursor-pointer bg-purple-500 text-white transition-colors hover:bg-purple-600"
            >
              <Link href="#" className="cursor-pointer">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
