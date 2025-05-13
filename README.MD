# How does TypeScript help in improving code quality and project maintainability?

- **Static Typing**: TypeScript’s static type system catches type-related errors during development rather than at runtime. This reduces bugs related to unexpected values, ensuring that you’re working with the correct data structures.

- **Code Readability**: By defining types and interfaces, TypeScript makes the code more readable and self-documenting. Other developers can quickly understand the expected data types and object shapes just by looking at the code.

- **IDE Support**: TypeScript offers auto-completion, type suggestions, and documentation hints in modern IDEs like Visual Studio Code. This boosts productivity and reduces the chances of making errors, as developers are guided in real-time.

- **Refactoring**: TypeScript’s type system ensures that refactoring is easier and safer. If you change the structure of a type or interface, TypeScript can quickly identify places in the codebase where the changes should be applied, preventing many common mistakes during refactor.

- **Better Collaboration**: TypeScript allows teams to work with well-defined types, which reduces misunderstandings about how different pieces of the system interact. Clearer contracts (interfaces and types) between modules lead to better collaboration among team members.

- **Error Prevention**: TypeScript can catch common runtime errors like null and undefined values or wrong function arguments at compile time, leading to fewer runtime issues in production.

---

# What are some differences between interfaces and types in TypeScript?

In TypeScript, both `interface` and `type` are used to describe the shape of objects. While they often seem interchangeable, there are key differences that can influence which one you choose in a project.

```typescript
interface A {
  name: string;
}

interface B extends A {
  age: number;
}

type X = { name: string };
type Y = X & { age: number };
```
