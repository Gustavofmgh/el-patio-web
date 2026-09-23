#!/bin/zsh
# Doble clic: sirve la web en local y abre las tres versiones.
cd "$(dirname "$0")"
python3 -m http.server 8765 >/dev/null 2>&1 &
sleep 1
open "http://localhost:8765/v1/index.html" "http://localhost:8765/v2/index.html" "http://localhost:8765/v3/index.html"
echo "Web en http://localhost:8765  (cierra esta ventana para pararla)"
wait
