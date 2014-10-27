// Created by iWeb 3.0.4 local-build-20121130

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,128),url:'Excellent_Links_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Excellent_Links_files/stroke_1.png'},{rect:new IWRect(5,-5,314,10),url:'Excellent_Links_files/stroke_2.png'},{rect:new IWRect(319,-5,11,10),url:'Excellent_Links_files/stroke_3.png'},{rect:new IWRect(319,5,11,128),url:'Excellent_Links_files/stroke_4.png'},{rect:new IWRect(319,133,11,10),url:'Excellent_Links_files/stroke_5.png'},{rect:new IWRect(5,133,314,10),url:'Excellent_Links_files/stroke_6.png'},{rect:new IWRect(-5,133,10,10),url:'Excellent_Links_files/stroke_7.png'}],new IWSize(325,138))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Excellent_Links_files/Excellent_LinksMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
