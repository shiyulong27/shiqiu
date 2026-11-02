// 仅补充41—43套的呈现位置；题号、答案和分值仍以原题库为准。
window.ORIGINAL_PAPER_INTERACTIONS = (() => {
  const result = {};
  const root = 'original-papers/';
  const target = (value,x,y,w=14,h=20) => ({value:String(value),x:x-w/2,y:y-h/2,w,h});
  const add = (paper,section,item,image,size,crop,targets,mark='○',multiple=false) => {
    result[`original-math-${paper}-${section}-${item}`] = {image:root+image,size,crop,targets,mark,multiple};
  };
  const xa = (item,file,size,targets,mark='√') => add(41,3,item,`math-xaut/${file}.png`,size,[0,0,...size],targets,mark);
  xa(1,'07',[223,163],[target('左',23,84,21,24),target('右',77,84,21,24)]);
  xa(2,'08',[865,1210],[target('左',21,87,30,22),target('右',76,87,30,22)]);
  xa(3,'09',[2298,1330],[target('1',93,14,12,24),target('2',93,49,12,24),target('3',93,86,12,24)]);
  xa(4,'10',[286,173],[target('1',90,16,16,24),target('2',90,50,16,24),target('3',90,83,16,24)]);
  const fruits=[target('核桃',21,88,10,20),target('草莓',45,88,10,20),target('梨',70,88,10,20)];
  xa(5,'11',[2736,1316],fruits);
  xa(6,'11',[2736,1316],fruits,'△');
  add(41,7,3,'math-xaut/22.png',[1897,388],[0,0,1897,388],[target('1',12,85,6,26),target('2',37,85,6,26),target('3',63,85,6,26),target('4',88,85,6,26)]);

  // 每个小题只显示自己的原图，剔除的第3幅图不进入作答区域。
  const numbers=[[1,3,5],[3,4,5],[4,6,7],[4,5,6],[8,7,6]];
  const crops=[[0,0,320,285],[320,0,320,285],[320,285,320,285],[0,570,320,285],[320,570,320,285]];
  numbers.forEach((values,i)=>add(42,1,i+1,'sz-7105/1.jpg',[640,855],crops[i],values.map((v,j)=>target(v,24+j*22,77,16,19))));
  const digits=[2,9,3,5,8,7].map((v,i)=>target(v,24+i*12,45,9,60));
  for(const i of [1,2])add(42,5,i,'sz-7105/4.jpg',[829,928],[0,0,829,115],digits,'○',true);
  const animals=[...Array.from({length:6},(_,i)=>target(i+1,11+i*16.2,24,13,38)),...Array.from({length:5},(_,i)=>target(i+7,11+i*16.7,77,13,38))];
  for(const i of [3,4,5])add(42,5,i,'sz-7105/4.jpg',[829,928],[0,360,829,320],animals,'○',true);

  add(43,'4-14',1,'yex-13019/20.jpg',[438,115],[0,0,438,115],[target('1',8,91,13,16),target('2',45,91,13,16),target('3',84,91,13,16)],'√');
  for(const [i,crop,ys,mark] of [[1,[0,0,300,126],[75,75,75],'√'],[2,[0,0,300,126],[75,75,75],'×'],[3,[320,0,292,126],[23,49,77],'√'],[4,[320,0,292,126],[23,49,77],'×']]) {
    const targets=ys.map((y,j)=>target(j+1,i<3?[19,48,79][j]:85,y,i<3?12:13,i<3?28:20));
    add(43,'4-16',i,'yex-13019/22.jpg',[612,126],crop,targets,mark);
  }
  return result;
})();
