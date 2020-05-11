var OriginTitile=document.title;
 var st;
 document.addEventListener('visibilitychange',function(){
 if(document.hidden){
 document.title="(つェ⊂)找不到我";
 clearTimeout(st);
 console.log('hide');
 }else{
 document.title='(*´∇｀*)🎉梨花町の肾兄さん🎉';
 console.log('show');
 console.log('endChange=');
 }
 });
