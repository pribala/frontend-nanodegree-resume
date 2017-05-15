import webbrowser
import os
page_content = '''<body> 
<div>
	{list_content}
</div>
</body>'''	
def create_List(args):
    # args = input()
    htmlStr = "<ul>\n"
    for item in args:
        htmlStr += "<li>" + str(item) + "</li>\n"
    htmlStr += "</ul>"
    # h = HTML('html', 'htmlStr')
    return htmlStr	
	
def display_List():
    args = ["cow", "dog", "cat"]
    # Create or overwrite the output file
    output_file = open('user_list.html', 'w')	
    # Replace the list content placeholder with generated content
    rendered_content = page_content.format(
        list_content=create_List(args))

    # Output the file
    output_file.write(rendered_content)
    output_file.close()

    # open the output file in the browser (in a new tab, if possible)
    url = os.path.abspath(output_file.name)
    webbrowser.open('file://' + url, new=2)
	
'''listStr=["Cow", "Dog", "Cat"]
#listStr=[1,2,3]	
print(create_List())'''
	
