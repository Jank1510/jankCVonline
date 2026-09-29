import re

with open('src/app/aside-menu/aside-menu.component.ts', 'r') as f:
    content = f.read()

content = re.sub(r"'invert\(0\) opacity\(80%\)'", "'opacity(100%)'", content)

with open('src/app/aside-menu/aside-menu.component.ts', 'w') as f:
    f.write(content)
