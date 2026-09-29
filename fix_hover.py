import re

with open('src/app/aside-menu/aside-menu.component.css', 'r') as f:
    content = f.read()

content = content.replace(
    ".navegacion ul li:hover .hoverEfecto {\n    opacity: 0.9;\n    transform: translateX(3px);\n    transition: all 0.2s ease;\n}\n.aside_desktop .navegacion ul li a:hover {\n    background-color: #ffffff;\n}",
    ".navegacion ul li:hover .hoverEfecto {\n    opacity: 0.9;\n    transition: all 0.2s ease;\n}\n.aside_desktop .navegacion ul li a:hover {\n    background-color: #ffffff;\n    padding-left: 2.7rem;\n}"
)

with open('src/app/aside-menu/aside-menu.component.css', 'w') as f:
    f.write(content)
