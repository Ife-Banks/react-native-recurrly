import os
for root, dirs, files in os.walk('.'):
    if 'node_modules' in root.split(os.sep):
        continue
    for f in files:
        path = os.path.join(root, f)
        if path.endswith('.png') or path.endswith('.jpg') or path.endswith('.json'):
            continue
        try:
            with open(path, encoding='utf-8') as fh:
                data = fh.read()
        except Exception:
            continue
        if 'initialRouteName' in data:
            print(path)
