import re
filepath = 'src/app/content/portafolio/portafolio.component.css'
with open(filepath, 'r') as f:
    css = f.read()

pattern = r'(\.content\s*\{[^\}]*?)width:\s*100%;([^\}]*?\})'
css = re.sub(pattern, r'\1\2', css)

with open(filepath, 'w') as f:
    f.write(css)

print("Fixed")
