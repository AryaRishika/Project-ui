/**
 * Created by Arya on 7/1/2017.
 */
'use strict';
var button=document.getElementById('popup');
var f=document.getElementById('p_form');
var body=document.getElementById('body');
var cl=document.getElementById('closef');
var cl1=document.getElementById('close1f');
var signin=document.getElementById('signin');
var f1=document.getElementById('p1_form');
var count=0;
imgchange();


button.onclick = function () {

    f.style['display']='block';
    f.style['background-color']=['white'];

};
cl.onclick = function () {
    f.style['display']='none';

};
signin.onclick = function () {

    f1.style['display']='block';
    f1.style['background-color']=['white'];
};
cl1.onclick = function () {
    f1.style['display']='none';
};
function imgchange()
{
    setInterval(image(),1000);

};
function image()
{
    var i=document.getElementById('img1');
    console.log(count);
    if(count%2==0)
    {
        console.log(i.style['src']);
        i.style['src']=['https://luna1.co/dabe5c.png'];
        count++;
    }
    else if(count%3==0)
    {
        console.log("hiii");
        i.style['src']=['https://luna1.co/8c297e.png'];
        count++;
    }
    else {
        i.style['src']=['https://luna1.co/8e6f30.png'];
        count++;
    }
};