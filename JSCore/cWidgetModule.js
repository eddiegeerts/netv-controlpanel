// -------------------------------------------------------------------------------------------------
//	cWidgetModule class
//
//
//
// -------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------
//	constructor
// -------------------------------------------------------------------------------------------------
function cWidgetModule(
)
{

}

// -------------------------------------------------------------------------------------------------
//	singleton
// -------------------------------------------------------------------------------------------------
cWidgetModule.instance = null;
cWidgetModule.fGetInstance = function(
)
{

	return cWidgetModule.instance ? cWidgetModule.instance : (cWidgetModule.instance = new cWidgetModule());
}

// -------------------------------------------------------------------------------------------------
//	fInit
// -------------------------------------------------------------------------------------------------
cWidgetModule.prototype.fInit = function(
)
{
	var i, o;
	//~ alert("*** cWidgetModule, fInit()");
}
