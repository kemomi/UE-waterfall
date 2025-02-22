
// 动态计算列数与位置
function calculateLayout() {
    const containerWidth = container.offsetWidth;
    const minColumnWidth = 300; 
    const columns = Math.floor(containerWidth / minColumnWidth);
    // 使用ResizeObserver监听变化:cite[6]
  }