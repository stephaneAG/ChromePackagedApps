/* 
*  neatFramework: chrome devtools Module
*
*  neatFramework_chrome_devtools_MODULE.js - A javascript module file holding a scoped/closured/contained implementation of some of the Chrome devtools API
*  
*  by StephaneAG - 2014
 */

// Self_executing_Anonymous Fcn ( providing closure & preventing polluting the global namespace (..) )
// R: 'barebone syntax' : (function(){})(); 
(function(theWindow, theDocument, theUndefined){
  var _undef; // an undefined var
  var _undefined = ''; // another "undefined" var
  // some 'closures' tests ..
  //console.log('[ neatFramework_serial_console_MODULE.js ] theWindow == window ? : ' + ( theWindow == window ) ); // true
  //console.log('[ neatFramework_serial_console_MODULE.js ] theDocument == document ? : ' + ( theDocument == document ) ); // true
  //console.log('[ neatFramework_serial_console_MODULE.js ] theUndefined == "undefined" ? : ' + ( theUndefined == undef ) ); // true
  
  /* ************************************************************************************************************************************************ */
  // our actual 'Module' code .
  
  /*  ---- module API ----
  *
  *   The "app_logic.js" file ( or the "main.js" file if the app logic is handled in its own module ) has the following functions available:
  *
  *   - consoleLog()              --> is used to log some stuff on the javascript console with a custom CSS applied 
  */

  // first, we define the closure/scope of our module
  /* ---------- MODULE CLOSURE ---------- */
  var chrome_devtools_module = {}; // empty obj
  /* ------------------------------------ */

  /* -- module API functions -- */

  /* -------------------------- */

  // fcn that ...
  var _helloWorld = function(){ console.log("Hello world !"); };
  var helloWorld2 = function(){ console.log("Hello world2 !"); };
  var log_module_version = function(){ console.log(_module_version) };
    
  /* ------------------------------------- */  

  /* ---- ChromeAPI-based functions ---- */
  
  var consoleLog = function(messageStr,cssStr){
    console.log("%c"+messageStr, cssStr);
  };

  /* ----------------------------------- */

  /* --- ChromeAPI callback functions -- */
  /* ----------------------------------- */

  /* ********************************************************************* */

  // a Fcn that handles the 'initial setup', at Module init (..)
  function _initial_setup_module_init(){
    //initial setup config of our module
  }

  /* ************************************************************************************************************************************************ */
    
  // the module test variable
  var _module_version = '[ neatFramework_chrome_devtools_MODULE.js v0.1a ]';
		
  // framework scope
  var neatFramework = theWindow.neatFramework || {}; // if 'neatFramework' is not defined, we make it equal to an empty object
  theWindow.neatFramework = neatFramework; // and then use it as the window.neatFramework object (..)
		
  // the Module's init Fcn
  function _initModule(){
    //console.log('[ neatFramework_chrome_devtools_MODULE.js ] : ' + 'initiating module ..'); // debug message > module is registered
    consoleLog('[ neatFramework_chrome_devtools_MODULE.js ] : ' + 'initiating module ..', 'color: #1DCFD8;');
    _initial_setup_module_init(); // actually init the module's 'initial setup' config/params (..)
  }
		
  // make available some fcns outside of the 'Self Executing Anonymous Function' of the module closure ..
  chrome_devtools_module.module_version = _module_version; // attach it not directly to 'theWindow' ( > wich is defined 'upon' window (..) ), but instead to the module closure
  chrome_devtools_module.log_module_version = log_module_version; // for sure 'll be practical ( see new _checkModule() in app_logic.js )
  // "attach" our function not directly to the "neatFramework" object this time, but to the "closure"(/empty object) of the current module, called "callbackFunctions_module"
  chrome_devtools_module.helloWorld = _helloWorld; // note: the names of the function inside the file and the one "attached" ( callable from outside the current scope ) can be different ( .. )
  chrome_devtools_module.helloWorld2 = helloWorld2; // another test

  /* -- tiny API -- */
  
  // API functions
  chrome_devtools_module.consoleLog = consoleLog;

  /* -------------- */

  neatFramework.chrome_devtools = chrome_devtools_module; // note: nearly the same as above, but "one parent level up", to add our module to the "neatFramework" object ;)  


  /* ************************************************************************************************************************************************ */
  // actually init the module ..
  _initModule();
  /* ************************************************************************************************************************************************ */
		
})(window, document);
