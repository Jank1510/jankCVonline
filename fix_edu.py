import re
filepath = 'src/app/content/educacion/educacion.component.css'
with open(filepath, 'r') as f:
    css = f.read()

pattern = r'(\.gridEducacion\s*\{[^\}]*?)width:\s*100%;([^\}]*?\})'
while re.search(pattern, css):
    css = re.sub(pattern, r'\1width: 85%; margin: 0 auto;\2', css)

with open(filepath, 'w') as f:
    f.write(css)

print("Fixed edu")
