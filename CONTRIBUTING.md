# CONTRIBUTING

## 1. Objetivo

Este repositorio adopta un estándar de commits y pull requests diseñado para:

- Mantener un historial limpio y comprensible.
- Promover revisiones rápidas y efectivas.
- Generar diffs fáciles de interpretar.
- Permitir reversibilidad segura.
- Adaptarse al desarrollo asistido por IA.

El historial de commits es un activo del proyecto. Debe mantenerse claro desde el inicio.

---

## 2. Principios Fundamentales

### 2.1 Un commit = una intención

Cada commit debe representar una única intención clara y específica.
Si un cambio puede dividirse, debe dividirse.

---

### 2.2 Commits atómicos

Un commit debe ser:

- Pequeño
- Reversible
- Independiente

Debe ser posible revertirlo sin afectar cambios no relacionados.

---

### 2.3 Historial limpio

Un historial se considera incorrecto cuando:

- Los mensajes son genéricos (“arreglado”, “cambios”).
- Se commitea sin que se pasen los tests.
- Se mezclan múltiples cambios sin relación.
- Existen múltiples commits de fix que corrigen errores de commits anteriores.

---

## 3. Estándar de Mensajes de Commit

Se adopta la convención de Conventional Commits.

Formato:

tipo: descripción breve y específica

- Primera línea clara.
- Contexto adicional si es necesario.
- Explicación de decisiones relevantes.

Tipos permitidos:

- feat → Nueva funcionalidad
- fix → Corrección de bug
- refactor → Cambio interno sin alterar comportamiento
- docs → Documentación
- test → Tests
- chore → Configuración o tareas técnicas
- style → Cambios de formato sin impacto funcional

Ejemplo:

feat: agregar validación de email en registro

Se valida formato y dominio.
Se agrega test unitario correspondiente.

Si no se puede describir el commit en una sola oración clara, el commit es demasiado grande.

---

## 4. Desarrollo Asistido por IA

El uso de herramientas de IA puede introducir cambios colaterales no solicitados.
Por lo tanto, se establecen las siguientes reglas:

### 4.1 Trabajo por fases

Al utilizar IA:

- Solicitar que el trabajo se divida en fases, trabajos y tareas.
- Implementar una tarea por vez.
- Realizar un commit por tarea.
- Verificar compilación antes de commitear.
- Rechazar cambios colaterales innecesarios, o posponerlos.

Ejemplo:

Diseña una web que… Divide el trabajo en fases, trabajos y tareas con el fin de que los trabajos sean commiteados de forma atómica, reversible y revisable. Después de cada commit asegura que compila. Asegurate de que la primera línea de los commits sea muy descriptiva, y en las siguientes líneas agrega contexto para revisiones posteriores.

---

### 4.2 Pull Requests

Una Pull Request debe:

- Ser revisable en 5–10 minutos.
- Tener alcance acotado.
- No ser masiva.
- Tener una descripción clara.

---

## 5. Trabajo en Progreso (WIP)

- No subir commits inestables a ramas principales.
- Utilizar ramas para trabajo en progreso.
- Las ramas no deben ser multipropósito. Una rama = un objetivo.
- Las ramas no deben quedar abiertas indefinidamente.
- Cuando el desarrollo finaliza, la rama debe fusionarse con `main` y luego cerrarse.
- Asegurar que cada commit en la rama final cumpla los principios definidos.

---

### 5.1 Fusión de la rama con el tronco principal

Para código desarrollado con asistencia de IA, se recomienda `merge` antes que `rebase`, ya que preserva el contexto histórico completo.

---
