_hjs("#newchart").event('click',function (){
    
    var namechart = 'chart'+chartOrder;
    var idchart = '#'+namechart;    
    var width  = 400; //initial width
    var height = 200; //initial height
    log('New Chart Created : '+namechart);
    _hjs('#workspace').svgCreate(namechart,width,height);
    _hjs(idchart).svgTemplate();            
    _hjs(idchart).editMode();                            
    
});


//delete
_hjs("#delete").event('click',function(){
    var name = prompt('Enter cart name will be deleted?');        
    if(_hjs("#"+name).length === 0)
        alert('Opsss...!!! Your chart does not exists;');
    
    _hjs("#"+name).remove();
    
});

_hjs("#newdata").event('click',function(){    
    
    /*start tmp    
    var savedata = {
            chartname: 'chart1',
            variable: 'Chelsea',
            varvalue: 100            
        };
    _hjs('#'+savedata.chartname).svgAddData(savedata);    
    return true;
    //end tmp */
    

    _hjs('#frameform').css({'display':"block"});    
    _hjs('#closeframe').click(function(){
        _hjs('#frameform').css({'display':'none'});
    });
    
    //savebutton
    _hjs('#clicksubmit').click(function(){                        
        
        var savedata = {
            chartname: _hjs('#chartname').val(),
            variable: _hjs('#variable').val(),
            varvalue: _hjs('#varvalue').val()
        };
        _hjs('#'+savedata.chartname).svgAddData(savedata);                
        _hjs('#chartname').val('');
        _hjs('#variable').val('');
        _hjs('#varvalue').val('');    
        
        _hjs('#frameform').css({'display':'none'});        
    });
    
});


// initialize chart edit 
_hjs('#liga').editMode();
_hjs('#picktogram').editMode();
