import { Link } from "waku";

import { Counter } from "../components/counter";

export default async function HomePage() {
	const data = await getData();

	return (
		<div>
			<title>{data.title}</title>
			<h1 className="text-4xl font-bold tracking-tight">
				{data.headline}
			</h1>
			<p>{data.body}</p>
			<div className="max-w-lg">
				Reproduction:
				<br />
				To reproduce the error, change something like a className on the
				Counter component in src/components/counter.tsx and save the
				file. The page will reload and the error will appear. and then
				refresh the page. This will trigger and error like the one
				below:
				<details>
					<summary className="cursor-pointer">Error</summary>
					<pre className="max-w-lg overflow-auto">
						<code>{errorLog}</code>
					</pre>
				</details>
			</div>
			<Counter />
			<Link to="/about" className="mt-4 inline-block underline">
				About page
			</Link>
		</div>
	);
}

const getData = async () => {
	const data = {
		title: "Waku",
		headline: "Waku",
		body: "Hello world!",
	};

	return data;
};

export const getConfig = async () => {
	return {
		render: "static",
	};
};

export const errorLog = `
chunk-LWCPACMP.js?v=f1c843ad:3 Download the React DevTools for a better development experience: https://react.dev/link/react-devtools
react-dom.development.js:106 Warning: A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch "if (typeof window !== 'undefined')".
- Variable input such as "Date.now()" or "Math.random()" which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <InnerRouter routerData={[...]}>
      <Slot id="layout" fallback={<Slot>}>
        <RootLayout>
          <div className={"font-['N..."}>
            <meta>
            <link>
            <header>
            <main className="m-6 flex i...">
              <Children>
                <Slot id="page" fallback={null}>
                  <HomePage>
                    <div>
                      <title>
                      <h1>
                      <p>
                      <div>
                      <Counter>
                        <section className="border-blu...">
                          <div>
                          <button
                            onClick={function handleIncrement}
+                           className="rounded-sm bg-black px-2 py-0.5 text-md text-white"
-                           className="rounded-sm bg-black px-2 py-0.5 text-sm text-white"
                          >
                            Increment
                      ...
            ...

printWarning @ react-dom.development.js:106
error @ react-dom.development.js:80
emitPendingHydrationWarnings @ react-dom.development.js:15921
completeWork @ react-dom.development.js:27644
completeUnitOfWork @ react-dom.development.js:33561
performUnitOfWork @ react-dom.development.js:33369
workLoopSync @ react-dom.development.js:33074
renderRootSync @ react-dom.development.js:33029
performConcurrentWorkOnRoot @ react-dom.development.js:32122
workLoop @ scheduler.development.js:252
flushWork @ scheduler.development.js:221
performWorkUntilDeadline @ scheduler.development.js:528
`;
