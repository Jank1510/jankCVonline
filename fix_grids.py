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
    
    # We want to find the desktop media query @media (min-width:1270px)
    # and change width: 100%; to width: 85%; margin: 0 auto; for those specific classes
    
    # Simple replace logic: find @media (min-width: 1270px) blocks
    # Actually, we can just replace width: 100%; inside those specific classes globally,
    # but let's be careful. Let's just do it for 1270px if possible, or everywhere.
    
    # In my previous script I blindly replaced width: Xvw; with width: 100%;
    # Let's see what they are currently.
    
    pattern = r'(\.' + classname + r' \{[\s\S]*?)width:\s*100%;([\s\S]*?\})'
    
    # Replace all width: 100%; in those classes with width: 85%; margin: 0 auto;
    # Wait, some might need width: 90% on mobile. 
    # Let's just replace all width: 100% in those classes with width: 90%; max-width: 58rem; margin: 0 auto;
    
    # Wait! If I just do max-width, it will be centered.
    pass

