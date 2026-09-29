import re

with open('src/app/app.component.css', 'r') as f:
    content = f.read()

content = content.replace(
    ".contenedor main {\n    display: flex;",
    ".contenedor main {\n    display: flex;\n    background-color: #ffffff;\n    border-radius: 36px 36px 0 0;\n    box-shadow: -4px 0 24px rgba(0,0,0,0.02);"
)

content = content.replace(
    "@media (min-width:1024px) {\n    .contenedor main {\n        padding-top: 0;\n    }",
    "@media (min-width:1024px) {\n    .contenedor main {\n        padding-top: 0;\n        border-radius: 36px 0 0 36px;\n    }"
)

with open('src/app/app.component.css', 'w') as f:
    f.write(content)
