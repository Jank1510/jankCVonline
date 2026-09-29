import re

with open('src/app/aside-menu/aside-menu.component.css', 'r') as f:
    content = f.read()

# Make aside_desktop white and border-right
content = content.replace(
    ".aside_desktop {\n    width: 20vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    position: fixed;",
    ".aside_desktop {\n    width: 20vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: #111111;\n    background-color: #f8f9fa;\n    position: fixed;"
)

# Remove navigation ul gradient
content = re.sub(
    r"\.aside_desktop \.navegacion ul \{\s*/\*gradiente[^\*]+\*/\s*width: 80%;\s*background: linear-gradient[^\}]+;\s*padding: 0;\s*margin-left: 20%;\s*transition: background 0\.2s ease;\s*\}",
    ".aside_desktop .navegacion ul {\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}",
    content
)

# Fix link base state
content = re.sub(
    r"\.aside_desktop \.navegacion ul li a \{\s*box-sizing: border-box;\s*display: flex;\s*flex-direction: row;\s*align-items: center;\s*background: #4a4a4a;\s*width: 100%;\s*text-decoration: none;\s*color: white;\s*border-radius: 1\.4rem 0 0 1\.4rem;\s*transition: [^\}]+;\s*\}",
    ".aside_desktop .navegacion ul li a {\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background: transparent;\n    width: 100%;\n    text-decoration: none;\n    color: #444444;\n    padding-left: 2.5rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-left: 4px solid transparent;\n    transition: background-color 0.15s ease, color 0.15s ease, border-left 0.15s ease;\n}",
    content
)

# Add spacing to li
content = content.replace(
    ".navegacion ul li {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n}",
    ".navegacion ul li {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    margin-bottom: 0.35rem;\n}"
)

# Fix hover
content = content.replace(
    ".navegacion ul li:hover .hoverEfecto {\n    opacity: 70%;\n    transition: opacity 0.2s ease;\n}",
    ".navegacion ul li:hover .hoverEfecto {\n    opacity: 0.9;\n    transform: translateX(3px);\n    transition: all 0.2s ease;\n}\n.aside_desktop .navegacion ul li a:hover {\n    background-color: #ffffff;\n}"
)

# Fix icons
content = content.replace(
    "ul li img {\n    filter: invert(1);\n}",
    "ul li img {\n    opacity: 0.65;\n    transition: all 0.2s ease;\n}"
)

# Fix aside_Ipad
content = content.replace(
    ".aside_Ipad {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    position: fixed;",
    ".aside_Ipad {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: #111111;\n    background-color: #f8f9fa;\n    position: fixed;"
)

content = content.replace(
    ".aside_Ipad .navegacion ul li {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}",
    ".aside_Ipad .navegacion ul li {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}"
)

content = content.replace(
    ".aside_Ipad .navegacion ul li a {\n        box-sizing: border-box;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        background: transparent;\n        width: 100%;\n        padding: 0;\n        text-decoration: none;\n        color: white;\n        transition: opacity 0.2s ease, background 0.25s ease, width 0.25s ease;\n    }",
    ".aside_Ipad .navegacion ul li a {\n        box-sizing: border-box;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        background: transparent;\n        width: 100%;\n        padding: 0.75rem 1.5rem;\n        border-left: 4px solid transparent;\n        text-decoration: none;\n        color: #444444;\n        transition: background-color 0.15s ease, border-left 0.15s ease;\n    }"
)

content = content.replace(
    ".closedMenu {\n    position: absolute;\n    z-index: 2;\n    filter: invert(.95);\n}",
    ".closedMenu {\n    position: absolute;\n    z-index: 2;\n    opacity: 0.6;\n}"
)

with open('src/app/aside-menu/aside-menu.component.css', 'w') as f:
    f.write(content)
