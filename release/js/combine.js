define("combine",function(){}),define("one",[],function(){return{name:"one"}}),define("three",[],function(){return{name:"three"}}),define("two",["require","three"],function(e){var t=e("three");return console.log(t.name),{name:"two"}});