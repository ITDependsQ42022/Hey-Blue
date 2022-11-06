
function ViewMgrSetSVGLocation(pageID, shapeID, pinX, pinY)
{
	doc = parent.frmDrawing.document;
	if (this.highlightDiv != null)
	{
		var shapeNode = GetSVGShape (pageID, shapeID);
		if (shapeNode != null)
		{
			if (g_svgDoc != null)
			{
				g_svgDoc.currentTranslate.x = g_svgOrigTranslateX;
				g_svgDoc.currentTranslate.y = g_svgOrigTranslateY;
				g_svgDoc.currentScale = g_svgOrigScale;
			}

			var origOpacityVal = "1";
			var origOpacityAttr = shapeNode.attributes.getNamedItem("origOpacityV11SAW");
			if (origOpacityAttr != null)
			{
				origOpacityVal = origOpacityAttr.nodeValue;
			}
			else
			{
				var opacityAttr = shapeNode.attributes.getNamedItem("opacity");
				if (opacityAttr != null)
				{
					origOpacityVal = opacityAttr.nodeValue;
				}

				var origOpacityAttr = g_svgDoc.parentNode.createAttribute("origOpacityV11SAW");
				if (origOpacityAttr != null)
				{
					origOpacityAttr.value = origOpacityVal;
					shapeNode.attributes.setNamedItem(origOpacityAttr);
				}
			}


			var strShowShapeFunc = "ShowShape (" + pageID + ", " + shapeID;

			setTimeout( strShowShapeFunc + ", '0')", 500 );
			setTimeout( strShowShapeFunc + ", " + origOpacityVal + ")", 1000 );
			setTimeout( strShowShapeFunc + ", '0')", 1500 );
            setTimeout( strShowShapeFunc + ", " + origOpacityVal + ")", 2000 );
		}
	}
}

function GetSVGShape (pageID, shapeID)
{
	var shapeNode = null;

	var pageNode = FindPageObject (pageID);
	if (pageNode != null)
	{
		shapeNode = FindSVGShape (pageNode, shapeID);
	}
	
	return shapeNode;
}

function FindPageObject (pageID)
{
	var pageNode = null;

	if (g_svgDoc != null)
	{
		var childNodes = g_svgDoc.childNodes ();
		var childNodeCount = childNodes.length;
		var pageNode = null;
		for (var count = 0; (count < childNodeCount) && (pageNode == null); count++)
		{
			var childNode = childNodes.item(count);
			if (childNode != null && childNode.nodeName == "g")
			{
				var idAttr = childNode.attributes.getNamedItem("v:mID");
				if (idAttr != null && (1.0 * idAttr.nodeValue) == pageID)
				{
					pageNode = childNode;
				}
			}
		}
	}
	
	return pageNode;
}

function FindSVGShape (parentNode, shapeID)
{
	var shapeNode = null;

	if (parentNode != null)
	{
		var shapeColl = parentNode.childNodes ();
		var shapeCount = shapeColl.length;
		for (var count = 0; (count < shapeCount) && (shapeNode == null); count++)
		{
			var childNode = shapeColl.item(count);
			if (childNode != null)
			{
				if (childNode.nodeName == "g")
				{
					var idAttr = childNode.attributes.getNamedItem("v:mID");
					if (idAttr != null && (1.0 * idAttr.nodeValue) == shapeID)
					{
						shapeNode = childNode;
					}
					else
					{
						shapeNode = FindSVGShape (childNode, shapeID);
					}
				}
				else if (childNode.nodeName == "a")
				{
					shapeNode = FindSVGShape (childNode, shapeID);
				}
			}
		}
	}

	return shapeNode;
}

function ShowShape (pageID, shapeID, strOpacityVal)
{
	var shapeNode = GetSVGShape (pageID, shapeID);
	if (shapeNode != null)
	{
		var strOpacity = "opacity";
		var opacityAttr = shapeNode.attributes.getNamedItem(strOpacity);
		if (opacityAttr == null)
		{
			var ownerDoc = g_svgDoc.ownerDocument;
			if (ownerDoc != null)
			{
				opacityAttr = ownerDoc.createAttribute(strOpacity);
				if (opacityAttr != null)
				{
					shapeNode.attributes.setNamedItem (opacityAttr);
				}
			}
		}

		opacityAttr.nodeValue = strOpacityVal;
	}
}



