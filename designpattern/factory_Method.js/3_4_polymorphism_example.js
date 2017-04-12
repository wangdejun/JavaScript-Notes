function Add(){
	function zero(){
		return 10;
	}

	function one(num){
		return 10+num;
	}

	function two(num1,num2){
		return num1+num2;
	}
	
	this.add = function(){
		var arg = arguments,
			len = arguments.length;
		switch(len){
			case 0:
				return zero();
			case 1:
				return one(arg[0]);
			case 2:
				return two(arg[0],arg[1]);
		}
	}
}

var a = new Add();
console.log(a.add())
console.log(a.add(1))
console.log(a.add(1,2))


function follow(csuid,csuname,btn){
	function followonly(csuid, csuname){
		if (!login){
			$('#spmodal h4', window.parent.document).html(gettext('Please sign in'));
			$('#spmsg', window.parent.document).html(gettext("Join XXX to follow ")+csuname+gettext("'s closet!"));
			$('#spmodal', window.parent.document).modal('show');
			return;
		}
	    var data = new Object();
		data.action = 'follow';
	    data.feid = csuid;
	    myajax('POST', '/follow/', data);
		$('#'+csuid).addClass('disabled').attr('disable', 'disable');
	}

	function followbtn(csuid, csuname, btn){
		// Global变量获取btndom
	    rframe_follow_btn = btn;
	    if (!login) {
	        $('#spmodal h4', window.parent.document).html(gettext('Please sign in'));
	        $('#spmsg', window.parent.document).html(gettext("Join XXX to follow ") + csuname + gettext("'s closet!"));
	        $('#spmodal', window.parent.document).modal('show');
	        return;
	    }
	    //为发送ajax做准备
	    var data = new Object();
	    data.action = "follow";
	    data.uni = 1; 
	    data.feid = csuid;

	    myajax('POST', '/follow/', data);
	    rframe_follow_btn.attr('disabled', true);
	}

	var args = arguments,
	var len = arguments.length;

	switch(len){
		case 2:
			return this.followonly(csuid, csuname);
		case 3:
			return this.followbtn(csuid, csuname, btn);
	}
}




