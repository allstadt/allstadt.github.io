// Created by iWeb 3.0.4 local-build-20140729

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,302),url:'Mount_Meager_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Mount_Meager_files/stroke_1.png'},{rect:new IWRect(5,-5,309,10),url:'Mount_Meager_files/stroke_2.png'},{rect:new IWRect(314,-5,10,10),url:'Mount_Meager_files/stroke_3.png'},{rect:new IWRect(314,5,10,302),url:'Mount_Meager_files/stroke_4.png'},{rect:new IWRect(314,307,10,10),url:'Mount_Meager_files/stroke_5.png'},{rect:new IWRect(5,307,309,10),url:'Mount_Meager_files/stroke_6.png'},{rect:new IWRect(-5,307,10,10),url:'Mount_Meager_files/stroke_7.png'}],new IWSize(319,312))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Mount_Meager_files/Mount_MeagerMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
