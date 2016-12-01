@csrf_exempt

def push_news(request):
	error = None
	if not request.method == u"POST":
		error = _("Request is not POST")
	lsuser