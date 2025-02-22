
// 示例：按技术标签过滤
function filterContent(tag) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.display = card.dataset.tags.includes(tag) ? 'block' : 'none';
    });
    recalculateLayout(); // 重新布局:cite[7]
  }