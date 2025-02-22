
// 使用Intersection Observer实现懒加载
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadContent(entry.target.dataset.page);
      }
    });
  });