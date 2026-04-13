// 等待页面加载完成后再执行代码
document.addEventListener('DOMContentLoaded', function() {
    // 1. 获取所有的标签元素
    const tabItems = document.querySelectorAll('.tab-item');
    // 2. 获取所有的内容面板元素
    const contentPanels = document.querySelectorAll('.content-panel');

    // 3. 给每个标签添加点击事件
    tabItems.forEach(function(tab) {
        tab.addEventListener('click', function() {
            // 第一步：清除所有标签的active状态
            tabItems.forEach(function(item) {
                item.classList.remove('active');
            });
            // 第二步：给当前点击的标签加上active状态
            this.classList.add('active');

            // 第三步：获取当前点击标签对应的内容面板ID
            const targetId = this.getAttribute('data-target');
            
            // 第四步：隐藏所有内容面板
            contentPanels.forEach(function(panel) {
                panel.classList.remove('active');
            });
            // 第五步：显示对应的内容面板
            document.getElementById(targetId).classList.add('active');
        });
    });
});