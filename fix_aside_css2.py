import re

with open('src/app/aside-menu/aside-menu.component.css', 'r') as f:
    content = f.read()

content = re.sub(
    r"\.aside_desktop \{([^\}]+)color: #[0-9a-fA-F]+;([^\}]+)\}",
    r".aside_desktop {\1color: #111111;\n    background-color: #f8f9fa;\2}",
    content
)

content = re.sub(
    r"\.aside_Ipad \{([^\}]+)color: #[0-9a-fA-F]+;([^\}]+)\}",
    r".aside_Ipad {\1color: #111111;\n    background-color: #f8f9fa;\2}",
    content
)

with open('src/app/aside-menu/aside-menu.component.css', 'w') as f:
    f.write(content)
