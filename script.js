const insert= document.querySelector('#insert')
window.addEventListener('keydown',function(e){
insert.innerHTML=`
<div id="color">
<table>
<tr>
<th>key</th>
<th>keycode</th>
<th>code</th>
</tr>
<tr>
<td>${e.key==='' ? 'space':e.key}</td>
<td>${e.keyCode}</td>
<td>${e.Code}</td>
</tr>
</table>
</div>
`;
});