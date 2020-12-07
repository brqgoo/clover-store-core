class RequestMethod {
	public static timeout = 10000;	//10s
	

	

	public static post(path, data, backfunc,time:number=10000) {
		var httpRequest = new XMLHttpRequest();
		httpRequest.open('POST', path, true);
		httpRequest.timeout = time||RequestMethod.timeout;
		httpRequest.setRequestHeader("Content-type", "application/json");
		
		try {
			httpRequest.send(JSON.stringify(data));
		} catch (error) {
			utils.T.trace("post-data-error=", error);
		}
	

		var issent = false;
		httpRequest.onload = function () {
			if (issent) return;
			issent = true;
			var json = httpRequest.responseText;		 		
			if (backfunc && json) backfunc(1, json);
		}
		httpRequest.onerror = function () {
			utils.T.trace("httpRequest.onerror--="+httpRequest.responseText);
			if (issent) return;
			issent = true;
			if (backfunc) backfunc(0, JSON.stringify({ code: 0, message: httpRequest.responseText }));
		}
		httpRequest.ontimeout = function () {
			utils.T.trace("httpRequest.ontimeout--="+httpRequest.responseText);
			if (issent) return;
			issent = true;
			if (backfunc) backfunc(0, JSON.stringify({ code: 0, message: httpRequest.responseText }));
		}
	}

	public static postJQ(path, data, backfunction, ty: string = "post", dataType: string = "json") {
		var aa = {
			url: path,
			type: ty,	//"post",
			timeout: RequestMethod.timeout,
			// data: JSON.stringify(data),
			dataType: dataType,
			contentType: "application/json;charset=UTF-8",
			success: function (_data) {
				//callback;
				if (backfunction) backfunction(1, JSON.stringify(_data));
			},
			error: function (XMLHttpRequest, textStatus, errorThrown, aa) {
				
			},
		}
	
		try {
			// view.htpageControl.htpage.mid.ajax(aa);
		} catch (error) {
			utils.T.trace("post-data-error=", error);
		}
	}

}