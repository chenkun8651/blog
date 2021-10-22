# CSS position元素定位属性　　

>关于css的位置属性其实在排版布局常常用，由此也衍生很多的功能，由于有个需求需要用到没有接触过的粘性定位，再学习了一番总结一下关于css的position属性的讲解，写了相关几个列子。

## position的定义和语法

定义：指定一个元素在文档中定位方式，可以通过left，right，top，bottom属性来调整元素的位置。

```css
    /* 基础用法 */
    div {
      position: static;
    }
```

可选赋值：

static：默认值。元素根据正常的文档流进行排列，设置left，right，top，bottom，z-index值无效。
relative：生成相对定位元素。元素根据正常的文档流进行排列，可以设置left，right，top，bottom调整在文档流中的 位置，设置z-index显示层级。table的部分元素不会生效。

absolute：生成绝对定位元素。元素会被移除出正常的文档流，绝对定位元素会相对距离最近非static定位的元素进行偏移。设置left，right，top，bottom是对最近非static元素位置方向和偏移距离，设置z-index显示层级。

fixed：生成固定位置元素。元素会被移除出正常的文档流，相对浏览器视窗窗口进行固定定位，设置left，right，top，bottom规定相对浏览器视窗的位置。设置z-index显示层级。

sticky：生成粘性定位元素。相对最近的滚动祖先元素和块级祖先元素进行偏移，元素在跨越特定阈值前表现为相对定位（relative），跨越阈值后表现为固定定位（fixed）。left，right，top，bottom是粘性定位的阈值。

## 示例

### static、relative示例

static元素正常的文档流排列，设置了left，z-index但是没有作用。
relative元素仍然排在正常文档流元素的后面，但是可以设置top，z-index值，top这些值决定了他与其他元素的位置，z-index决定了显示的层级。

HTML代码

```html
<body>
  <div class="static">
    static
  </div>
  <div class="relative">
    relative
  </div>
</body>
```

CSS代码

```css
  .static {
    width: 100px;
    height: 100px;
    left: 10px;
    z-index: 99;
    background-color: slateblue;
  }

  .relative {
    width: 100px;
    height: 100px;
    position: relative;
    top: -50px;
    left: 50px;
    z-index: 98;
    background-color: skyblue;
  }
```

### fixed示例

fixed可以将元素固定浏览器窗口的任意位置，在实际开发中有多种用途，比如顶部导航、返回顶部的按钮等功能。下面的例子是一个返回顶部按钮的功能。

HTML代码

```html
<body>
    <header>
      <h1>震惊!点击箭头可以跳转上来</h1>
    </header>
    <div class="text">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facilis
        tenetur veritatis quos consequuntur Lorem 数字
        可以自动填充文本，数字表示填充的文本单词的数量
      </p>
    </div>
    <div class="fixed" id="fixed">
      <?xml version="1.0" standalone="no"?>
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      <svg
        t="1584504540391"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1671"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="50"
        height="80"
      >
        <defs>
          <style type="text/css"></style>
        </defs>
        <path
          d="M509.44 267.52C504.32 262.4 498.56 259.84 492.8 258.56 488.96 256.64 484.48 256 480 256S471.04 256.64 467.2 258.56C461.44 259.84 455.68 262.4 450.56 267.52l-313.6 313.6c-14.08 14.08-14.08 35.84 0 49.92 14.08 14.08 35.84 14.08 49.92 0L448 369.92l0 558.08C448 945.92 462.08 960 480 960S512 945.92 512 928L512 369.92l261.12 261.12c14.08 14.08 35.84 14.08 49.92 0 14.08-14.08 14.08-35.84 0-49.92L509.44 267.52zM864 128l-768 0C78.08 128 64 142.08 64 160 64 177.92 78.08 192 96 192l768 0C881.92 192 896 177.92 896 160 896 142.08 881.92 128 864 128z"
          p-id="1672"
        >
      </path>
      </svg>
    </div>
</body>
```

CSS代码

```css
  h1 {
    text-align: center;
  }

  .text {
    width: 80%;
    margin: 0 auto;
  }

  .fixed {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
```

JS代码

```js
  const fixed = document.getElementById('fixed');
  fixed.addEventListener('click', () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
```

### sticky示例

sticky粘性定位给人一种结合了relative和fixed效果的感觉，sticky元素在没有抵达设定的阈值之前，效果类似于relative元素，在普通文档流正常排列；当元素跨过这个阈值后，元素的表现形式又和fixed元素相似，形成固定定位。由于必须要设置阈值才能生效，所以必须设定left，right，top，bottom四个阈值其中之一。如果没有阈值，和relative元素效果一致。
这是一个实验性质的属性，现在的浏览器中并没有太好的兼容性，使用前需要谨慎。

HTML代码

```html
<body>
  <div>
    <div class="sticky">
      A
    </div>
    <div class="name-item">阿福</div>
    <div class="name-item">阿虎</div>
    <div class="name-item">阿里云</div>
  </div>
  <div>
    <div class="sticky">
      B
    </div>
    <div class="name-item">包老师</div>
    <div class="name-item">爸</div>
    <div class="name-item">必须</div>
    <div class="name-item">百度</div>
  </div>
  <div>
    <div class="sticky">
      C
    </div>
    <div class="name-item">常威</div>
    <div class="name-item">蝉</div>
    <div class="name-item">曹操</div>
    <div class="name-item">陈某</div>
  </div>
  <div>
    <div class="sticky">
      T
    </div>
    <div class="name-item">腾讯</div>
  </div>
</body>
```

CSS代码

```css
  .sticky {
    width: 100%;
    height: 30px;
    position: sticky;
    background-color: tomato;
    top: 0px;
  }

  .name-item {
    height: 20px;
    padding: 5px;
    border-bottom: 1px solid grey;
  }
```

>本文内容学习参考来自
[MDN：position基础讲解]<https://developer.mozilla.org/zh-CN/docs/Web/CSS/position>
[sticky实际使用详解]<https://www.cnblogs.com/coco1s/p/6402723.html>
