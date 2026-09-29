import re

with open('src/app/app.component.css', 'r') as f:
    content = f.read()

# Modify .contenedor main to have background and border-radius
content = re.sub(
    r'\.contenedor main \{([^\}]+)\}',
    r'.contenedor main {\1\n    background: #ffffff;\n    border-radius: 40px 0 0 40px;\n}',
    content
)

with open('src/app/app.component.css', 'w') as f:
    f.write(content)
