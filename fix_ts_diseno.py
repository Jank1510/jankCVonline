import re

with open('src/app/aside-menu/aside-menu.component.ts', 'r') as f:
    content = f.read()

content = re.sub(
    r"this\.li_diseno1 = 'menu-vecino-superior'",
    "this.li_diseno1 = ''",
    content
)

content = re.sub(
    r"this\.li_diseno2 = 'menu-vecino-inferior'",
    "this.li_diseno2 = ''",
    content
)

# And if they were set to the opposite ones just in case:
content = re.sub(
    r"this\.li_diseno2 = 'menu-vecino-superior'",
    "this.li_diseno2 = ''",
    content
)
content = re.sub(
    r"this\.li_diseno1 = 'menu-vecino-inferior'",
    "this.li_diseno1 = ''",
    content
)

with open('src/app/aside-menu/aside-menu.component.ts', 'w') as f:
    f.write(content)
