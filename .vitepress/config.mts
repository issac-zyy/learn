import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

export default defineConfig({
  title: "我的笔记",
  description: "全自动生成的个人博客",
  themeConfig: {
    // 自动扫描根目录下的文件夹生成侧边栏
    sidebar: generateSidebar({
      documentRootPath: "/",
      collapsed: false, // 默认展开菜单
      capitalizeFirst: true, // 文件夹名字首字母大写

      // ⚠️ 核心新增配置：支持深层子文件夹
      scanStartFolder: "/", // 从哪里开始扫描
      resolveAutoAnimatedFromFile: true,
      useFolderTitleFromIndexFile: false, // 如果子文件夹里有 index.md，优先用它里面的 # 标题作为左侧菜单名
      useFolderLinkFromIndexFile: true, // 点击子文件夹名字时，自动跳转到里面的 index.md

      // 排除掉系统文件夹和配置文件
      excludeFolders: ["node_modules", ".vitepress", "dist"],
      excludeFiles: ["package.json", "package-lock.json", "README.md"],
    }) as any,

    socialLinks: [{ icon: "github", link: "https://github.com" }],
  },
});
