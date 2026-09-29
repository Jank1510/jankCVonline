import re

with open('src/app/aside-menu/aside-menu.component.ts', 'r') as f:
    content = f.read()

# Replace types
content = re.sub(r'li_[a-zA-Z0-9_]+!: object', lambda m: m.group(0).replace('object', 'string'), content)

# Replace active assignment
content = re.sub(
    r"this\.(li_[a-zA-Z0-9_]+) = \{ 'background': '#ffffff', 'color': '#2f2f2f', 'border-left': '4px solid #111111', 'border-radius': '1\.4rem 0 0 1\.4rem', 'font-weight': '600', 'width':[^\}]+\}",
    r"this.\1 = 'menu-activo'",
    content
)

# Replace top-right-radius assignment (vecino inferior)
content = re.sub(
    r"this\.(li_[a-zA-Z0-9_]+) = \{ 'border-top-right-radius': '1\.4rem' \}",
    r"this.\1 = 'menu-vecino-inferior'",
    content
)

# Replace bottom-right-radius assignment (vecino superior)
content = re.sub(
    r"this\.(li_[a-zA-Z0-9_]+) = \{ 'border-bottom-right-radius': '1\.4rem' \}",
    r"this.\1 = 'menu-vecino-superior'",
    content
)

# Replace empty object assignment with empty string
content = re.sub(
    r"this\.(li_[a-zA-Z0-9_]+) = \{\}",
    r"this.\1 = ''",
    content
)

with open('src/app/aside-menu/aside-menu.component.ts', 'w') as f:
    f.write(content)
