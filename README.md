# Patrones de diseño

Un patrón es una solución reutilizable que se puede aplicar a problemas que ocurren comúnmente en el diseño de software, en nuestro caso, en el desarrollo de juegos. Los patrones no son una solución exacta, sino más bien una plantilla para resolver un problema. No son un diseño terminado que se pueda transformar directamente en código. Son una descripción o plantilla de cómo resolver un problema que se puede usar en muchas situaciones diferentes. No se limitan a un lenguaje de programación específico. Son como un plano que se puede personalizar para resolver un problema de diseño particular en el código.

### Ventajas

1. Reutilización de código
  - Los patrones de diseño son plantillas probadas para resolver problemas de diseño comunes. Por lo tanto, son reutilizables y hacen que el código sea más limpio y fácil de entender.
2. Expresividad
  - Los patrones de diseño permiten que el código sea más expresivo. Esto significa que el código es más claro y más fácil de entender.
3. Estructura
  - Los patrones de diseño proporcionan una estructura para el código. Esto hace que el código sea más fácil de seguir y más fácil de mantener.
4. Comunicación
  - Los patrones de diseño proporcionan un lenguaje común que los desarrolladores pueden usar para comunicarse entre sí. Esto hace que el código sea más fácil de entender para todos los desarrolladores.
5. Abstracción
  - Los patrones de diseño proporcionan una abstracción de alto nivel de cómo funciona el código. Esto hace que el código sea más fácil de entender para todos los desarrolladores.

### Tipos de patrones

1. Creacionales
  - Los patrones de diseño creacionales se utilizan para crear objetos de manera adecuada para la situación en la que se utilizan. 
2. Estructurales
  - Los patrones de diseño estructurales se utilizan para formar grandes estructuras de software a partir de clases y objetos más pequeños y más simples.
3. Comportamiento
  - Los patrones de diseño de comportamiento se utilizan para administrar algoritmos, relaciones y responsabilidades entre objetos.

# Patrones

1. Segregación de interfaces
  - Basicamente se trata de dividir las interfaces en interfaces mas pequeñas y especificas, en lugar de tener una sola interfaz grande y general. De esta manera, las clases solo necesitan implementar las interfaces que son relevantes para ellas. Esto hace que el código sea más limpio y fácil de entender y evita que las clases implementen métodos que no necesitan.

2. Decorador
  - El patrón de decorador se utiliza para agregar funcionalidad a un objeto sin cambiar su estructura. Esto se puede lograr creando una clase decoradora que envuelve la clase original y proporciona funcionalidad adicional en sus métodos. La clase decoradora implementa la misma interfaz que la clase original, por lo que se puede usar en lugar de la clase original. La clase decoradora también contiene una referencia a la clase original, por lo que puede llamar a los métodos de la clase original y agregar funcionalidad adicional a los métodos. La clase decoradora también puede agregar nuevos métodos.


# Pattern Design

A pattern is a reusable solution that can be applied to commonly occurring problems in software design - in our case - in game development. Patterns are not an exact solution, but rather a template for solving a problem. They are not a finished design that can be transformed directly into code. They are a description or template for how to solve a problem that can be used in many different situations. They are not limited to a specific programming language. They are like a blueprint that can be customized to solve a particular design problem in code.

### Advantages

1. Code reuse
  - Design patterns are proven templates for solving common design problems. Therefore, they are reusable and make the code cleaner and easier to understand.
2. Expressiveness
  - Design patterns allow the code to be more expressive. This means that the code is clearer and easier to understand.
3. Structure
  - Design patterns provide a structure for the code. This makes the code easier to follow and easier to maintain.
4. Communication
  - Design patterns provide a common language that developers can use to communicate with each other. This makes the code easier to understand for all developers.
5. Abstraction
  - Design patterns provide a high-level abstraction of how the code works. This makes the code easier to understand for all developers.

### Types of patterns

1. Creational
  - Creational design patterns are used to create objects in a way appropriate to the situation in which they are used.
2. Structural
  - Structural design patterns are used to form large software structures from smaller and simpler classes and objects.
3. Behavioral
  - Behavioral design patterns are used to manage algorithms, relationships, and responsibilities between objects.

# Patterns

1. Interface segregation
  - Basically it is about dividing the interfaces into smaller and more specific interfaces, instead of having a single large and general interface. In this way, classes only need to implement the interfaces that are relevant to them. This makes the code cleaner and easier to understand and prevents classes from implementing methods they don't need.

2. Decorator
  - The decorator pattern is used to add functionality to an object without changing its structure. This can be achieved by creating a decorator class that wraps the original class and provides additional functionality in its methods. The decorator class implements the same interface as the original class, so it can be used instead of the original class. The decorator class also contains a reference to the original class, so it can call the methods of the original class and add additional functionality to the methods. The decorator class can also add new methods. 