/* 
 * _hjs = Hary Javascript Library
 * picktochart.com
 * love it
 */
(function (){    
    _hjs = function (param){
        return new Hary(param);
    };        
    var Hary = function (selector){                                
        
        this.length = 1;
                
        var node;
        if ( typeof (selector) !== 'object' ) {
            
            node = document.querySelectorAll( selector );
            
            this.length = node.length;
            
        }else{
            node = selector;
        }                 
        
        this.name = '_hjs is Hary Javascript Library';
        this.version = 'Just begining at version 0.0.0 :P LOL ';                                                                                                                               
        for (i = 0; i < this.length ; i++) {
            this[i] = node[i];            
        }                           
        this.NS="http://www.w3.org/2000/svg";                                               
        return this;        
    };      
    
    
    //prototype
    Hary.fn = Hary.prototype = {  
        val:function(){                                           
            if ( this.length <1) {
                return null;
            }            
            for (i = 0; i < this.length; i++) {
                if ( typeof arguments[0] === 'string') {
                    this[i].value = arguments[0];
                }else{
                    return this[i].value;
                }                
            }         
            
        },
        extend:function(obj1,obj2){
            obj = {};            
            for ( var i in obj1 ) {
                obj[i] = obj1[i];
            }
            for (var i in obj2 ){
                obj[i] = obj2[i];
            }
            return obj;
        },
        event : function(eventname,fn,capture){            
            c = typeof capture !== 'undefined' ? false : true;
            for (i = 0; i < this.length; i++) {
                this[i].addEventListener(eventname,fn,c);
            }                     
            return this;
        },
            
        eventRemove : function(eventname,fn,capture){            
            c = typeof capture !== 'undefined' ? false : true;
            for (i = 0; i < this.length; i++) {
                this[i].removeEventListener(eventname,fn,c);
            }                     
            return this;
        },            
        click : function (hs){            
            for (i = 0; i < this.length; i++) {
                this[i].addEventListener('click',function (position){ 
                     hs(this,position);
                },false);
            }         
            return this;
        },                
        remove: function() {
            for (var i = 0; i < this.length; i++) {
                this[i].parentNode.removeChild(this[i]);
            }
            return this;
        },
        append : function(a){
            for (var i = 0; i < this.length; i++) {
                this[i].appendChild(a);
            }
            return this;
        },html : function(){
            var len = arguments.length;
            for (var i = 0; i < this.length; i++) {
                if (len === 1) {
                    this[i].innerHTML = arguments[0];
                }else{
                    this[i].innerHTML;
                }
                    
            }     
            return this;
            
        },css:function(){
            //console.log('css method initialized...');            
                var arg = arguments[0];                                
                for (var i = 0; i < this.length; i++) {                    
                    if( typeof arguments[0] ==='object'){
                        for (var p in arg ){
                            if( arg.hasOwnProperty(p)){                            
                                this[i].style[p] = arg[p];
                            }
                        }
                    }else{
                        
                        return this[i].style[arg].replace('px','');
                    }
                }            
            return this;
        },attr:function(){                        
            for (var i = 0; i < this.length; i++) {                                                                
                if( arguments.length > 2 ){
                    this[i].setAttribute( arguments[0] , arguments[1] );
                }else{
                    return this[i].getAttribute(arguments[0]);
                }
            }
            return this;
        },randomColor:function(){
            var color = '';
            var character = 'ABCDEF3456789'; //i do not need black so i remove 0
            for (var i = 0; i < 6; i++) {
                color += character.charAt(Math.floor(Math.random()* character.length));
            }
            return "#"+color;
        },  
         //default svg       
        svgCreate : function (name,width,height,hs){            
            
            var svg=document.createElementNS(this.NS,"svg");
            svg.setAttributeNS(null,'id',name);
            svg.setAttributeNS(null,'width',width);
            svg.setAttributeNS(null,'height',height);
            svg.setAttributeNS(null,'class','chart');
            svg.setAttributeNS(null,'style',"z-index:0;top:0px;left:0px;background:"+this.randomColor());
            for (var i = 0; i < this.length; i++) {
                this.append( svg );
            }            
            return this;
        },
        svgTemplate:function(){

                        
            this.append(this.svgCircle({
                'comment': 'ini untuk titik X',
                cx:'90%',
                cy:'90%',
                r:2,
                fill:'black'
            }));            
            this.append(this.svgCircle({
                'comment': 'ini untuk titik Y',
                cx:20,
                cy:20,
                r:2,
                fill:'black'
            }));            
            this.append(this.svgLine({
                'comment': 'ini untuk garis X ',
                x1:20,
                y1:'90%',
                x2:'90%',
                y2:'90%',
                stroke:'#000000',
                'stroke-width':1
            }));            
            this.append(this.svgLine({
                'comment': 'ini untuk garis Y',
                x1:20,
                y1:20,
                x2:20,
                y2:'90%',
                stroke:'#000000',
                'stroke-width':1
            }));                        
            this.append(this.svgCircle({
                'comment': 'titik Zero',
                r:3,
                cx:20,
                cy:'90%',                
                stroke:'#000000',
                fill:'black'                
            }));                        
            
            return this;
        },
                
        svgLine:function(){
            var cfg = {
                x1:10,
                y1:190,
                x2:390,
                y2:190,
                stroke:'#000000',
                'stroke-width':1,
                'class':'',
                'id':''
            };
            if (typeof arguments[0] === 'object') {
                var cfg = this.extend(cfg,arguments[0]);
            }            
            var SVGObj= document.createElementNS(this.NS,"line"); ;
                SVGObj.setAttributeNS(null,"class",cfg['class']);    
                SVGObj.setAttributeNS(null,"id",cfg.id);    
                SVGObj.setAttributeNS(null,"x1",cfg.x1);    
                SVGObj.setAttributeNS(null,"y1",cfg.y1);    
                SVGObj.setAttributeNS(null,"x2",cfg.x2); 
                SVGObj.setAttributeNS(null,"y2",cfg.y2); 
                SVGObj.setAttributeNS(null,"stroke",cfg.stroke); 
                SVGObj.setAttributeNS(null,"stroke-width",cfg['stroke-width']);
            return SVGObj;    
        },
                
                
        svgCircle:function(){
            var cfg = {
                cy:10,
                cx:10,
                r:2,                                
                fill:'blue',
                class:'',
                id:''
            };
            if (typeof arguments[0] === 'object') {
                var cfg = this.extend(cfg,arguments[0]);
            }            
            var SVGObj= document.createElementNS(this.NS,"circle"); ;
                SVGObj.setAttributeNS(null,"cy",cfg.cy);    
                SVGObj.setAttributeNS(null,"cx",cfg.cx);    
                SVGObj.setAttributeNS(null,"r",cfg.r); 
                SVGObj.setAttributeNS(null,"fill",cfg.fill);                     
                SVGObj.setAttributeNS(null,"fill",cfg.fill);
                SVGObj.setAttributeNS(null,"class",cfg['class']);
                SVGObj.setAttributeNS(null,"id",cfg.id);
            return SVGObj;
    
        },
                
                
                
        svgRect:function(){
            var cfg = {
                width:10,
                height:10,
                x:10,
                y:10,
                rx:0,
                ry:0,
                fill:'',
                stroke:'black',
                'stroke-width':1,
                class:'',
                id:''
            };
            if (typeof arguments[0] === 'object') {
                var cfg = this.extend(cfg,arguments[0]);
            }            
            var SVGObj= document.createElementNS(this.NS,"rect"); ;
                SVGObj.setAttributeNS(null,"width",cfg.width);
                SVGObj.setAttributeNS(null,"height",cfg.height);    
                SVGObj.setAttributeNS(null,"x",cfg.x); 
                SVGObj.setAttributeNS(null,"y",cfg.y);                 
                SVGObj.setAttributeNS(null,"rx",cfg.rx);                 
                SVGObj.setAttributeNS(null,"ry",cfg.ry);                 
                SVGObj.setAttributeNS(null,"fill",cfg.fill);
                SVGObj.setAttributeNS(null,"class",cfg['class']);
                SVGObj.setAttributeNS(null,"id",cfg.id);
                SVGObj.setAttributeNS(null,"stroke",cfg.stroke);
                SVGObj.setAttributeNS(null,"stroke-width",cfg['stroke-width']);
            return SVGObj;
    
        },
                
        svgText:function(){            
            var cfg = {
                x:10,
                y:10,
                'font-size':"12",
                text:''  ,                              
                fill:'black',
                class:'',
                id:''
            };
            if (typeof arguments[0] === 'object') {
                var cfg = this.extend(cfg,arguments[0]);
            }            
            var SVGObj= document.createElementNS(this.NS,"text"); ;
                SVGObj.setAttributeNS(null,"y",cfg.y);    
                SVGObj.setAttributeNS(null,"x",cfg.x);                    
                SVGObj.setAttributeNS(null,"font-size",cfg['font-size']);                    
                SVGObj.setAttributeNS(null,"fill",cfg.fill);                                     
                SVGObj.setAttributeNS(null,"class",cfg['class']);
                SVGObj.setAttributeNS(null,"id",cfg.id);
                SVGObj.textContent = cfg.text;
            return SVGObj;
    
        },
                
        svgAddData : function (){            
    
            //order data bar
            var node = this[0];
            var founded = 1;
            for (var i = 0; i < node.children.length; i++) {
                if( node.children[i].nodeName === 'rect' ){
                    founded += 1;
                }
            }                                                
            var savedata = {            
            variable: 'undifined',
            varvalue: 100,
            posX: 15 * parseFloat( founded )            
            };
            
            var data = this.extend(savedata,arguments[0]);
                        
            //make it percentage 100%
            var maxData = 80;            
            var realheight = (data.varvalue/100)*maxData;
            var realY = (100-10-10) - (realheight-10);
            this.append( this. svgRect({
                'width' : '10%',
                'height' : realheight +'%',//variable
                'x': data.posX+'%', //variable
                'y': realY+'%', //variable
                'fill' : 'url(#chelsea)',
                'stroke' : 'black',
                'stroke-width':'1',
                'class':'data'
            }));
            
            var realTextY = 96;
            this.append( this.svgText({
              'x' :   data.posX+'%',
              'y': realTextY+'%', //variable
              text: data.variable
            }));
            return this;
            
        }
        ,editMode:function(){
                                    
            var ob = this;
            var id = ob.attr('id');                                                
            
            //dbl click to editmode
            this.event('dblclick',function(){    
                log('Chart Name: ' + id);                
                _hjs(ob).css({'border':'2px dashed #35698f '});
                _hjs('#'+id).editResize();                                                               
                _hjs('#'+id).editDrag();   
                _hjs('.data').click(function(){
                    console.log('clicked');
                });
                
            },false);                                                      
                                       
            return this;
            
        },editDrag:function(){                                    
                                               
            var ob = this;
            var id = ob.attr('id');                                                                        
            var elem = ob[0];
            this.css({'z-index':1});           
            var diffposY,diffposX;                                                                                     
            
            //append            
            
            var moveButton = _hjs('svg#'+ this.attr('id') +' .editmode.dragable');
            if ( moveButton.length > 0 ) {                 
                initDrag();
            }                        
            
            function initDrag(){
                moveButton.event('mousedown',drag,false);                
            }            
            function stopDrag(){                                
                moveButton.eventRemove('mousedown',drag,false);                
            }            
            function drag(e){
                
                var offsetX = elem.style.left.replace('px','');
                var offsetY  = elem.style.top.replace('px','');                                
                diffposX = e.clientX - offsetX;
                diffposY = e.clientY - offsetY;                                                
                
                document.documentElement.addEventListener('mousemove',moveitem,false);                  
                
                startmouseup();                
                function startmouseup(){
                    elem.addEventListener('mouseup',mouseup,false);                    
                }
                function stopmouseup(){                    
                    elem.removeEventListener('mouseup',mouseup,false);                    
                }
                function mouseup(){                    
                    log('Mouseup at x,y = '+e.clientX+','+e.clientY);
                    document.documentElement.removeEventListener('mousemove',moveitem,false);                    
                    stopmouseup();
                    ob.css({'border':'none',cursor:'auto'});                    
                    _hjs('svg#'+ ob.attr('id') +' .editmode').remove();
                    
                }                                
                stopDrag();

            }
                                                                                                          
            //geser
            var moveitem = function (e){                
                log('Mousemove to x,y = '+e.clientX+','+e.clientY);                
                var x = e.clientX - diffposX;
                var y = e.clientY - diffposY;                
                elem.style.top = y + 'px';
                elem.style.left = x + 'px';                            
            };                        
            
            return this;
        },
            
        editResize:function (){       
            
            var ob = this;
            
            var elem = ob[0];
            var diffposY,diffposX;  //init variable resize pos
            var widthX,heightY; //init variable width
            
            this.append(this.svgRect({
                'comment': 'ini untuk resize',
                width:15,
                height:15,
                ry:4,
                rx:4,
                x:elem.getAttributeNS(null,'width')- 15,
                y:elem.getAttributeNS(null,'height')- 15,
                fill:'red'
                ,'class':'editmode resizeable'
            }));       
            this.append(this.svgRect({
                'comment': 'ini untuk Dragable',
                width:15,
                height:15,
                x: parseFloat( elem.getAttributeNS(null,'width') )-15,
                y:0,
                ry:4,
                rx:4,
                fill:'blue'
                ,'class':'editmode dragable'
            })); 
            
            var resizeButton = _hjs('svg#'+ this.attr('id') +' .editmode.resizeable');
            var dragButton = _hjs('svg#'+ this.attr('id') +' .editmode.dragable');            
            
            
            if (resizeButton.length>0) {                 
                initResize();                
            }
            
            function initResize(){                                
                resizeButton.event('mousedown',resize,false);
            }            
            function stopResize(){                         
                resizeButton.eventRemove('mousedown',resize,false);                                
            };
            function resize(e){  
                
                var x = this.getAttributeNS(null,'x');
                var y = this.getAttributeNS(null,'y');                
                diffposX = e.clientX - parseFloat(x);
                diffposY = e.clientY - parseFloat(y);
                
                var width = elem.getAttributeNS(null,'width');
                var height = elem.getAttributeNS(null,'height');
                
                widthX = e.clientX - parseFloat(width) ;
                heightY = e.clientY - parseFloat(height);
                                        
                document.documentElement.addEventListener('mousemove',actionResize,false);                
                
                initmouseUP();
                function initmouseUP(){
                    document.documentElement.addEventListener('mouseup',mouseUPaction,false);
                }
                function mouseUPstop(){
                    document.documentElement.removeEventListener('mouseup',mouseUPaction,false);                        
                }
                
                function mouseUPaction(){
                    document.documentElement.removeEventListener('mousemove',actionResize,false);                    
                    mouseUPstop();                    
                    ob.css({'border':'none',cursor:'auto'});
                    _hjs('svg#'+ ob.attr('id') +' .editmode').remove();
                    
                }
                stopResize();
                                
            };                                                            
            
            
            var actionResize = function (e){                                

                    log('Mousemove to x,y = '+e.clientX+','+e.clientY);                                

                    //move resize
                    var resizeBtn = resizeButton[0];
                    var dropX = e.clientX - diffposX;
                    var dropY = e.clientY - diffposY;
                    resizeBtn.setAttributeNS(null,'x',dropX);
                    resizeBtn.setAttributeNS(null,'y',dropY);
                    dragButton[0].setAttributeNS(null,'x',dropX);
                    //dragButton[0].setAttributeNS(null,'y',dropY); no need Y cor

                    var finalWidth  = e.clientX - widthX;
                    var finalHeight = e.clientY - heightY;
                    
                    elem.setAttributeNS(null,'width',finalWidth);
                    elem.setAttributeNS(null,'height',finalHeight);
            };  
            
            
            true;
        }
        
        
        
    };               
    
        
    if ( !window._hjs) {
        window._hjs = _hjs;
    };        
    
    
                      

})();



(function(){
    log = function (e){
        _hjs("#log").html(e);
    };  
    if( !window.log ){
        window.log = log;
    }
    
    
})();