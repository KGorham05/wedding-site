## Project State Management

**IMPORTANT: Always start by reading PROJECT_ROADMAP.md**

Before beginning any work session, read the PROJECT_ROADMAP.md file in the root directory. This file contains:
- Current project status and completed features
- Pending tasks and priorities
- Known issues and bugs
- File locations and technical architecture
- Session checklists for developers and AI agents
- Commands for testing, building, and deployment

**Maintaining the Roadmap:**
- After completing major features or bug fixes, update the COMPLETED section
- Move completed items from PENDING to COMPLETED
- Add new issues or requirements to the PENDING section
- Update the CURRENT STATUS section with any architectural changes
- Modify file paths in the TECHNICAL ARCHITECTURE section if files are moved or renamed
- Keep the SESSION CHECKLIST current with any new commands or validation steps

**Roadmap File Location:** `/PROJECT_ROADMAP.md`

The roadmap serves as the single source of truth for project state and should be referenced and updated throughout development sessions.

---

## Development Workflow & Commit Strategy

**IMPORTANT: Break Work into Logical Chunks**

AI agents must structure development work into logical, cohesive chunks and prompt the user to commit after each meaningful unit of work is completed. This ensures:
- Clean, focused commit history
- Easy rollback if issues arise
- Better collaboration and code review
- Proper documentation of development progress

**Commit Chunk Guidelines:**
- **Single Feature/Fix**: Each chunk should address one specific feature, bug fix, or refactoring task
- **Self-Contained**: The chunk should leave the codebase in a working, testable state
- **Reasonable Size**: Typically 3-10 files changed, avoiding massive commits
- **Clear Purpose**: The chunk should have a clear, describable purpose for the commit message

**Required Commit Prompting Process:**
1. **Complete a Logical Chunk**: After implementing a coherent piece of functionality
2. **Validate the Work**: Ensure tests pass, linting is clean, and the feature works as expected
3. **Suggest Commit Message**: Provide a clear, descriptive commit message following conventional commit format
4. **Prompt for Commit**: Explicitly ask the user to commit the changes before proceeding to the next chunk

**Commit Message Format:**
Use conventional commit format: `type(scope): description`

Examples:
- `feat(auth): add email/password authentication support`
- `fix(phone): resolve persistent phone capture prompt bug`
- `refactor(components): extract reusable form input component`
- `test(hooks): add unit tests for usePhoneCapture hook`
- `docs(roadmap): update project status and completed features`

**When to Prompt for Commits:**
- After implementing a new feature or component
- After fixing a bug or resolving an issue
- After completing a refactoring task
- After adding or updating tests
- After updating documentation or configuration
- Before starting work on a different feature/area of the codebase

**Example Prompting:**
"I've completed implementing the email/password authentication feature. The code is working, tests are passing, and the feature is ready to use. 

**Suggested commit message:**
`feat(auth): add email/password authentication alongside Google OAuth`

Would you like to commit these changes before I proceed to the next task?"

---

## Code Style Guide (Updated for Next.js 13+, Prisma, GraphQL, Tailwind)
React Components
All React components are written in TypeScript.

Each component resides in a directory named after it; inside, an index.ts or index.tsx exports all (export * from './Component').

Components are declared as export const SomeComponent = () => {}.

Use PascalCase for component and directory names.

Prefer Server Components by default; add 'use client' directive only for client-only or interactive components.

Use Next.js App Router conventions: place page components inside the app/ directory, using file-based routing.

Use dynamic imports for client-only components to optimize bundle size.

Utility Functions
Utility files live inside each component directory under a utils folder.

Each utility function is in its own file named after the function.

Export utilities as named exports, e.g., export const someFunc = () => {}.

Each utils directory has an index.ts barrel exporting all utilities.

Use camelCase for utility function names.

Code Quality & Testing
Use Vitest for unit testing TypeScript code.

Write unit tests for all utility functions.

Write integration tests for complex or interactive components.

Note: Skip linting checks in this project to conserve credits.

Programming Paradigms
Favor functional programming practices.

Use RamdaJS for functional utilities when appropriate.

Follow single responsibility principle in component and utility design.

Prefer immutability and pure functions.

Avoid side effects in utility functions.

Code Formatting
Use object property shorthand: {x, y} instead of {x: x, y: y}.

Destructure props and function parameters.

Use const assertions for literal types.

Utilize optional chaining (?.) and nullish coalescing (??).

Avoid emojis in code and comments.

File Organization
Group related components and features in feature-based directories under src/components or src/features.

Keep component files under 200 lines; extract complex logic into custom hooks (useSomething).

Use barrel exports consistently.

Organize Prisma schema and generated client under prisma/ and exclude generated code from git.

Place GraphQL API routes under src/app/api/graphql/.

TypeScript Best Practices
Define explicit types for component props.

Use generics for reusable components.

Prefer type aliases for simple objects.

Enable and enforce strict TypeScript configuration in tsconfig.json.

Import/Export Conventions
Use named exports consistently.

Order imports: external libraries, internal modules, relative imports.

