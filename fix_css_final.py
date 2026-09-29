import re

with open('src/app/aside-menu/aside-menu.component.css', 'r') as f:
    content = f.read()

# First, ensure menu-activo class exists and replaces the inline styles equivalent
new_classes = """
.menu-activo {
    background: #ffffff !important;
    color: #2f2f2f !important;
    border-left: 4px solid #111111 !important;
    border-radius: 1.4rem 0 0 1.4rem !important;
    font-weight: 600 !important;
}

.aside_desktop .navegacion ul li a {
    position: relative;
    transition: background-color 0.25s ease, color 0.25s ease;
}

.aside_desktop .navegacion ul li a::before,
.aside_desktop .navegacion ul li a::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1.4rem;
    height: 1.4rem;
    background-color: #ffffff;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s ease;
    z-index: 10;
}

.aside_desktop .navegacion ul li a::before {
    top: -1.4rem;
    border-bottom-left-radius: 1.4rem;
}

.aside_desktop .navegacion ul li a::after {
    bottom: -1.4rem;
    border-top-left-radius: 1.4rem;
}

.aside_desktop .navegacion ul li a.menu-activo::before,
.aside_desktop .navegacion ul li a.menu-activo::after {
    opacity: 1;
}
"""

content = content + new_classes

with open('src/app/aside-menu/aside-menu.component.css', 'w') as f:
    f.write(content)
