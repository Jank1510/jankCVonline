import re

with open('src/app/aside-menu/aside-menu.component.ts', 'r') as f:
    content = f.read()

content = re.sub(r"('background': '#ffffff', 'color': '#2f2f2f', )", r"\g<1>'border-left': '4px solid #111111', ", content)

with open('src/app/aside-menu/aside-menu.component.ts', 'w') as f:
    f.write(content)
