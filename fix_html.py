import re

with open('src/app/aside-menu/aside-menu.component.html', 'r') as f:
    content = f.read()

# Change [ngStyle]="li_something" to [ngClass]="li_something"
content = re.sub(r'\[ngStyle\]="(li_[a-zA-Z0-9_]+)"', r'[ngClass]="\1"', content)

with open('src/app/aside-menu/aside-menu.component.html', 'w') as f:
    f.write(content)
