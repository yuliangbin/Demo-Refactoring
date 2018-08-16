var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/1.jpg',
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/2.jpg',
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/3.jpg',
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/4.jpg',      
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/5.jpg',
        }
    ]
}

var controler = {
    init: function() {
        model.currentCat = model.cats[0];
        catView.init();
        listView.init();
    },
    //获取全部的猫
    getCats: function() {
        return model.cats;
    },
    //获取当前显示的猫
    getCurrentCat: function() {
        return model.currentCat;
    },

    //设置当前被点击的猫
    setCurrentCat: function(cat) {
        return model.currentCat = cat;
    },

    addCount: function() {
        model.currentCat.clickCount++;
        catView.render();
    } 
}

var catView = {
    init: function() {
        //储存DOM元素，方便后续操作
        this.cat = document.getElementById('cat');
        this.catName = document.getElementById('cat-name');
        this.catCount = document.getElementById('cat-count');
        this.catImg = document.getElementById('cat-img');
        this.catImg.addEventListener('click',function() {
            controler.addCount();
        },false);
        this.render();
    },

    render: function() {
        let currentCat = controler.getCurrentCat();
        this.catName.textContent = currentCat.name;
        this.catCount.textContent = currentCat.clickCount;
        this.catImg.src = './' + currentCat.imgSrc;
    }
}

var listView = {
    init: function() {
        this.catList = document.getElementById('cat-list');
        this.render();
    },

    render: function() {
        let cats = controler.getCats();
        let fragment = document.createDocumentFragment('ul');
        cats.forEach((item,index) => {
            let li = document.createElement('li');
            li.textContent = item.name;
            li.setAttribute('class','item');
            li.addEventListener('click',function() {
                controler.setCurrentCat(item);
                catView.render();
            })
            fragment.appendChild(li);
        })
        this.catList.appendChild(fragment);
        fragment = null;
    }
}

controler.init();