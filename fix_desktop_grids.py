import re

files_to_fix = [
    ('src/app/content/experiencia/experiencia.component.css', '.experiencias'),
    ('src/app/content/especialidad/especialidad.component.css', '.gridServiciosTecnicos'),
    ('src/app/content/resumen/resumen.component.css', '.contentenedorTarjeta'),
    ('src/app/content/educacion/educacion.component.css', '.educaciones')
]

for filepath, classname in files_to_fix:
    with open(filepath, 'r') as f:
        css = f.read()
    
    # We replace any width: 100%; with width: 85%; margin: 0 auto;
    # But only inside those classes.
    pattern = r'(\.' + classname + r'\s*\{[\s\S]*?)width:\s*100%;([\s\S]*?\})'
    
    while re.search(pattern, css):
        css = re.sub(pattern, r'\1width: 85%; margin: 0 auto;\2', css)
        
    with open(filepath, 'w') as f:
        f.write(css)

print("Applied 85% width to grids.")
