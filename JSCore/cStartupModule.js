// -------------------------------------------------------------------------------------------------
//	cStartupModule class
//
//
//
// -------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------
//	constructor
// -------------------------------------------------------------------------------------------------
function cStartupModule(
)
{

}

// -------------------------------------------------------------------------------------------------
//	singleton
// -------------------------------------------------------------------------------------------------
cStartupModule.instance = null;
cStartupModule.fGetInstance = function(
)
{

	return cStartupModule.instance ? cStartupModule.instance : (cStartupModule.instance = new cStartupModule());
}

// -------------------------------------------------------------------------------------------------
//	fInit
// -------------------------------------------------------------------------------------------------
cStartupModule.prototype.fInit = function(
)
{
	var i, o;
	//~ alert("*** cStartupModule, fInit()");
}
