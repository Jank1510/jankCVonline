import re

with open('src/app/aside-menu/aside-menu.component.ts', 'r') as f:
    content = f.read()

# Replace the active state objects
def replace_active(match):
    return "{ 'color': '#000000', 'font-weight': '600', 'border-left': '3px solid #000000', 'background': '#f8f9fa' }"

content = re.sub(r"\{\s*'background':\s*'#ffffff',\s*'color':\s*'#2f2f2f',\s*'border-radius':\s*'1\.4rem 0 0 1\.4rem',\s*'font-weight':\s*'600',\s*'width':\s*this\.width\s*<\s*1024\s*\?\s*'112\.5%'\s*:\s*'100%'\s*\}", 
                 "{ 'color': '#000000', 'font-weight': '700', 'border-left': '3px solid #000000', 'background': '#f8fafc' }", content)

# Replace the adjacent border radius objects
content = re.sub(r"\{\s*'border-(top|bottom)-right-radius':\s*'1\.4rem'\s*\}", "{}", content)

with open('src/app/aside-menu/aside-menu.component.ts', 'w') as f:
    f.write(content)
