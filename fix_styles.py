with open('src/styles.css', 'r') as f:
    css = f.read()

css = css.replace('.content {\n    width: 85%;\n    margin: 0 auto;\n}', '@media (min-width: 1024px) {\n    .content {\n        width: 85%;\n        margin: 0 auto;\n    }\n}')

with open('src/styles.css', 'w') as f:
    f.write(css)

print("Fixed styles")