Use path aliases configured in tsconfig.json (e.g., @/components, @/utils, @/lib).

Performance Considerations
Use React.memo for expensive components.

Properly specify dependency arrays in useEffect and other hooks.

Lazy load heavy components and pages via dynamic imports.

Optimize bundle size with Next.js features.

Use Next.js Image component for optimized images.

CSS & Styling
Use Tailwind CSS exclusively; no separate CSS files.

Follow mobile-first responsive design.

Use Tailwind’s responsive prefixes (sm:, md:, lg:, xl:).

Prefer utility classes and Tailwind’s design tokens for spacing, color, and typography.

Avoid custom CSS unless absolutely necessary.

Mobile-First Design
Develop with mobile screens as the baseline.

Test on mobile devices frequently.

Use responsive breakpoints to enhance larger screen experiences.

Design touch-friendly, accessible UI with sufficient spacing.

Optimize for one-handed and thumb navigation.

Prioritize mobile performance and loading speed.

Problem-Solving Guide (Updated for Current Stack)
Core Operating Principles
You are an autonomous agent. Work until the user’s query is fully resolved.

Never guess or assume. Use tools and data to confirm facts.

Plan extensively, reflect continuously. Think before and after every step.

Problem-Solving Methodology
Phase 1: Deep Problem Analysis
Parse user requests carefully.

Identify core requirements and constraints.

Define clear success criteria.

Phase 2: Comprehensive Investigation
Explore the project structure (src/app/, prisma/, public/, package.json).

Search for relevant code, configs, or docs.

Understand context incrementally.

Trace issues to their root cause.

Update your mental model continuously.

Phase 3: Strategic Planning
Design a detailed, stepwise solution plan.

Break down large changes into manageable increments.

Anticipate pitfalls and plan contingencies.

Validate that the plan addresses root causes.

Phase 4: Incremental Implementation
Read existing code before writing new code.

Make minimal, focused, testable changes.

Apply fixes methodically and verify results.

Maintain code quality, adhering to style guide.

Phase 5: Rigorous Debugging
Investigate errors systematically.

Add diagnostic logging or temporary debug code.

Test hypotheses deliberately with targeted tests.

Persist until root cause is identified.

Question assumptions if outcomes differ.

Phase 6: Comprehensive Testing and Validation
Test after each significant change.

Test edge cases and error conditions.

Validate against original user requirements.

Consider hidden or unstated requirements.

Document changes clearly.

Phase 7: Final Validation and Reflection
Review the entire solution holistically.

Test full end-to-end user workflows.

Assess impact on related systems or features.

Reflect on problem-solving process and lessons.

Critical Success Factors
Information Gathering
Use project exploration and search tools proactively.

Gather full context before modifying code.

Verify assumptions continuously.

Decision Making
Base decisions on evidence and data.

Make incremental, reversible changes.

Ensure high confidence before finalizing.

Quality Assurance
Ensure TypeScript compiles with no errors.

Write and run unit and integration tests.

Validate performance and responsiveness.

Note: Skip linting to conserve credits in this project.

Communication
Document reasoning and decisions clearly.

Be transparent about uncertainties.

Confirm solutions meet user needs.

Next.js Specific Validation
Use App Router patterns with server components.

Validate API routes under src/app/api/.

Ensure static optimization where applicable.

Use Next.js Image and dynamic imports.

Test routing, metadata, and SEO compliance.

Testing Strategy
Unit test utilities with Vitest.

Integration test interactive components.

Test responsive design on mobile and desktop.

Monitor bundle size and performance metrics.

Cross-browser testing.

Environment Consistency Checks
Confirm successful builds with yarn build.

Check for dependency conflicts and security issues.

Align config files (next.config.js, tsconfig.json, .eslintrc.js).

Enforce strict TypeScript mode.

Verify production environment readiness.

Note: Skip linting steps to conserve credits.

Final reminder: You’re not done until it works fully and robustly with all tests passing and requirements met.

---

## Roadmap Maintenance Protocol

**End-of-Session Requirements:**
After completing any significant work, update PROJECT_ROADMAP.md with:

1. **Status Updates:**
   - Move completed items from PENDING to COMPLETED
   - Add timestamps and brief descriptions of what was accomplished
   - Update any changed file paths or architectural decisions

2. **New Issues:**
   - Document any bugs discovered during development
   - Add new feature requirements that emerged
   - Note any technical debt or refactoring needs

3. **Technical Changes:**
   - Update database schema changes in the TECHNICAL ARCHITECTURE section
   - Modify API endpoint listings if routes were added/changed
   - Update authentication flow if auth changes were made

4. **Validation:**
   - Ensure all commands in SESSION CHECKLIST still work
   - Update environment variable requirements if needed
   - Verify all file paths in the roadmap are current

**Session Handoff:**
The roadmap enables seamless handoffs between AI agents and human developers by providing:
- Clear understanding of what's been done
- Immediate access to current priorities
- Technical context and file locations
- Working commands for validation

Always treat PROJECT_ROADMAP.md as a living document that reflects the true state of the project.
