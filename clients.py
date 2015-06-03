first = True

lines = [line.strip('\n') for line in open('clients.txt')]
for line in lines:
	if first:
		print("<div class=\"card\">")
		print("\t<div class=\"name\">{0}</div>".format(line))
		first = False
	else:
		print("\t<div class=\"link\"><a href=\"http://{0}\">{0}</a></div>".format(line))
		print("</div>")
		first = True
	