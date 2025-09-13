🔀 Redirects in React Router

Redirects are used to automatically send users from one route to another.

In React Router v6, we use the Navigate component.

Example use cases:

Redirecting unauthorized users to a login page.

Redirecting from an old/deprecated URL to a new one.

🚫 Handling 404 (Not Found) Routes

A catch-all route is used to handle invalid or non-existent paths.

In React Router, you define a route with path="*" which matches anything not covered by other routes.

Use case:

Show a "Page Not Found" message when users enter a wrong URL.

📌 Other Useful Concepts
1. Index Routes

Used in nested routing.

When no child path is specified, the index route will render by default.

2. Search Params (Query Strings)

URLs can have queries like /products?category=shoes.

React Router provides the useSearchParams hook to read or update query parameters.

3. Navigation Types

Declarative Navigation → Using <Link> components.

Programmatic Navigation → Using useNavigate() hook inside functions or event handlers.

4. Protected Routes

A way to restrict access to certain pages (like Dashboard) unless the user is logged in.

Typically implemented with conditional rendering and redirects.


⚡ Dynamic Routing

Dynamic routing allows you to define paths with parameters. These parameters can be extracted using the useParams hook.



