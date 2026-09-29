import re

with open('src/app/aside-menu/aside-menu.component.ts', 'r') as f:
    content = f.read()

# Remove background and border-radius from active state
content = re.sub(
    r"\{\s*'background':\s*'#ffffff',\s*'color':\s*'#2f2f2f',\s*'border-left':\s*'4px solid #111111',\s*'border-radius':\s*'1\.4rem 0 0 1\.4rem',\s*'font-weight':\s*'600',\s*'width':\s*this\.width\s*<\s*1024\s*\?\s*'112\.5%'\s*:\s*'100%'\s*\}",
    "{ 'background': '#ffffff', 'color': '#111111', 'border-left': '4px solid #111111', 'font-weight': '700' }",
    content
)

content = re.sub(
    r"\{\s*'background':\s*'#ffffff',\s*'color':\s*'#2f2f2f',\s*'border-radius':\s*'1\.4rem 0 0 1\.4rem',\s*'font-weight':\s*'600',\s*'width':\s*this\.width\s*<\s*1024\s*\?\s*'112\.5%'\s*:\s*'100%'\s*\}",
    "{ 'background': '#ffffff', 'color': '#111111', 'border-left': '4px solid #111111', 'font-weight': '700' }",
    content
)

# Remove adjacent border radius
content = re.sub(r"\{\s*'border-(top|bottom)-right-radius':\s*'1\.4rem'\s*\}", "{}", content)

with open('src/app/aside-menu/aside-menu.component.ts', 'w') as f:
    f.write(content)
