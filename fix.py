import re
import sys

def modify(filepath, classname):
    with open(filepath, 'r') as f:
        css = f.read()
    
    # We find blocks starting with .classname { ... } and replace width: 100% inside them
    # Because CSS might have @media, we can just find any width: 100%; that is physically after the class name
    # before the next closing brace.
    
    # This regex looks for .classname followed by any non-brace characters, then {
    # then any non-brace characters (but allows nested braces? CSS has no nested braces except media queries, which are outside).
    # So inside a rule block { ... }, we look for width: 100%;
    
    pattern = r'(\.' + classname + r'\s*\{[^\}]*?)width:\s*100%;([^\}]*?\})'
    
    while re.search(pattern, css):
        css = re.sub(pattern, r'\1width: 85%; margin: 0 auto;\2', css)
        
    with open(filepath, 'w') as f:
        f.write(css)

modify('src/app/content/experiencia/experiencia.component.css', 'experiencias')
modify('src/app/content/especialidad/especialidad.component.css', 'gridServiciosTecnicos')
modify('src/app/content/resumen/resumen.component.css', 'contentenedorTarjeta')
modify('src/app/content/educacion/educacion.component.css', 'educaciones')

print("Fixed specifically.")
