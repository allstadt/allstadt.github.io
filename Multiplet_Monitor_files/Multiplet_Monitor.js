// Created by iWeb 3.0.4 local-build-20140107

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,424),url:'Multiplet_Monitor_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Multiplet_Monitor_files/stroke_1.png'},{rect:new IWRect(5,-5,430,10),url:'Multiplet_Monitor_files/stroke_2.png'},{rect:new IWRect(435,-5,11,10),url:'Multiplet_Monitor_files/stroke_3.png'},{rect:new IWRect(435,5,11,424),url:'Multiplet_Monitor_files/stroke_4.png'},{rect:new IWRect(435,429,11,10),url:'Multiplet_Monitor_files/stroke_5.png'},{rect:new IWRect(5,429,430,10),url:'Multiplet_Monitor_files/stroke_6.png'},{rect:new IWRect(-5,429,10,10),url:'Multiplet_Monitor_files/stroke_7.png'}],new IWSize(440,434))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Multiplet_Monitor_files/Multiplet_MonitorMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
