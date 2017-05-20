window.onload = function () 
{   
	// 1 特色功能模块
	// 1.1 获取元素
	var first = document.getElementsByClassName('first')[0].children;
	// console.log(first);
	var second = document.getElementsByClassName('second')[0].children;
	var third = document.getElementsByClassName('third')[0].children;
    
    // 1.2背景图
	var f_bg = ["img/gnico_1.png","img/gnico_2.png","img/gnico_3.png","img/gnico_4.png"];
	var s_bg = ["img/gnico_5.png","img/gnico_6.png","img/gnico_7.png","img/gnico_8.png"];
	var t_bg = ["img/gnico_9.png","img/gnico_10.png","img/gnico_11.png","img/gnico_12.png"];
    
    // 1.3添加背景图
	for (var i = 0; i < first.length; i++) 
	{
		first[i].children[0].style.backgroundImage = "url(" + f_bg[i] + ")";
		second[i].children[0].style.backgroundImage = "url(" + s_bg[i] + ")";
		third[i].children[0].style.backgroundImage = "url(" + t_bg[i] + ")";
	}

	// 1.4 换背景
	// 1.4.1 图片
	var ex_f_bg = ["img/gnico_01.png","img/gnico_02.png","img/gnico_03.png","img/gnico_04.png"];
	var ex_s_bg = ["img/gnico_05.png","img/gnico_06.png","img/gnico_07.png","img/gnico_08.png"];
	var ex_t_bg = ["img/gnico_09.png","img/gnico_101.png","img/gnico_111.png","img/gnico_121.png"];


	for (var i = 0; i < first.length; i++) 
	{   
		// 1.4.2 换
        /*第一行 第一摸块*/
        first[i].index = i;
        first[i].onmouseover = function () 
		{   
			this.children[0].style.backgroundImage = "url(" + ex_f_bg[this.index] + ")";				
		}
        
        // 第二行
		second[i].index = i;
        second[i].onmouseover = function () 
		{   
			this.children[0].style.backgroundImage = "url(" + ex_s_bg[this.index] + ")";				
		}
        
        // 第三行
		third[i].index = i;
        third[i].onmouseover = function () 
		{   
			this.children[0].style.backgroundImage = "url(" + ex_t_bg[this.index] + ")";				
		}

		// 1.4.3恢复 背景
		// 第一行
		first[i].onmouseout = function () 
		{   
			this.children[0].style.backgroundImage = "url(" + f_bg[this.index] + ")";				
		}
        
        // 第二行
		second[i].onmouseout = function () 
		{   
			this.children[0].style.backgroundImage = "url(" + s_bg[this.index] + ")";				
		}
        
        // 第三行
		third[i].onmouseout = function () 
		{   
			this.children[0].style.backgroundImage = "url(" + t_bg[this.index] + ")";				
		}
	}
};