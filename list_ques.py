def create_List(args):
    htmlStr = "<ul>\n"
    for item in args:
        htmlStr += "<li>" + str(item) + "</li>\n"
    htmlStr += "</ul>"
    # h = HTML('html', 'htmlStr')
    return htmlStr	
	
listStr=["Cow", "Dog", "Cat"]
#listStr=[1,2,3]	
print(create_List(listStr))
	
