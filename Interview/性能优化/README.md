# 前端性能优化

<img src="./性能优化.jpg" alt="image-20220908223019862" style="zoom:100%;" />

## 网络层面
    请求过程的优化      -HTTP请求优化
                            --构建工具性能调优
                            --GZIP压缩原理
                            --图片优化
    
    减少网络请求        -本地存储
                            --浏览器缓存机制
                            --离线缓存技术

## 渲染层面
    服务端渲染
    
    浏览器的渲染机制    -CSS性能方案    -JS性能方案
    
    DOM优化         -原理与基本思路  -时间循环与异步更新    -回流重绘
    
    首屏渲染提速：懒加载    事件防抖与节流

## 性能监测
        可视化工具  -Performance        -LightHouse
    
        W3C性能API




**页面加载性能：**首次访问时，应用展示出内容与达到可交互状态的速度。这通常会用 Google 所定义的一系列 Web 指标 (Web Vitals) 来进行衡量，如最大内容绘制 (Largest Contentful Paint，缩写为 LCP) 和首次输入延迟 (First Input Delay，缩写为 FID)。