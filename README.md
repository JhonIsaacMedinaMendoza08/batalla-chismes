# 👑 Reinas del Chisme

Una simulación de programación orientada a objetos (POO) en JavaScript, donde diferentes **chismosas profesionales** compiten para ver quién logra hacer el chisme más viral. 🗣️🔥

---

## 📁 Estructura del proyecto

```
batalla-chismes/
├── classes/
│   ├── Chismosa.js            # Clase abstracta base
│   ├── TiaVecina.js           # Subclase: escucha en reuniones del barrio
│   ├── CompaneraCuriosa.js    # Subclase: pregunta en la oficina
│   └── EstudianteEspia.js     # Subclase: espía chats en clase
├── index.js                   # Punto de entrada y batalla principal
├── package.json
├── .gitignore
└── README.md
```

---

## 🧠 Concepto

Cada chismosa tiene una personalidad única y estrategias para recolectar y difundir chismes:

| Chismosa           | Recolecta info...                            | Cuenta el chisme...                | Efectos                                                   |
| ------------------ | -------------------------------------------- | ---------------------------------- | --------------------------------------------------------- |
| `TiaVecina`        | En reuniones del barrio                      | Mientras ofrece café               | Chisme sube mucho, pero pierde reputación si exagera      |
| `CompaneraCuriosa` | Con preguntas disfrazadas de profesionalismo | Como ejemplo de vida en el trabajo | Gana reputación pero su chisme sube lento                 |
| `EstudianteEspia`  | Espiando chats desde el último puesto        | Filtra por estados en WhatsApp     | Chisme sube rápido pero pierde reputación si la descubren |

---

## ⚙️ Requisitos

- Node.js v14 o superior
- Terminal

---

## 🚀 Instalación y uso

1. Clona o descarga este repositorio:

```bash
git clone https://github.com/JhonIsaacMedinaMendoza08/batalla-chismes.git
cd batalla-chismes
```

2. Instala dependencias:

```bash
npm install
```

3. Ejecuta el programa:

```bash
node index.js
```

---

## 🧪 ¿Qué sucede al ejecutarlo?

- Se simulan **2 rondas** para cada chismosa.
- Cada ronda incluye:
  - Recolección de información.
  - Difusión del chisme.
  - Cambios aleatorios en reputación y nivel de chisme.
- Se muestran las estadísticas con formato de color:
  - 🟣 **Morado** para chismes virales (nivel ≥ 8)
  - 🟠 **Naranja** para reputación alta (≥ 7)
  - ⚫ **Negro** para reputación baja (≤ 4)
- Se declara una ganadora: **la chismosa con el chisme más viral**.

---

## 🧾 Licencia

Este proyecto es solo con fines educativos y de humor. No se promueve el chisme en la vida real… o sí. 😏

---

## ✨ Autoría

Desarrollado como parte de un taller de Programación Orientada a Objetos (POO).  
Puedes adaptarlo libremente a otros temas como:

- 🧙‍♂️ Batalla de magos
- 🐾 Mascotas con habilidades especiales
- 🤖 Robots cotillas